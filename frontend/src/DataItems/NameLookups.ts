import { stringToPowerWatts } from "../Utils/FactorioUnitReading";
import { stringToEunm } from "../Utils/StringToEnum";
import { CraftingMachineDefinition } from "./CraftingMachineDefinition";
import { Effect } from "./EffectDefinitions";
import { FluidDefinition } from "./FluidDefinition";
import { ItemDefinition } from "./ItemDefinition";
import { RecipeCategory } from "./RecipeCategory";
import { RecipeDefinition } from "./RecipeDefinition";
import { RecipeInput } from "./RecipeInput";
import { RecipeOutput } from "./RecipeOutput";
import { AssemblingMachineNode } from "./StructuredDump/AssemblingMachinesType";
import { FluidNode } from "./StructuredDump/FluidsType";
import { FurnaceNode } from "./StructuredDump/FurnacesType";
import { ItemNode } from "./StructuredDump/ItemsType";
import { RecipeCategoryNode } from "./StructuredDump/RecipeCategoriesType";
import { RecipeIngredientData, RecipeNode, RecipeResultData } from "./StructuredDump/RecipesType";


export class NameLookups {
    public readonly items: Map<string, ItemDefinition>;
    public readonly fluids: Map<string, FluidDefinition>;

    public readonly recipeCategories: Map<string, RecipeCategory>;
    public readonly recipes: Map<string, RecipeDefinition>;

    public readonly craftingMachines: Map<string, CraftingMachineDefinition>;

    public constructor(recipeCategories: Map<string, RecipeCategory>, items: Map<string, ItemDefinition>, fluids: Map<string, FluidDefinition>,
        recipes: Map<string, RecipeDefinition>, craftingMachines: Map<string, CraftingMachineDefinition>) {
        this.recipeCategories = recipeCategories;

        this.items = items;
        this.fluids = fluids;

        this.recipes = recipes;
        this.craftingMachines = craftingMachines;
    }

    public static CreateFromDump(
        dumpRecipeCategores: Record<string, RecipeCategoryNode>,
        dumpItems: Record<string, ItemNode>,
        dumpFluids: Record<string, FluidNode>,
        dumpRecipes: Record<string, RecipeNode>,
        dumpAssemblingMachines: Record<string, AssemblingMachineNode>,
        dumpFurnaces: Record<string, FurnaceNode>
    ): NameLookups 
    {
        let recipeCategories = new Map(
            Object.values(dumpRecipeCategores).map(node => [node.name, NameLookups.CategoryFromNode(node)])
        );
        
        let items = new Map(
            Object.values(dumpItems).map(node => [node.name, NameLookups.ItemFromNode(node)])
        );
        let fluids = new Map(
            Object.values(dumpFluids).map(node => [node.name, NameLookups.FluidFromNode(node)])
        )

        let recipes = new Map(
            Object.values(dumpRecipes).map(node => [node.name, NameLookups.RecipeFromNode(node, recipeCategories, items, fluids)])
        );

        let craftingMachines = new Map(
            Object.values(dumpAssemblingMachines).map(node => [node.name, NameLookups.CraftingMachineFromAssemblingMachineNode(node, recipeCategories, recipes)] as const).
            concat(Object.values(dumpFurnaces).map(node => [node.name, NameLookups.CraftingMachineFromFurnaceNode(node, recipeCategories)]))
        );

        return new NameLookups(recipeCategories, items, fluids, recipes, craftingMachines);
    }

    private static CategoryFromNode(node: RecipeCategoryNode): RecipeCategory {
        return new RecipeCategory(node.name);
    }

    private static ItemFromNode(node: ItemNode): ItemDefinition {
        return new ItemDefinition(node.name, node.stack_size, node.weight)
    }
    private static FluidFromNode(node: FluidNode): FluidDefinition {
        return new FluidDefinition(node.name);
    }

    private static RecipeFromNode(node: RecipeNode, recipeCategories: Map<string, RecipeCategory>, items: Map<string, ItemDefinition>, fluids: Map<string, FluidDefinition>): RecipeDefinition {
        let category = recipeCategories.get(node.category ?? "")
        
        let nodeIngredients = Array.isArray(node.ingredients) ? node.ingredients : [];
        let inputs = nodeIngredients.map(i => NameLookups.RecipeInputFromNode(i, items, fluids));

        let nodeResults = Array.isArray(node.results) ? node.results : [];
        let outputs = nodeResults.map(o => NameLookups.RecipeOutputFromNode(o, items, fluids));

        return new RecipeDefinition(node.name, category, inputs, outputs, node.energy_required ?? 0, node.allow_productivity ?? false);
    }

    private static RecipeInputFromNode(node: RecipeIngredientData, items: Map<string, ItemDefinition>, fluids: Map<string, FluidDefinition>): RecipeInput {
        let metaItemDefinition = NameLookups.GetMetaItem(node, items, fluids);

        return new RecipeInput(metaItemDefinition, node.amount);
    }

    private static RecipeOutputFromNode(node: RecipeResultData, items: Map<string, ItemDefinition>, fluids: Map<string, FluidDefinition>): RecipeOutput {
        let metaItemDefinition = NameLookups.GetMetaItem(node, items, fluids);

        return new RecipeOutput(metaItemDefinition, node.amount, node.extra_count_fraction ?? 0, node.ignored_by_productivity ?? 0);
    }

    private static GetMetaItem(metaItemData: { type: "item" | "fluid", name: string }, items: Map<string, ItemDefinition>, fluids: Map<string, FluidDefinition>) : ItemDefinition | FluidDefinition {
        let foundItem: ItemDefinition | FluidDefinition | undefined
        
        if (metaItemData.type == "item") {
            foundItem = items.get(metaItemData.name);
        }
        else if (metaItemData.type == "fluid") {
            foundItem = fluids.get(metaItemData.name);
        }

        if (foundItem == undefined) {
            throw new Error(`Could not find meta-item of type "${metaItemData.type}" and name "${metaItemData.name}"`);
        }
         
        return foundItem;
    }

    private static CraftingMachineFromAssemblingMachineNode(node: AssemblingMachineNode, recipeCategories: Map<string, RecipeCategory>, recipes: Map<string, RecipeDefinition>): CraftingMachineDefinition {
        let craftingCategories = node.crafting_categories.map(categoryName => {
            let foundCategory = recipeCategories.get(categoryName);
            return foundCategory == undefined ? [] : [foundCategory]
        }).flat();

        let fixedRecipe = node.fixed_recipe == undefined ? undefined : recipes.get(node.fixed_recipe);

        let allowedEffects = node.allowed_effects?.map(effectName => stringToEunm(Effect, effectName)).filter(e => e != undefined) ?? [];

        let powerConsumption = stringToPowerWatts(node.energy_usage);

        let baseEffects = new Map(Object.entries(node.effect_receiver?.base_effect ?? {}).
            map(effectEntry => [stringToEunm(Effect, effectEntry[0]), effectEntry[1]] as const).
            filter(effectEntry => effectEntry[0] != undefined)) as Map<Effect, number>;

        return new CraftingMachineDefinition(node.name, node.crafting_speed, allowedEffects, powerConsumption, baseEffects, craftingCategories, fixedRecipe)
    }

    private static CraftingMachineFromFurnaceNode(node: FurnaceNode, recipeCategories: Map<string, RecipeCategory>): CraftingMachineDefinition {
        let craftingCategories = node.crafting_categories.map(categoryName => {
            let foundCategory = recipeCategories.get(categoryName);
            return foundCategory == undefined ? [] : [foundCategory]
        }).flat();

        let allowedEffects = node.allowed_effects?.map(effectName => stringToEunm(Effect, effectName)).filter(e => e != undefined) ?? [];

        let powerConsumption = stringToPowerWatts(node.energy_usage);

        let baseEffects = new Map(Object.entries(node.effect_receiver?.base_effect ?? {}).
            map(effectEntry => [stringToEunm(Effect, effectEntry[0]), effectEntry[1]] as const).
            filter(effectEntry => effectEntry[0] != undefined)) as Map<Effect, number>;

        return new CraftingMachineDefinition(node.name, node.crafting_speed, allowedEffects, powerConsumption, baseEffects, craftingCategories, undefined)
    }
}
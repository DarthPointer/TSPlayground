import { Effect } from "./EffectDefinitions";
import { RecipeCategory } from "./RecipeCategory";
import { RecipeDefinition } from "./RecipeDefinition";

export class CraftingMachineDefinition {
    public key: string;

    public craftingSpeed: number;
    public allowedEffects: Effect[];
    public baseEffects: Map<Effect, number>;
    public consumptionPowerW: number;
    
    public recipeCategories: RecipeCategory[];
    public fixedRecipe?: RecipeDefinition;

    public constructor(key: string, craftingSpeed: number, allowedEffects: Effect[], consumptionPowerW: number, baseEffects: Map<Effect, number>, recipeCategories: RecipeCategory[], fixedRecipe: RecipeDefinition | undefined = undefined) {
        this.key = key;

        this.craftingSpeed = craftingSpeed;
        this.allowedEffects = allowedEffects;
        this.consumptionPowerW = consumptionPowerW;
        this.baseEffects = baseEffects;

        this.recipeCategories = recipeCategories;
        this.fixedRecipe = fixedRecipe;
    }
}
import { Effect } from "./EffectDefinitions";
import { RecipeCategory } from "./RecipeCategory";

export class CraftingMachineDefinition {
    public key: string;

    public craftingSpeed: number;
    public allowedEffects: Effect[];
    public consumptionPowerW: number;
    public baseProductivity: number;
    
    public recipeCategories: RecipeCategory[];

    public constructor(key: string, craftingSpeed: number, allowedEffects: Effect[], consumptionPowerW: number, baseProductivity: number, recipeCategories: RecipeCategory[]) {
        this.key = key;

        this.craftingSpeed = craftingSpeed;
        this.allowedEffects = allowedEffects;
        this.consumptionPowerW = consumptionPowerW;
        this.baseProductivity = baseProductivity;

        this.recipeCategories = recipeCategories;
    }
}
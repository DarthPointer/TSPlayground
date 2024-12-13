import { RecipeCategory } from "./RecipeCategory";
import { RecipeInput } from "./RecipeInput";
import { RecipeOutput } from "./RecipeOutput";

export class RecipeDefinition {
    name: string;

    category?: RecipeCategory;

    inputs: RecipeInput[];
    outputs: RecipeOutput[];

    craftingTimeS: number;
    allowProductivity: boolean;

    public constructor(name: string, category: RecipeCategory | undefined, inputs: RecipeInput[], outputs: RecipeOutput[], craftingTimeS: number, allowProductivity: boolean) {
        this.name = name;
        this.category = category;

        this.inputs = inputs;
        this.outputs = outputs;

        this.craftingTimeS = craftingTimeS;
        this.allowProductivity = allowProductivity;
    }
}
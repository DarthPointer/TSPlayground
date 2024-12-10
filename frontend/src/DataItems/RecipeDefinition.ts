import { RecipeInput } from "./RecipeInput";
import { RecipeOutput } from "./RecipeOutput";

export class RecipeDefinition {
    inputs: RecipeInput[];
    outputs: RecipeOutput[];

    craftingTimeTicks: number;
    allowProductivity: boolean;

    public constructor(inputs: RecipeInput[], outputs: RecipeOutput[], craftingTimeTicks: number, allowProductivity: boolean) {
        this.inputs = inputs;
        this.outputs = outputs;

        this.craftingTimeTicks = craftingTimeTicks;
        this.allowProductivity = allowProductivity;
    }
}
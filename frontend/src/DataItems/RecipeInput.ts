import { FluidDefinition } from "./FluidDefinition";
import { ItemDefinition } from "./ItemDefinition";

export class RecipeInput {
    item: FluidDefinition | ItemDefinition;
    amount: number;

    public constructor(item: FluidDefinition | ItemDefinition, amount: number) {
        this.item = item;
        this.amount = amount;
    }
}
import { FluidDefinition } from "./FluidDefinition";
import { ItemDefinition } from "./ItemDefinition";

export class RecipeOutput {
    item: FluidDefinition | ItemDefinition;
    amount: number;
    extraAmountFraction: number;
    ignoredByProductivity: number;

    public constructor(item: FluidDefinition | ItemDefinition, amount: number, extraAmountFraction: number, ignoredByProductivity: number) {
        this.item = item;
        this.amount = amount;
        this.extraAmountFraction = extraAmountFraction;
        this.ignoredByProductivity = ignoredByProductivity;
    }
}
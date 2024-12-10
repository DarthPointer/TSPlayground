import { FluidDefinition } from "./FluidDefinition";
import { ItemDefinition } from "./ItemDefinition";

export class RecipeOutput {
    item: FluidDefinition | ItemDefinition;
    amount: number;
    chance: number;
    ignoredForProductivity: number;

    public constructor(item: FluidDefinition | ItemDefinition, amount: number, chance: number, ignoredForProductivity: number) {
        this.item = item;
        this.amount = amount;
        this.chance = chance;
        this.ignoredForProductivity = ignoredForProductivity;
    }
}
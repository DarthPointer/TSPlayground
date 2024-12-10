export class FluidDefinition {
    public key: string;
    public minTempK: number;
    public maxTempK: number;
    public heatCapacityJoulesPerK: number;

    public constructor(key: string, minTempK: number, maxTempK: number, heatCapacityJoulesPerK: number) {
        this.key = key;
        this.minTempK = minTempK;
        this.maxTempK = maxTempK;
        this.heatCapacityJoulesPerK = heatCapacityJoulesPerK;
    }
}
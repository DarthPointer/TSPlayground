export class ItemDefinition {
    public key: string;
    public stackSize: number;
    public rocketMass?: number;

    public constructor(key: string, stackSize: number, rocketMass: number | undefined = undefined) {
        this.key = key;
        this.stackSize = stackSize;
        this.rocketMass = rocketMass;
    }
}
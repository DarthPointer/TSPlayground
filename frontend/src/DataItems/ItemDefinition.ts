export class ItemDefinition {
    public key: string;
    public stackSize: number;
    public rocketCap: number;

    public constructor(key: string, stackSize: number, rocketCap: number) {
        this.key = key;
        this.stackSize = stackSize;
        this.rocketCap = rocketCap;
    }
}
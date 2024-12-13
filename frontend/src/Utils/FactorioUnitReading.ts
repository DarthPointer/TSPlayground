export const PowerSuffixesToWatts: Record<string, number> = {
    W: 1,
    kW: 1000,
    MW: 1000000,
    GW: 1000000000
}

export const EnergySuffixesToJoules: Record<string, number> = {
    J: 1,
    kJ: 1000,
    MJ: 1000000,
    GJ: 1000000000
}

export function stringToUnits(str: string, suffixes: Record<string, number>): number {
    for (let suffix in suffixes) {
        if (str.endsWith(suffix)) {
            let assumedNumber = Number(str.slice(0, str.length - suffix.length));

            if (isNaN(assumedNumber)) { // it was not a legit number string
                continue;
            }

            return assumedNumber * suffixes[suffix];
        }
    }

    throw new Error(`Could not parse "${str}" as a unit value (did not find expected one of the expected suffixes ${Object.keys(suffixes)} or its number part was invalid)`);
}

export function stringToPowerWatts(str: string): number {
    return stringToUnits(str, PowerSuffixesToWatts);
}

export function stringToEnergyJoules(str: string): number {
    return stringToUnits(str, EnergySuffixesToJoules);
}
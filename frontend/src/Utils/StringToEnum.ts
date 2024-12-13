export function stringToEunm<TEnum extends string>(enumObject: {[key: string]: TEnum}, str: string): TEnum | undefined {

    for (let enumValue of Object.values(enumObject)) {
        if (enumValue == str) {
            return enumValue;
        }
    }

    return undefined;
}
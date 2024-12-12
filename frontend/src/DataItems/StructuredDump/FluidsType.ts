import { FucktorioColor } from "../Color";
import { FucktorioLocalisedString } from "./FucktorioLocalisedString";
import { IconData } from "./IconData";

export type FluidNode = {
    type: string;
    name: string;
    localised_name?: FucktorioLocalisedString;

    icon?: string;
    icons?: IconData[];

    subgroup?: string;
    order?: string;

    base_color: Record<string, never> | FucktorioColor;
    flow_color: Record<string, never> | FucktorioColor;

    hidden?: boolean;
    parameter?: boolean;

    default_temperature: number;
    max_temperature?: number;
    heat_capacity?: string;
    gas_temperature?: number;

    fuel_value?: string;

    auto_barrel?: boolean;
}
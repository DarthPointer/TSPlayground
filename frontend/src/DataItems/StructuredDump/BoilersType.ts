import { ConditionProperty } from "./ConditionProperty";
import { DamageResistanceData } from "./DamageResistanceData";
import { FluidBoxData } from "./FluidBoxData";
import { BoundingBox } from "./GeometryTypes";
import { MinableData } from "./MinableData";
import { SoundData, WorkingSoundData } from "./SoundData";

export type BoilerNode = {
    type: string;
    name: string;

    icon?: string;

    flags?: string[];

    minable: MinableData;

    fast_replaceable_group: string;

    max_health: number;
    corpse?: string;
    dying_explosion?: string;
    impact_category?: string;

    damaged_trigger_effect: unknown;

    mode?: string;

    resistances: DamageResistanceData[];

    collision_box?: BoundingBox;
    selection_box?: BoundingBox;

    target_temperature: number;

    fluid_box: FluidBoxData;
    output_fluid_box: FluidBoxData;

    energy_consumption: string;
    energy_source: unknown;

    working_sound: WorkingSoundData;

    open_sound?: SoundData;
    close_sound?: SoundData;

    pictures: unknown;

    fire_flicker_enabled?: boolean;
    fire_glow_flicker_enabled?: boolean;

    burning_cooldown?: number;

    water_reflection: unknown;

    surface_conditions?: ConditionProperty[];
}
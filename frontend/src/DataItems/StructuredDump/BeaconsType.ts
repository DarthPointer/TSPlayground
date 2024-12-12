import { BoundingBox } from "./GeometryTypes";
import { MinableData } from "./MinableData";
import { SoundData, WorkingSoundData } from "./SoundData";

export type BeaconNode = {
    type: string;
    name: string;

    icon?: string;

    drawing_box_vertical_extension?: number;
    graphics_set?: unknown;
    radius_visualisation_picture?: unknown;
    water_reflection?: unknown;

    icons_positioning?: unknown;

    flags?: string[];

    minable?: MinableData;

    fast_replaceable_group?: string;

    max_health: number;
    corpse?: string;
    dying_explosion?: string;

    open_sound?: SoundData;
    close_sound?: SoundData;
    working_sound?: WorkingSoundData;

    impact_category?: string;

    damaged_trigger_effect?: unknown;

    collision_box?: BoundingBox;
    selection_box?: BoundingBox;

    allowed_effects?: string[];

    supply_area_distance: number;
    distribution_effectivity?: number;
    distribution_effectivity_bonus_per_quality_level?: number;
    module_slots: number;

    beacon_counter?: string;

    energy_usage?: string;
    heating_energy?: string;
    energy_source?: unknown;

    profile?: unknown;
};
import { ConditionProperty } from "./ConditionProperty";
import { DamageResistanceData } from "./DamageResistanceData";
import { EffectReceiverData } from "./EffectRecieverData";
import { FluidBoxData } from "./FluidBoxData";
import { BoundingBox, Position } from "./GeometryTypes";
import { MinableData } from "./MinableData";
import { SoundData, WorkingSoundData } from "./SoundData";

export type AssemblingMachineNode = {
    type: string;
    name: string;

    icon?: string;

    subgroup?: string;

    flags?: string[];

    fast_replaceable_group: string;
    next_upgrade?: string;

    minable?: MinableData;

    max_health: number;
    resistances?: DamageResistanceData[];
    corpse?: string;
    create_ghost_on_death?: boolean;
    dying_explosion?: string;

    damaged_trigger_effect?: unknown;

    graphics_set?: unknown;
    water_reflection?: unknown;
    drawing_box_vertical_extension?: number;
    show_recipe_icon?: boolean;

    forced_symmetry?: string;

    created_effect?: unknown;
    dying_trigger_effect?: unknown;

    perceived_performance?: unknown;

    working_sound?: WorkingSoundData;

    icon_draw_specification: unknown;

    collision_box?: BoundingBox;
    selection_box?: BoundingBox;
    map_generator_bounding_box?: BoundingBox;

    collision_mask?: unknown;

    impact_category?: string;

    icons_positioning?: unknown;
    alert_icon_shift?: Position;

    circuit_wire_max_distance?: number;
    circuit_connector?: unknown;

    crafting_categories: string[];
    crafting_speed: number;
    production_health_effect?: {
        not_producing: number;
        producing: number;
    };
    enable_logistic_control_behavior?: boolean;

    fixed_recipe?: string;

    ignore_output_full?: boolean;

    surface_conditions?: ConditionProperty[];

    fluid_boxes?: FluidBoxData[];
    fluid_boxes_off_when_no_fluid_recipe?: boolean;

    module_slots?: number;
    allowed_effects?: string[] | Record<string, never>;
    effect_receiver?: EffectReceiverData;

    energy_usage: string;
    energy_source?: unknown;
    heating_energy?: string;

    open_sound?: SoundData;
    close_sound?: SoundData;
}
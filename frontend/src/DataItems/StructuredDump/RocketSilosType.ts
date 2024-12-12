import { ConditionProperty } from "./ConditionProperty";
import { DamageResistanceData } from "./DamageResistanceData";
import { BoundingBox, Position } from "./GeometryTypes";
import { MinableData } from "./MinableData";
import { SoundData, WorkingSoundData } from "./SoundData";

export type RocketSiloNode = {
    type: string;
    name: string;

    icon?: string;

    flags?: string[];

    icon_draw_specification?: unknown;
    icons_positioning?: unknown;

    fast_replaceable_group?: string;

    minable?: MinableData;

    max_health?: number;
    corpse?: string;
    dying_explosion?: string;

    resistances?: DamageResistanceData[];

    damaged_trigger_effect?: unknown;

    collision_box?: BoundingBox;
    selection_box?: BoundingBox;
    hole_clipping_box?: BoundingBox;

    impact_category?: string;

    energy_usage?: string;
    heating_energy?: string;
    lamp_energy_usage?: string;
    active_energy_usage?: string;
    energy_source?: unknown;

    surface_conditions?: ConditionProperty[];

    launch_to_space_platforms?: boolean;

    rocket_parts_required?: number;
    rocket_quick_relaunch_start_offset?: number;
    rocket_entity?: string;

    times_to_blink?: number;
    light_blinking_speed?: number;
    door_opening_speed?: number;
    base_engine_light?: unknown;

    shadow_sprite?: unknown;
    hole_sprite?: unknown;
    hole_light_sprite?: unknown;
    rocket_shadow_overlay_sprite?: unknown;
    rocket_glow_overlay_sprite?: unknown;
    base_day_sprite?: unknown;
    red_lights_back_sprites?: unknown;
    red_lights_front_sprites?: unknown;
    satellite_animation?: unknown;
    arm_01_back_animation?: unknown;
    arm_02_right_animation?: unknown;
    arm_03_front_animation?: unknown;
    base_front_sprite?: unknown;

    silo_fade_out_start_distance?: number;
    silo_fade_out_end_distance?: number;

    alarm_sound?: string;
    quick_alarm_sound?: SoundData;
    clamps_on_sound?: SoundData;
    clamps_off_sound?: SoundData;
    doors_sound?: SoundData;
    raise_rocket_sound?: SoundData;
    open_sound?: SoundData;
    close_sound?: SoundData;
    working_sound?: WorkingSoundData;

    hole_frozen?: unknown;
    base_frozen?: unknown;
    door_back_frozen?: unknown;
    door_front_frozen?: unknown;
    base_front_frozen?: unknown;

    door_back_sprite?: unknown;
    door_back_open_offset?: Position;

    door_front_sprite?: unknown;
    door_front_open_offset?: Position;

    circuit_connector?: unknown;
    circuit_wire_max_distance?: number;

    to_be_inserted_to_rocket_inventory_size?: number;
    logistic_trash_inventory_size?: number;

    crafting_categories?: string[];
    crafting_speed?: number;
    fixed_recipe?: string;
    show_recipe_icon?: boolean;

    module_slots?: number;
    fast_transfer_modules_into_module_slots_only?: boolean;
    allowed_effects?: string[];

    cargo_station_parameters?: unknown;
}
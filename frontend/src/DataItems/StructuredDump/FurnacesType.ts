import { ConditionProperty } from "./ConditionProperty";
import { DamageResistanceData } from "./DamageResistanceData";
import { EffectReceiverData } from "./EffectRecieverData";
import { FucktorioLocalisedString } from "./FucktorioLocalisedString";
import { BoundingBox, Position } from "./GeometryTypes";
import { MinableData } from "./MinableData";
import { SoundData, WorkingSoundData } from "./SoundData";

export type FurnaceNode = {
    type: string;
    name: string;

    icon?: string;


    flags?: string[];

    minable: MinableData;

    fast_replaceable_group: string;
    next_upgrade?: string;

    max_health: number;
    resistances: DamageResistanceData[];
    damaged_trigger_effect?: unknown;

    corpse: string;
    dying_explosion?: string;

    repair_sound?: SoundData;
    mined_sound?: SoundData;
    open_sound?: SoundData;
    close_sound?: SoundData;
    working_sound?: WorkingSoundData;

    allowed_effects: string[];
    effect_receiver?: EffectReceiverData;

    impact_category: string;

    icon_draw_specification: {
        scale?: number;
        shift?: [x: number, y: number];
    }
    icons_positioning?: unknown;

    collision_box: BoundingBox;
    selection_box: BoundingBox;

    vector_to_place_result?: Position;

    crafting_categories: string[];
    result_inventory_size: number;
    energy_usage: string;
    crafting_speed: number;
    source_inventory_size: number;
    custom_input_slot_tooltip_key?: FucktorioLocalisedString;
    energy_source: unknown;
    heating_energy?: string;

    cant_insert_at_source_message_key?: FucktorioLocalisedString;

    module_slots?: number;
    fast_transfer_modules_into_module_slots_only?: boolean;
    
    surface_conditions?: ConditionProperty[];

    graphics_set: unknown;
    graphics_set_flipped?: unknown;
}
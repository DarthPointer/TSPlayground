import { Effect } from "../EffectDefinitions";
import { FucktorioLocalisedString } from "./FucktorioLocalisedString";
import { SoundData } from "./SoundData";

export type ModuleNode = {
    type: string;
    name: string;
    
    order?: string;

    localised_description?: FucktorioLocalisedString;

    icon?: string;

    subgroup?: string;
    category?: string;
    tier?: number;

    color_hint?: unknown;

    inventory_move_sound?: SoundData;
    pick_sound?: SoundData;
    drop_sound?: SoundData;

    stack_size?: number;
    weight?: number;

    effect: Partial<Record<Effect, number>>;

    beacon_tint?: unknown;

    art_style?: string;
    requires_beacon_alt_mode?: boolean;
}
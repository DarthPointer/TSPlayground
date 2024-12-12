import { FucktorioLocalisedString } from "./FucktorioLocalisedString";
import { IconData } from "./IconData";
import { LayersData, PictureData } from "./PictureData";
import { SoundData } from "./SoundData";

export type ItemNode = {
    type: string;
    name: string;

    localised_description?: string[];

    icon?: string;
    icon_size?: number;
    dark_background_icon?: string;

    flags?: string[];

    fuel_value?: string;
    fuel_category?: string;
    burnt_result?: string;

    fuel_acceleration_multiplier?: number;
    fuel_top_speed_multiplier?: number;

    hidden?: boolean;

    stack_size: number;
    weight?: number;
    ingredient_to_weight_coefficient?: number;
    default_import_location?: string;

    spoil_ticks?: number;
    spoil_result?: string;
    spoil_level?: number;
    spoil_to_trigger_result?: unknown;

    localised_name?: FucktorioLocalisedString;

    subgroup?: string;
    order?: string;

    parameter?: boolean;

    color_hint?: {
      text: string
    };

    inventory_move_sound?: SoundData;
    pick_sound?: SoundData;
    drop_sound?: SoundData;

    place_result?: string;
    plant_result?: string;
    place_as_tile?: TilePlacementResult;
    place_as_equipment_result?: string;

    pictures?: PictureData[] | LayersData[] | LayersData;
    icons?: IconData[];

    random_tint_color?: number[];

    factoriopedia_alternative?: string;
    hidden_in_factoriopedia?: boolean;
};

export type TilePlacementResult = {
  result: string;
  condition_size: number;
  condition: {
    layers: {
      water_tile?: boolean;
      meltable?: boolean;
      ground_tile?: boolean;
      empty_space?: boolean;
    };
  };
  invert?: boolean;
  tile_condition?: string[];
}

export const ItemDefaults = {

    hidden: false,
    parameter: false,

}
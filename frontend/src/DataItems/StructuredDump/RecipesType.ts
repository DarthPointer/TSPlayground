import { FucktorioColor } from "../Color";
import { ConditionProperty } from "./ConditionProperty";
import { FucktorioLocalisedString } from "./FucktorioLocalisedString";
import { IconData } from "./IconData";

export type RecipeNode = {
    type: string;
    name: string;
    localised_name?: FucktorioLocalisedString;

    enabled?: boolean;

    subgroup?: string;
    category?: string;
    order?: string;
    parameter?: boolean;

    allow_productivity?: boolean;
    allow_quality?: boolean;

    icon?: string;
    icons?: IconData[];
    icon_size?: number;

    main_product?: string;

    hidden?: boolean;

    ingredients?: Record<string, never> | RecipeIngredientData[];
    results?: Record<string, never> | RecipeResultData[];
    surface_conditions?: ConditionProperty[];

    hide_from_signal_gui?: boolean;
    hide_from_stats?: boolean;

    result_is_always_fresh?: boolean;
    preserve_products_in_machine_output?: boolean;
    
    energy_required?: number;

    allow_decomposition?: boolean;
    unlock_results?: boolean;

    crafting_machine_tint?: {
        primary?: FucktorioColor;
        secondary?: FucktorioColor;
        tertiary?: FucktorioColor;
        quaternary?: FucktorioColor;
    }

    requester_paste_multiplier?: number;

    hide_from_player_crafting?: boolean;

    show_amount_in_title?: boolean;
    always_show_products?: boolean;
    always_show_made_in?: boolean;

    factoriopedia_alternative?: string;
    hidden_in_factoriopedia?: boolean;
}

export type RecipeIngredientData = {
    type: string;
    name: string;
    amount: number;

    ignored_by_stats?: number;

    fluidbox_index?: number;
    fluidbox_multiplier?: number;
}

export type RecipeResultData = {
    type: string;
    name: string;

    amount: number;
    extra_count_fraction?: number;

    temperature?: number;
    probability?: number;

    ignored_by_stats?: number;
    ignored_by_productivity?: number;

    fluidbox_index?: number;

    percent_spoiled?: number;

    show_details_in_recipe_tooltip?: boolean;
}
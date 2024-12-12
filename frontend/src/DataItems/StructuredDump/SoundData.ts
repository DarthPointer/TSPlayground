export type SoundData = {
    switch_vibration_data?: {
        gain: number;
        filename: string;
    };
    variations: SoundFileData[];
} | SoundFileData[] | SoundFileData;

export type SoundFileData = {
    filename: string,
    volume?: number,
    aggregation?: SoundAggregation

    modifiers?: SoundModifier[] | SoundModifier;
    advanced_volume_control?:
    {
        attenuation: string;
    }
};

export type SoundAggregation = {
    max_count: number;
    remove: boolean;
    count_already_playing?: boolean;
};

export type WorkingSoundData = {
    sound?: SoundData;

    fade_in_ticks?: number;
    fade_out_ticks?: number;
    audible_distance_modifier?: number;
    max_sounds_per_type?: number;
    apparent_volume?: number;

    sound_accents?: SoundAccent[] | SoundAccent;
    main_sounds?: SoundAccent[] | SoundAccent;
}

export type SoundModifier = {
    type: string;
    volume_multiplier: number;
}

export type SoundAccent = {
    sound?: SoundData;
    frame?: number;
    play_for_working_visualisation?: string;
    play_for_working_visualisations?: string[];
    audible_distance_modifier?: number;

    fade_in_ticks?: number;
    fade_out_ticks?: number;
}
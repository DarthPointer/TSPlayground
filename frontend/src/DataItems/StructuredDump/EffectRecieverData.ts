export type EffectReceiverData = {
    base_effect?: Record<string, number>;

    uses_module_effects?: boolean;
    uses_beacon_effects?: boolean;
    uses_surface_effects?: boolean;
}
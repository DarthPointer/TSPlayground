import { Position } from "./GeometryTypes";

export type FluidBoxData = {
    volume: number;
    pipe_connections: PipeConnectionData[];
    
    pipe_covers?: unknown;
    pipe_covers_frozen?: unknown;

    production_type?: FluidBoxProductionType;
    filter?: string;

    pipe_picture?: unknown;
    pipe_picture_frozen?: unknown;
    secondary_draw_orders?: unknown;

    always_draw_covers?: boolean;
    enable_working_visualisations?: string[];
};

export type PipeConnectionData = {
    flow_direction?: "input-output" | "input" | "output";
    direction: number;
    position: Position;
};

export type FluidBoxProductionType = "none" | "input-output" | "input" | "output";
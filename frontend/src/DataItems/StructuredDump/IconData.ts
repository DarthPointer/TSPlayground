import { RGBA } from "../Color";

export type IconData = {
    icon: string;
    icon_size?: number;
    scale?: number;
    shift?: number[];

    tint?: number[] | RGBA;
}
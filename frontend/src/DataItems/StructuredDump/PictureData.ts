export type PictureData = {
    size: number;
    filename: string;
    scale: number;
    mipmap_count?: number;

    blend_mode?: string;
    draw_as_light?: boolean;

    tint?: number[];
}

export type LayersData = {
    layers: PictureData[];
}
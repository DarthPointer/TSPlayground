export type Position = {
    x: number; y: number;
} | 
[x: number, y: number];

export type BoundingBox = [left_top: Position, right_bottom: Position];
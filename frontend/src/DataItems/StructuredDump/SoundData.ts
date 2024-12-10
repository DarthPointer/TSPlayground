export type SoundData = {
    filename: string,
    volume: number,
    aggregation: SoundAggregation
}

export type SoundAggregation = {
    max_count: number,
    remove: boolean
}
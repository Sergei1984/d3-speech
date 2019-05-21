export interface Fact<TDim extends keyof any> {
    dim: Record<TDim, string>;
    Value: string;
}

export interface DimensionDefinition<TDim extends keyof any> {
    label: TDim;
    display: string;
}

export interface DataSet<TDim extends keyof any> {
    dimension: DimensionDefinition<TDim>[];
    fact: Fact<TDim>[];
}

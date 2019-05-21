import { DimensionDefinition, DataSet } from "./DataSet";

export interface DataSubset2D<TDim extends keyof any> {
    dimensionDefinition: DimensionDefinition<TDim>;
    dimensionValues: string[];

    data: Array<{
        dim: string;
        value: number;
    }>;
}

export type DimensionFilter<TDim extends keyof any> = { [P in TDim]?: string };

export function get2dDataSubset<TDim extends keyof any>(
    data: DataSet<TDim>,
    dimension: TDim,
    calculateClusterValue: (values: number[]) => number,
    dimensionFilters?: DimensionFilter<TDim>
): DataSubset2D<TDim> {
    if (dimensionFilters) {
        data = filterByDimensions(data, dimensionFilters);
    }

    const dimDef = data.dimension.find(d => d.label === dimension);

    const clusteredResults = data.fact.reduce(
        (r, item) => {
            const val = parseFloat(item.Value);
            const dim = item.dim[dimension];

            r[dim] = [...((r[dim] as number[]) || []), val];

            return r;
        },
        {} as { [key: string]: number[] }
    );

    return {
        dimensionDefinition: dimDef,
        dimensionValues: Object.keys(clusteredResults),
        data: Object.keys(clusteredResults).map(d => ({
            dim: d,
            value: calculateClusterValue(clusteredResults[d])
        }))
    };
}

export class Cluster {
    static avg(values: number[]): number {
        if (values.length === 0) {
            return 0;
        }

        return Cluster.sum(values) / values.length;
    }

    static sum(values: number[]): number {
        return values.reduce((result, value) => result + value, 0);
    }
}

function filterByDimensions<TDim extends keyof any>(
    data: DataSet<TDim>,
    dimensionFilters: DimensionFilter<TDim>
): DataSet<TDim> {
    const filters = Object.entries(dimensionFilters);
    if (!filters.length) {
        return data;
    }
    return {
        ...data,
        fact: data.fact.filter(f =>
            filters.every(([key, value]) => f.dim[key] === value)
        )
    };
}

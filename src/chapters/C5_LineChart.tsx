import * as React from "react";
import { Chapter } from "./Chapter";

import * as ds from "../data/suicide_rate.json";
import { get2dDataSubset, DataSet, Cluster } from "../data";

const dataSet = ds as DataSet<
    "GHO" | "PUBLISHSTATE" | "YEAR" | "REGION" | "COUNTRY" | "SEX"
>;

const data = get2dDataSubset(dataSet, "YEAR", Cluster.avg, {
    COUNTRY: "Ukraine"
});

console.log(data);

export function C5_LineChart() {
    return (
        <Chapter title="Line Chart">
            <div>Line chart</div>
        </Chapter>
    );
}

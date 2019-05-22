import * as React from "react";
import { Chapter } from "./Chapter";

import * as ds from "../data/suicide_rate.json";
import { get2dDataSubset, DataSet, Cluster } from "../data";
import { CodeBlock, Collapsible, AutoScaleSvg } from "../components";

import { extent, scaleLinear, line } from "d3";
import { ElementOf } from "../utils/Array.prototype.flatten";

const dataSet = ds as DataSet<
    "GHO" | "PUBLISHSTATE" | "YEAR" | "REGION" | "COUNTRY" | "SEX"
>;

const data = get2dDataSubset(dataSet, "YEAR", Cluster.avg, {
    COUNTRY: "Ukraine"
});

console.log(data);

const LEFT = 5;
const TOP = 5;
const WIDTH = 100;
const HEIGHT = 50;
const RIGHT = WIDTH - LEFT;
const BOTTOM = HEIGHT - TOP;

export function C5_LineChart() {
    const years = extent(data.data, e => parseInt(e.dim));

    console.log(years);

    const yearScale = scaleLinear()
        .domain(years)
        .range([LEFT, RIGHT]);

    const rateScale = scaleLinear()
        .domain([0, 100])
        .range([BOTTOM, TOP]);

    const rateLine = line<ElementOf<typeof data.data>>()
        .x(v => yearScale(parseInt(v.dim)))
        .y(v => rateScale(v.value));

    return (
        <Chapter title="Line Chart">
            <h3>Line chart: Suicide rate per 100K population (all sexes)</h3>
            <Collapsible title="Chart Data" defaultIsExpanded={false}>
                <CodeBlock language="json">
                    {JSON.stringify(data, undefined, 2)}
                </CodeBlock>
            </Collapsible>
            <AutoScaleSvg viewportWidth={WIDTH} viewportHeight={HEIGHT}>
                <path
                    fill="none"
                    stroke="red"
                    strokeWidth="1em"
                    d={rateLine(data.data)}
                />
            </AutoScaleSvg>
        </Chapter>
    );
}

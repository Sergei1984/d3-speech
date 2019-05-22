import { line, scaleLinear, scalePoint } from "d3";
import * as React from "react";
import { AutoScaleSvg, CodeBlock, Collapsible } from "../components";
import { Cluster, DataSet, get2dDataSubset } from "../data";
import * as ds from "../data/suicide_rate.json";
import { ElementOf } from "../utils/Array.prototype.flatten";
import { Chapter } from "./Chapter";
import "./C5_LineChart.less";

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
    // const years = extent(data.data, e => parseInt(e.dim));

    // const yearScale = scaleLinear()
    //     .domain(years)
    //     .range([LEFT, RIGHT]);

    const yearScale = scalePoint()
        .domain(data.dimensionValues)
        .range([LEFT, RIGHT]);

    const rateScale = scaleLinear()
        .domain([0, 100])
        .range([BOTTOM, TOP]);

    const rateLine = line<ElementOf<typeof data.data>>()
        .x(v => yearScale(v.dim))
        .y(v => rateScale(v.value));

    return (
        <Chapter title="Line Chart" className="C5_LineChart">
            <h3>Line chart: Suicide rate per 100K population (all sexes)</h3>
            <Collapsible title="Chart Data" defaultIsExpanded={false}>
                <CodeBlock language="json">
                    {JSON.stringify(data, undefined, 2)}
                </CodeBlock>
            </Collapsible>
            <AutoScaleSvg viewportWidth={WIDTH} viewportHeight={HEIGHT}>
                {/* Horizontal axis */}
                <line
                    className="axis"
                    x1={LEFT}
                    x2={RIGHT}
                    y1={BOTTOM}
                    y2={BOTTOM}
                />
                {/* Horizontal ticks and tick labels */}
                {data.dimensionValues.map(year => (
                    <React.Fragment key={year}>
                        <line
                            className="axis"
                            y1={BOTTOM}
                            y2={BOTTOM + 0.5}
                            x1={yearScale(year)}
                            x2={yearScale(year)}
                        />
                        <text
                            className="axis-label"
                            x={yearScale(year)}
                            y={BOTTOM + 0.6}
                        >
                            {year}
                        </text>
                    </React.Fragment>
                ))}
                {/* Vertical axis */}
                <line
                    className="axis"
                    x1={LEFT}
                    x2={LEFT}
                    y1={TOP}
                    y2={BOTTOM}
                />
                {/* Horizontal ticks and tick labels */}
                {rateScale.ticks().map(value => (
                    <React.Fragment key={value}>
                        <line
                            className="axis"
                            x1={LEFT - 0.5}
                            x2={LEFT}
                            y1={rateScale(value)}
                            y2={rateScale(value)}
                        />
                        <text
                            className="axis-label"
                            textAnchor="end"
                            x={LEFT - 0.6}
                            y={rateScale(value)}
                        >
                            {value}
                        </text>
                    </React.Fragment>
                ))}
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

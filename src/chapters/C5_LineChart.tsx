import { line, scaleLinear, scalePoint, schemeSet2, scaleOrdinal } from "d3";
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

const countries = [
    "Ukraine",
    "Russian Federation",
    "Australia",
    "Japan",
    "Iceland"
];

const countryColorScale = scaleOrdinal<string, string>()
    .domain(countries)
    .range(schemeSet2);

const countryData = countries.map(c => ({
    country: c,
    data: get2dDataSubset(dataSet, "YEAR", Cluster.avg, {
        COUNTRY: c
    })
}));

console.log(countryData);

const LEFT = 5;
const TOP = 5;
const WIDTH = 100;
const HEIGHT = 50;
const RIGHT = WIDTH - LEFT;
const BOTTOM = HEIGHT - TOP;

export function C5_LineChart() {
    const allYears = countryData
        .map(d => d.data.dimensionValues)
        .flatten()
        .unique();

    const yearScale = scalePoint()
        .domain(allYears)
        .range([LEFT, RIGHT]);

    const rateScale = scaleLinear()
        .domain([0, 100])
        .range([BOTTOM, TOP]);

    const rateLine = line<ElementOf<(typeof countryData[0])["data"]["data"]>>()
        .x(v => yearScale(v.dim))
        .y(v => rateScale(v.value));

    return (
        <Chapter title="Line Chart" className="C5_LineChart">
            <h3>Line chart: Suicide rate per 100K population (all sexes)</h3>
            <Collapsible title="Chart Data" defaultIsExpanded={false}>
                <CodeBlock language="json">
                    {JSON.stringify(countryData, undefined, 2)}
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
                {allYears.map(year => (
                    <React.Fragment key={`horizontal-tick-${year}`}>
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
                    <React.Fragment key={`vertical-tick-${value}`}>
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
                {countryData.map(d => (
                    <React.Fragment key={d.country}>
                        <path
                            fill="none"
                            stroke={countryColorScale(d.country)}
                            strokeWidth="1em"
                            d={rateLine(d.data.data)}
                        />
                        <text
                            className="chart-label"
                            fill={countryColorScale(d.country)}
                            x={LEFT + 0.5}
                            y={rateScale(d.data.data[0].value)}
                        >
                            {d.country}
                        </text>
                    </React.Fragment>
                ))}
            </AutoScaleSvg>
        </Chapter>
    );
}

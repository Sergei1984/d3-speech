import { line, scaleLinear, scalePoint, max, curveNatural } from "d3";
import * as React from "react";
import { AutoScaleSvg, CodeBlock, Collapsible } from "../components";
import data from "../data/ukraine_salary.json";
import { ElementOf } from "../utils/Array.prototype.flatten";
import { Chapter } from "./Chapter";
import "./C5_LineChart.less";

const LEFT = 5;
const TOP = 5;
const WIDTH = 100;
const HEIGHT = 50;
const RIGHT = WIDTH - LEFT;
const BOTTOM = HEIGHT - TOP;

export function C5_LineChart() {
    const allYears = data
        .map(d => d.Year.toString())
        .flatten()
        .unique();

    const yearScale = scalePoint()
        .domain(allYears)
        .range([LEFT, RIGHT]);

    const salaryScale = scaleLinear()
        .domain([0, max(data, d => d.SalaryUSD)])
        .range([BOTTOM, TOP])
        .nice();

    const salaryLine = line<ElementOf<typeof data>>()
        .x(v => yearScale(v.Year.toString()))
        .y(v => salaryScale(v.SalaryUSD))
        .curve(curveNatural);

    return (
        <Chapter title="Line Chart" className="C5_LineChart">
            <h3>Avg salary in Ukraine per year, USD</h3>
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
                {salaryScale.ticks().map(value => (
                    <React.Fragment key={`vertical-tick-${value}`}>
                        <line
                            className="axis"
                            x1={LEFT - 0.5}
                            x2={LEFT}
                            y1={salaryScale(value)}
                            y2={salaryScale(value)}
                        />
                        <text
                            className="axis-label"
                            textAnchor="end"
                            x={LEFT - 0.6}
                            y={salaryScale(value)}
                        >
                            {value}
                        </text>
                    </React.Fragment>
                ))}
                <path
                    fill="none"
                    stroke="blue"
                    strokeWidth="3em"
                    d={salaryLine(data)}
                />
            </AutoScaleSvg>
        </Chapter>
    );
}

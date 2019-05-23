import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_6_DrawTicks() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Draw ticks"
            className="C5_LineChart"
        >
            <h4>Get tick values</h4>
            <p>
                Use scales for get tick values. For each tick value we draw a
                tick line and tick label:
            </p>
            <CodeBlock language="typescript">
                {`
const allYears = getAllYears(data);

const yearScale = scalePoint()
        .domain(allYears)
        .range([LEFT, RIGHT]);

const salaryScale = scaleLinear()
    .domain([0, max(data, d => d.SalaryUSD)])
    .range([BOTTOM, TOP])
    .nice();

return <svg ...>
    {/* Horizontal ticks and tick labels */}
    {allYears.map(year => (
        <React.Fragment key={\`horizontal-tick-\${year}\`}>
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
    {/* Horizontal ticks and tick labels */}
    {salaryScale.ticks().map(value => (
        <React.Fragment key={\`vertical-tick-\${value}\`}>
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
</svg>;
                    `}
            </CodeBlock>
            <p>
                Note how we use scale to determine coordinate of tick based on
                tick value.
            </p>
            <p>
                For <i>years</i> dimension we use <code>scalePoint</code>,
                because we consider years as a set of values, not as a sequence
                of numbers (in learning purposes and also because in that case
                we could display incomplete data if data for some years are
                missing). <code>scalePoint</code> scale doesn't have a{" "}
                <code>ticks()</code> method and we need to collect all year
                values from the data ourself.
            </p>
        </Chapter>
    );
}

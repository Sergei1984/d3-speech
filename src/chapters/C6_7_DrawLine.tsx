import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_7_DrawLine() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Draw line"
            className="C5_LineChart"
        >
            <h4>Shape generators</h4>
            <p>
                D3 includes{" "}
                <a href="https://github.com/d3/d3-shape">
                    <code>d3-shape</code>
                </a>{" "}
                package for generating graphical primitives, like lines, areas,
                arcs etc.
            </p>
            <p>
                Each shape generator provides a fluent API for configuration and
                returns a function. That function can be applied to a data set
                and returns usually a content of <code>d</code> attribute of{" "}
                <code>&lt;path&gt;</code> tag.
            </p>
            <p>
                At first, we configure a line generator. Note how we use scale
                to determine coordinate for each data point.
            </p>
            <CodeBlock language="typescript">
                {`
import { line, curveNatural } from "d3";

const allYears = getAllYears(data);

const yearScale = scalePoint()
        .domain(allYears)
        .range([LEFT, RIGHT]);

const salaryScale = scaleLinear()
    .domain([0, max(data, d => d.SalaryUSD)])
    .range([BOTTOM, TOP])
    .nice();


const salaryLine = line<{ Year: number; SalaryUSD: number; }>()
        .x(v => yearScale(v.Year.toString()))
        .y(v => salaryScale(v.SalaryUSD))
        .curve(curveNatural);

// Usage salaryLine(data) -> returns "M0 1 L12 12 ..."

            `}
            </CodeBlock>
            <p>Now we could use line generator for draw a chart:</p>
            <CodeBlock language="typescript">
                {`
return <svg ...>
    {/* Omitted axis and ticks */}
     <path
        fill="none"
        stroke="blue"
        strokeWidth="3em"
        d={salaryLine(data)}
    />
</svg>;
                    `}
            </CodeBlock>
            <p>
                We could use the same line generator for draw several different
                lines by calling with different data sets.
            </p>
            <h4>Different shapes:</h4>
            <ul>
                <li>
                    <a href="https://github.com/d3/d3-shape#arc">
                        <code>arc</code>
                    </a>{" "}
                    - draws a segment of the circle.
                    <div>
                        <img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/donut.png" />
                    </div>
                </li>
                <li>
                    <a href="https://github.com/d3/d3-shape#lineRadial">
                        <code>lineRadial</code>
                    </a>{" "}
                    - draws a line closed into a circle. X and Y of regular line
                    are replaces with Angle and Radius for radial line.
                    <div>
                        <img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/line-radial.png" />
                    </div>
                </li>
                <li>
                    <a href="https://github.com/d3/d3-shape#area">
                        <code>area</code>
                    </a>{" "}
                    - draws an area limited by a set of lines.
                    <div>
                        <img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area.png" />
                    </div>
                </li>
                <li>
                    <a href="https://github.com/d3/d3-shape#areaRadial">
                        <code>areaRadial</code>
                    </a>{" "}
                    - the same as radial line but for area.
                    <div>
                        <img src="https://raw.githubusercontent.com/d3/d3-shape/master/img/area-radial.png" />
                    </div>
                </li>
            </ul>
        </Chapter>
    );
}

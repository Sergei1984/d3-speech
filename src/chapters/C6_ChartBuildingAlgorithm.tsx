import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_ChartBuildingAlgorithm() {
    return (
        <Chapter
            title="D3 + React: chart building algorithm"
            className="C5_LineChart"
        >
            <h3>1. Prepare data</h3>
            <p>
                Prepare data for chart: convert types, normalize values, filter
                out unnessecary data.
            </p>
            <h3>2. Create SVG and define viewport and viewbox</h3>
            <p>
                At start, it is better to set viewport (width and height) to
                some fixed values, later when chart is ready it could be set to
                percentage and set up to keep proportions.
            </p>
            <p>
                Set viewbox to <code>"0 0 WIDTH HEIGTH"</code>, where WIDTH is
                some easy-to-remember value, like 100, and HEIGTH should be
                chosen according to desired chart proportions.
            </p>
            <p>
                Actual value of WIDTH or HEIGHT is not too important, since SVG
                is scalable and will look similar not depending of that values,
                but don't take too small values like 1 to avoid rounding errors
                due division.
            </p>
            <p>
                Chart will be built in the area restricted to WIDTH and HEIGHT
                with <code>(0;0)</code> coordinates of top left point.
            </p>
            <h3>3. Declare bounds constant:</h3>
            <p>
                Constant should have a values in viewbox coordinate system, not
                in physical SVG size (since SVG is vector format).
            </p>
            <p>
                Note you will usually need a paddings to left and bottom for
                axis's ticks and labels.
            </p>
            <CodeBlock language="typescript">{`
const WIDTH = 100;
const HEIGHT = 50; // 2:1 ratio
const TOP = 5;
const LEFT = 5;
const RIGHT = WIDTH - LEFT; // Add also right padding
const BOTTOM = HEIGTH - TOP; // and bottom
            `}</CodeBlock>
            <p>
                Use that constant anywhere in chart code where you need to
                reference any specific dimension of the chart.
            </p>
            <h3>4. Create lines for bottom and top axis:</h3>
            <p>Note D3 is not involved here yet</p>
            <CodeBlock language="typescript">{`
import * as React from "react";

function LineChart() {
    return (
        <svg viewBox={\`0 0 \${WIDTH} \${HEIGHT}\`}>
            {/* Bottom axis */}
            <line
                className="axis"
                x1={LEFT}
                x2={RIGHT}
                y1={BOTTOM}
                y2={BOTTOM}
            />
            {/* Left axis */}
        </svg>
    );
}
            `}</CodeBlock>
        </Chapter>
    );
}

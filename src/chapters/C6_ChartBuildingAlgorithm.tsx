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
            <line
                className="axis"
                x1={LEFT}
                x2={LEFT}
                y1={TOP}
                y2={BOTTOM}
            />
        </svg>
    );
}
            `}</CodeBlock>
            <h3>5. Create scales for horizontal and vertical coordinates</h3>
            <p>
                <a href="https://github.com/d3/d3-scale">Scale in D3</a> is a
                special object which allows to map a value from chart data to
                coordinate in SVG document; and also have some useful features
                like generate a ticks etc.
            </p>
            <p>
                There are few types of <code>scales</code>:
                <ul>
                    <li>
                        <a href="https://github.com/d3/d3-scale#linear-scales">
                            <code>scaleLinear</code>
                        </a>{" "}
                        - allows to map continous values in <i>domain</i> (ie in
                        data) to continuos <i>range</i> of target dimension (for
                        example, in pixel position on the chart)
                    </li>
                    <li>
                        <a href="https://github.com/d3/d3-scale#time-scales">
                            <code>scaleTime</code>
                        </a>{" "}
                        - same as <code>scaleLinear</code> but for time (
                        <code>Date</code>) data
                    </li>
                    <li>
                        <a href="https://github.com/d3/d3-scale#ordinal-scales">
                            <code>scaleOrdinal</code>
                        </a>{" "}
                        - allows to map one list of values to another list. This
                        for example could be a mapping of day of weeks to colors
                        etc.
                    </li>
                    <li>
                        <a href="https://github.com/d3/d3-scale#point-scales">
                            <code>scalePoint</code>
                        </a>{" "}
                        - maps a list of values to list of points uniformly
                        distributed points inside a given range. This is useful
                        if you need to draw bar chart (but for bars it is better
                        to use{" "}
                        <a href="https://github.com/d3/d3-scale#scaleBand">
                            <code>scaleBand</code>
                        </a>{" "}
                        which allows to specify a band width, paddings etc.)
                    </li>
                </ul>
            </p>
            <h4>Scale configuration</h4>
            <p>
                Each scale is configured in similar way. Starting from importing
                scale from D3 package, then specify domain, range. Result would
                be a function which actually performs a mapping.
            </p>
            <CodeBlock language="typescript">
                {`
import { scaleLinear } from "d3";

const amountScale = scaleLinear()
                        .domain([0, 1500000]) // Domain is range of values inside a data
                        .range([0, HEIGHT]);  // Range is min and max values domain would be fit into.
                                              // Usually that's a bounds of chart
console.log(amountScale(10000)); // Would output HEIGHT * 10000 / 1500000
                `}
            </CodeBlock>
            <h5>
                <code>Domain</code>
            </h5>
            <p>
                <i>Domain</i> in D3 is a range of values inside the data. For
                example, if data is like that:
            </p>
            <table>
                <tr>
                    <td>Year</td>
                    <td>2015</td>
                    <td>2016</td>
                    <td>2017</td>
                    <td>2018</td>
                </tr>
                <tr>
                    <td>Profit</td>
                    <td>50 000</td>
                    <td>67 000</td>
                    <td>42 000</td>
                    <td>112 000</td>
                </tr>
            </table>
            <p>
                then domain of <b>Profit</b> could be either{" "}
                <code>[0, 112000]</code> or <code>[42000, 112000]</code>, or
                even <code>[10000, 200000]</code>. Depending on that the line on
                chart will have different zoom and lower and upper bounds.
            </p>
            <h5>
                <code>Range</code>
            </h5>
            <p>
                <i>Range</i> determine an target range (usually width or height
                of the chart) in which values from <i>domain</i> would be
                mapped.
            </p>
        </Chapter>
    );
}

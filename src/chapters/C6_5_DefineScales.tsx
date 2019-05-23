import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_5_DefineScales() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Define scales"
            className="C5_LineChart"
        >
            <h4>Scales</h4>
            <p>
                <a href="https://github.com/d3/d3-scale">Scale in D3</a> is a
                special object which allows to map a value from chart data to
                coordinate in SVG document; and also have some useful features
                like generate a ticks etc.
            </p>
            <p>
                There are few types of <code>scales</code>:
            </p>
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
                    - allows to map one list of values to another list. This for
                    example could be a mapping of day of weeks to colors etc.
                </li>
                <li>
                    <a href="https://github.com/d3/d3-scale#point-scales">
                        <code>scalePoint</code>
                    </a>{" "}
                    - maps a list of values to list of points uniformly
                    distributed points inside a given range. This is useful if
                    you need to draw bar chart (but for bars it is better to use{" "}
                    <a href="https://github.com/d3/d3-scale#scaleBand">
                        <code>scaleBand</code>
                    </a>{" "}
                    which allows to specify a band width, paddings etc.)
                </li>
            </ul>
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
            <p>
                <em>
                    Note a chart usually needs two scales: one for x-coordinate
                    and second for y-coordinate. Those scales are independent,
                    have different domains and ranges. But some type of charts
                    like pie charts needs only one scale.
                </em>
            </p>
            <h4>Domain</h4>
            <p>
                <i>Domain</i> in D3 is a range of values inside the data. For
                example, if data is like that:
            </p>
            <table>
                <tbody>
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
                </tbody>
            </table>
            <p>
                then domain of <b>Profit</b> could be either{" "}
                <code>[0, 112000]</code> or <code>[42000, 112000]</code>, or
                even <code>[10000, 200000]</code>. Depending on that the line on
                chart will have different zoom and lower and upper bounds.
            </p>
            <h4>Range</h4>
            <p>
                <i>Range</i> determine an target range (usually width or height
                of the chart) in which values from <i>domain</i> would be
                mapped.
            </p>
            <h4>Configured scale</h4>
            <p>
                Configured scale is a function which accepts value from inside a{" "}
                <i>domain</i> bounds and returns a value in a <i>range</i>{" "}
                bounds.
            </p>
            <h4>Useful methods:</h4>
            <ul>
                <li>
                    <a href="https://github.com/d3/d3-scale#continuous_invert">
                        <code>invert</code>
                    </a>{" "}
                    - converts value from the range to domain (ie performs back
                    mapping, an operation reversed to regular scale
                    calculation). Not supported on some types of scale.
                </li>
                <li>
                    <a href="https://github.com/d3/d3-scale#continuous_ticks">
                        <code>ticks</code>
                    </a>{" "}
                    - returns given count of uniformly spaced human-readable
                    values within scale's domain. Used for showing tick marks on
                    corresponding axis.
                </li>
            </ul>
        </Chapter>
    );
}

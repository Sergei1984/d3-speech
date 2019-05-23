import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_2_CreateSVG() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Create SVG"
            className="C5_LineChart"
        >
            <p>
                Creating SVG includes defining <code>&lt;svg&gt;</code> tag,
                setting viewport and viewbox.
            </p>
            <p>
                At start, it is better to set viewport (width and height) to
                some fixed values, later when chart is ready it could be set to
                percentage and set up to keep proportions.
            </p>
            <p>
                Set viewbox to <code>"0 0 WIDTH HEIGHT"</code>, where WIDTH is
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
            <CodeBlock language="xml">
                {`
<svg width="1000" height="500" viewBox="0 0 100 50" preserveAspectRatio="xMidYMid meet">
</svg>`}
            </CodeBlock>
        </Chapter>
    );
}

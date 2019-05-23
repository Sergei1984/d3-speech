import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_3_DefineBounds() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Define Bounds"
            className="C5_LineChart"
        >
            <h3>Declare bounds constant:</h3>
            <p>
                Constant should have a values in viewbox coordinate system, not
                in physical SVG size (since SVG is vector format).
            </p>
            <p>
                Note you will usually need a paddings to left and bottom for
                axis's ticks and labels.
            </p>
            <CodeBlock language="typescript">{`
const WIDTH = 100; // Use this constant in view-box svg attribute
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
        </Chapter>
    );
}

import * as React from "react";
import { Chapter } from "./Chapter";

export function C6_1_PrepareData() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Prepare Data "
            className="C5_LineChart"
        >
            <p>
                Prepare data for chart: convert types, normalize values, filter
                out unnessecary data.
            </p>
            <p>
                Actual data structure is not important: D3 is flexible enough to
                work with many data structures, objects with any property names,
                nested objects etc.
            </p>
            <p>
                D3 includes{" "}
                <a href="https://github.com/d3/d3-array">
                    <code>d3-array</code>
                </a>{" "}
                package with many useful methods for working with arrays:
                finding min or max values, calculate sum, mean, median values,
                group values, generate sequences etc.
            </p>
        </Chapter>
    );
}

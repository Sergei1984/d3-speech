import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";
import ds from "../data/ukraine_salary.json";

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
            <p>In further we will build a line chart using that data:</p>
            <CodeBlock language="json">
                {JSON.stringify(ds, undefined, 2)}
            </CodeBlock>
            <p>
                On the horizontal axis we will have a years (from the{" "}
                <code>Year</code> property), on the vertical axis we will put a
                average salary in USD (from the <code>SalaryUSD</code>{" "}
                property).
            </p>
        </Chapter>
    );
}

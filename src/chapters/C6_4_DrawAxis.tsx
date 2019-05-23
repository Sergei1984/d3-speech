import * as React from "react";
import { Chapter } from "./Chapter";
import { CodeBlock } from "../components";

export function C6_4_DrawAxis() {
    return (
        <Chapter
            title="D3 + React:: Chart building algorithm:: Draw axis"
            className="C5_LineChart"
        >
            <h3>Create lines for bottom and top axis:</h3>
            <p>Use bounds constant you've defined.</p>
            <p>Note D3 is not involved here yet.</p>
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
        </Chapter>
    );
}

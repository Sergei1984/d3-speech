import * as React from "react";
import { useState } from "react";
import { RouteChildrenProps } from "react-router";
import { Chapter } from "./Chapter";

import { Markdown } from "../components";

export function SVGBasics(props: RouteChildrenProps<{ tab: string }>) {
    const [viewbox, setViewbox] = useState("0 0 500 500");
    const [align, setAlign] = useState("none");
    const [meetOrSlice, setMeetOrSlice] = useState("meet");

    return (
        <Chapter {...props} title="SVG Basicis">
            <Markdown>
                {`
## &lt;svg&gt; element

* Root tag for SVG document
* SVG can be used as a children of HTML tag as well as other HTML elements

\`\`\`html
<div>
    <svg version="1.1"
    baseProfile="full"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="red" />
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
</div>
\`\`\`
            `}
            </Markdown>
            <svg
                version="1.1"
                baseProfile="full"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="100%" height="100%" fill="red" />
                <circle cx="150" cy="100" r="80" fill="green" />
                <text
                    x="150"
                    y="125"
                    font-size="60"
                    text-anchor="middle"
                    fill="white"
                >
                    SVG
                </text>
            </svg>
            <Markdown>
                {`
* SVG Coordinate system:

  ![SVG Coordinates](https://developer.mozilla.org/@api/deki/files/78/=Canvas_default_grid.png)

* SVG canvas is infinite

* [Viewport, viewbox, preserve aspect ratio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio)
    * Viewport - width and height of &lt;svg&gt; element
    * View box - a part of SVG canvas displayed inside a viewport
    * \`preserveAspectRatio\` attribute - how content of SVG fits viewport with different aspect ratio

`}
            </Markdown>
            <div>
                <label>
                    Viewbox:
                    <input
                        type="text"
                        value={viewbox}
                        onChange={e => setViewbox(e.target.value)}
                    />
                </label>
                <label>
                    Align:{" "}
                    <select
                        value={align}
                        onChange={e => setAlign(e.target.value)}
                    >
                        <option value="none">None</option>
                        <option value="xMinYMin">xMinYMin</option>
                        <option value="xMidYMin">xMidYMin</option>
                        <option value="xMaxYMin">xMaxYMin</option>
                        <option value="xMinYMid">xMinYMid</option>
                        <option value="xMidYMid">xMidYMid</option>
                        <option value="xMaxYMid">xMaxYMid</option>
                        <option value="xMinYMax">xMinYMax</option>
                        <option value="xMidYMax">xMidYMax</option>
                        <option value="xMaxYMax">xMaxYMax</option>
                    </select>
                </label>
                <label>
                    Meet or slice:{" "}
                    <select
                        value={meetOrSlice}
                        onChange={e => setMeetOrSlice(e.target.value)}
                    >
                        <option value="meet">meet</option>
                        <option value="slice">slice</option>
                    </select>
                </label>
            </div>
            <svg
                version="1.1"
                baseProfile="full"
                width="500"
                height="500"
                viewBox={viewbox}
                xmlns="http://www.w3.org/2000/svg"
                className="box-with-border"
                preserveAspectRatio={`${align} ${meetOrSlice}`}
            >
                <rect width="100%" height="100%" fill="red" />
                <circle cx="150" cy="100" r="80" fill="green" />
                <text
                    x="150"
                    y="125"
                    font-size="60"
                    text-anchor="middle"
                    fill="white"
                >
                    SVG
                </text>
            </svg>

            <div>
                <h3>Path:</h3>
                <svg
                    version="1.1"
                    baseProfile="full"
                    width="500"
                    height="500"
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                    className="box-with-border"
                >
                    <path
                        d="M10 315
                                L 110 215
                                A 30 50 0 0 1 162.55 162.45
                                L 172.55 152.45
                                A 30 50 -45 0 1 215.1 109.9
                                L 315 10"
                        stroke="black"
                        fill="green"
                        stroke-width="2"
                        fill-opacity="0.5"
                    />
                </svg>
            </div>
        </Chapter>
    );
}

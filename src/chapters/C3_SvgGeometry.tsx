import * as React from "react";
import { useState } from "react";
import { SvgView } from "../components";
import { Chapter } from "./Chapter";

export function C3_SvgGeometry() {
    const [viewbox, setViewbox] = useState("0 0 500 200");
    const [align, setAlign] = useState("none");
    const [meetOrSlice, setMeetOrSlice] = useState("meet");

    return (
        <Chapter title="SVG Basicis">
            <h2>&lt;svg&gt; element</h2>
            <ul>
                <li>Root tag for SVG document </li>
                <li>
                    SVG can be used as a children of HTML tag as well as other
                    HTML elements or can be referenced as src or img tag as
                    other images.
                </li>
            </ul>
            <h3>Example:</h3>
            <SvgView defaultMode="svg">
                {`
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
                `}
            </SvgView>
            <h3>SVG Coordinate system</h3>
            <img
                alt="SVG Coordinate system"
                src="https://developer.mozilla.org/@api/deki/files/78/=Canvas_default_grid.png"
            />
            <p>SVG canvas is infinite</p>
            <h3>
                <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio">
                    Viewport, viewbox, preserve aspect ratio
                </a>
            </h3>
            <ul>
                <li>Viewport - width and height of &lt;svg&gt; element</li>
                <li>
                    View box - a part of SVG canvas displayed inside a viewport
                </li>
                <li>
                    <code>preserveAspectRatio</code> attribute - how content of
                    SVG fits viewport if have a different aspect ratio
                </li>
            </ul>

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
                height="200"
                viewBox={viewbox}
                xmlns="http://www.w3.org/2000/svg"
                className="box-with-border"
                preserveAspectRatio={`${align} ${meetOrSlice}`}
            >
                <rect width="100" height="100" stroke="red" fill="none" />
                <text
                    x="150"
                    y="125"
                    fontSize="60"
                    textAnchor="middle"
                    fill="gray"
                >
                    SVG
                </text>
            </svg>
        </Chapter>
    );
}

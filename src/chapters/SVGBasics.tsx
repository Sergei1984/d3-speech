import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ChapterPageBase } from "./ChapterPageBase";

import md from "./SVGBasics.md";

export function SVGBasics(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <ChapterPageBase {...props} md={md} title="SVG Basicis">
            <div>
                <h3>Basic SVG</h3>
                <div>
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
                </div>
                <div>
                    <h3>Viewport and viewbox</h3>
                    <svg
                        version="1.1"
                        baseProfile="full"
                        width="800"
                        height="200"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-with-border"
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
                </div>
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
            </div>
        </ChapterPageBase>
    );
}

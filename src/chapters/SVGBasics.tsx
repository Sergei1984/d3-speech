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
            </div>
        </ChapterPageBase>
    );
}

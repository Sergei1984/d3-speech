import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ChapterPageBase } from "./ChapterPageBase";

import md from "./Intro.md";

console.log(md);

export function Intro(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <ChapterPageBase
            {...props}
            md={md}
            title="Intro: What is D3"
            urlBase="/intro"
        >
            <div>Some result</div>
        </ChapterPageBase>
    );
}

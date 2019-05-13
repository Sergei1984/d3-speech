import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ChapterPageBase } from "./ChapterPageBase";

export function Intro(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <ChapterPageBase
            {...props}
            md="Some slide content"
            title="Intro: What is D3"
            urlBase="/intro"
        >
            <div>Some result</div>
        </ChapterPageBase>
    );
}

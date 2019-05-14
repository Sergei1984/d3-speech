import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ChapterPageBase } from "./ChapterPageBase";

import md from "./Intro.md";

export function Intro(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <ChapterPageBase {...props} md={md} title="Intro">
            <div>Some result</div>
        </ChapterPageBase>
    );
}

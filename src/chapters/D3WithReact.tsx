import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { ChapterPageBase } from "./ChapterPageBase";

import md from "./D3WithReact.md";

export function D3WithReact(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <ChapterPageBase {...props} md={md} title="D3 + React">
            <div>D3: interpolation values to document dimensions</div>
        </ChapterPageBase>
    );
}

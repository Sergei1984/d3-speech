import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { Chapter } from "./Chapter";

import { Markdown } from "../components";

export function Intro(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <Chapter {...props} title="Intro">
            <Markdown>
                {`
## What is D3

* D3 stands for _Data Driven Documents_
* D3 is a library for create _documents_ with representation of data.
* D3 provides a set of _primitives_ which allows to build any chart
* D3 requires more manual work but allows to create any type of charts

## SVG

* In the speech we will consider only D3 with __SVG__
* D3 also is able to work with _canvas_ or can use HTML for simple charts (for example bar charts)


## D3 Parts

* D3 consists of many parts, most of them we will not use and will not consider
* D3 includes code for _building_ __SVG__ document DOM. We will use __React__ instead


[See how to use D3 with React](/d3-with-react/md)`}
            </Markdown>
        </Chapter>
    );
}

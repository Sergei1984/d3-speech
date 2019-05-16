import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { Chapter } from "./Chapter";

export function Intro(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <Chapter {...props} title="Intro">
            <h2>What is D3</h2>
            <ul>
                <li>
                    D3 stands for <i>Data Driven Document</i>
                </li>
                <li>
                    D3 is a library for create <i>documents</i> with
                    representation of data.
                </li>
                <li>
                    D3 provides a set of <i>primitives</i> which allows to build
                    any chart
                </li>
                <li>
                    D3 requires more manual work but allows to create any type
                    of charts
                </li>
            </ul>
            <h2>SVG</h2>
            <ul>
                <li>In the speech we will consider only D3 with SVG</li>
                <li>
                    D3 also is able to work with canvas or can use HTML for
                    simple charts (for example bar charts)
                </li>
            </ul>
            <h2>D3 parts</h2>
            <ul>
                <li>
                    D3 consists of many parts, most of them we will not use and
                    will not consider since they are not usable with React of
                    pretty specialized
                </li>
                <li>
                    D3 includes code for _building SVG document DOM. We will use
                    React instead
                </li>
            </ul>
            <a href="/d3-with-react">How to use D3 with React</a>
        </Chapter>
    );
}

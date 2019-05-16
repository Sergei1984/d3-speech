import * as React from "react";
import { RouteChildrenProps } from "react-router";
import { Chapter } from "./Chapter";

export function D3WithReact(props: RouteChildrenProps<{ tab: string }>) {
    return (
        <Chapter {...props} title="D3 + React">
            <h2>Use D3 for:</h2>
            <ul>
                <li>Interpolating values to document (chart) dimensions </li>
                <li>Generating shapes for paths</li>
            </ul>
            <h2>Use React for:</h2>
            <ul>
                <li>Building DOM of SVG</li>
                <li>Update DOM</li>
                <li>Handle events</li>
            </ul>
            <h2>Pros:</h2>
            <ul>
                <li>
                    Declarative, functional and straightforward document
                    structure (vs contrintuitive D3 DOM building methods)
                </li>
                <li>Reusable components for chart parts: axis, lines etc.</li>
                <li>
                    Smaller application size: don't inlcudes unnecessary D3
                    parts
                </li>
                <li>Server-side rendering, rendering without browser</li>
            </ul>
            <h2>Cons:</h2>
            <ul>
                <li>Animations are not supported</li>
                <li>D3 event handling is not supported</li>
                <li>For some complex charts may need direct DOM mutations</li>
            </ul>
            <h2>Alternative:</h2>
            <p>
                <a href="https://github.com/Olical/react-faux-dom">
                    react-faux-dom
                </a>{" "}
                - mutable in-memory DOM emulation that can be rendered into
                React component tree.
            </p>
            <p>Use it if you need to use imperative D3 methods with React.</p>
        </Chapter>
    );
}

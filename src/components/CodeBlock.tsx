import highlight from "highlight.js";
import "highlight.js/styles/vs.css";
import * as React from "react";
import { useEffect, useRef } from "react";

export interface CodeBlockProps {
    language: "html" | "xml" | "typescript";
    children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            highlight.highlightBlock(ref.current);
        }
    }, [children]);

    return (
        <pre>
            <code ref={ref} className={`language-${language}`}>
                {children}
            </code>
        </pre>
    );
}

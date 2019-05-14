import * as React from "react";
import { useEffect, useRef } from "react";
import highlight from "highlight.js";
import "highlight.js/styles/vs.css";

export interface MarkdownProps {
    markdown: string;
    className?: string;
}

export function Markdown({ markdown, className }: MarkdownProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const codeBlocks = Array.from(ref.current.querySelectorAll("code"));
            for (const code of codeBlocks) {
                highlight.highlightBlock(code);
            }
        }
    }, [markdown]);
    return (
        <div
            ref={ref}
            className={className}
            dangerouslySetInnerHTML={{
                __html: markdown
            }}
        />
    );
}

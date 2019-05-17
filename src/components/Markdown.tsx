import * as React from "react";
import { useEffect, useRef } from "react";
import highlight from "highlight.js";
import "highlight.js/styles/vs.css";
import remark from "remark";
import remarkHtml from "remark-html";

export interface MarkdownProps {
    children: string;
    className?: string;
}

export function Markdown({ children, className }: MarkdownProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const codeBlocks = Array.from(ref.current.querySelectorAll("code"));
            for (const code of codeBlocks) {
                highlight.highlightBlock(code);
            }
        }
    }, [children]);

    const html = remark()
        .use(remarkHtml)
        .processSync(children);

    return (
        <div
            ref={ref}
            className={className}
            dangerouslySetInnerHTML={{
                __html: html
            }}
        />
    );
}

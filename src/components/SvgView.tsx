import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import cn from "classnames";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import pretty from "pretty";

export interface SvgViewProps {
    children: string | React.ReactElement;
    defaultMode?: "svg" | "code";
    className?: string;
}

export function SvgView({ children, className, defaultMode }: SvgViewProps) {
    const [mode, setMode] = useState(defaultMode || "svg");

    const svgString =
        typeof children === "string"
            ? children
            : putAttributesOnNewLine(pretty(renderToStaticMarkup(children)));

    return (
        <div className={cn("SvgView", className)}>
            <div className="SvgView__toolbar">
                <button
                    className={cn("SvgView__mode-switch-button", {
                        active: mode === "svg"
                    })}
                    onClick={() => setMode("svg")}
                    type="button"
                >
                    SVG
                </button>
                <button
                    className={cn("SvgView__mode-switch-button", {
                        active: mode === "code"
                    })}
                    onClick={() => setMode("code")}
                    type="button"
                >
                    Code
                </button>
            </div>
            {mode === "code" && (
                <CodeBlock language="xml">{svgString}</CodeBlock>
            )}
            {mode === "svg" &&
                (typeof children === "string" ? (
                    <div
                        className="SvgView__image"
                        dangerouslySetInnerHTML={{ __html: children }}
                    />
                ) : (
                    <div className="SvgView__image">{children}</div>
                ))}
        </div>
    );
}

function putAttributesOnNewLine(code: string): string {
    return (
        code
            .split("\n")
            // Put closing tag on new line
            .map(line =>
                line
                    .replace("><", ">\n<")
                    .splitAndPad("\n")
                    .flatten()
            )
            .flatten()
            // Put attributes on new line
            .map(line => {
                return [line];
            })
            .flatten()
            .join("\n")
    );
}

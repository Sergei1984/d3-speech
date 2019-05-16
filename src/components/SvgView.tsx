import * as React from "react";
import cn from "classnames";
import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

export interface SvgViewProps {
    children: string;
    defaultMode?: "svg" | "code";
    className?: string;
}

export function SvgView({ children, className, defaultMode }: SvgViewProps) {
    const [mode, setMode] = useState(defaultMode || "svg");
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
                <CodeBlock language="xml">{children}</CodeBlock>
            )}
            {mode === "svg" && (
                <div
                    className="SvgView__image"
                    dangerouslySetInnerHTML={{ __html: children }}
                />
            )}
        </div>
    );
}

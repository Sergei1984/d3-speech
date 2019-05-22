import cn from "classnames";
import * as React from "react";
import { useState } from "react";
import "./Collapsible.less";

export interface CollapsibleProps {
    title: string;
    children: React.ReactChild | React.ReactChild[];
    defaultIsExpanded: boolean;
    className?: string;
}

export function Collapsible({
    title,
    defaultIsExpanded,
    children,
    className
}: CollapsibleProps) {
    const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);

    return (
        <div className={cn("Collapsible", className)}>
            <div
                className="Collapsible__header"
                onClick={_ => setIsExpanded(!isExpanded)}
            >
                <div className="Collapsible__title">{title}</div>
                <div className="Collapsible__actions">
                    {isExpanded ? "Collapse" : "Expand"}
                </div>
            </div>
            {isExpanded ? children : undefined}
        </div>
    );
}

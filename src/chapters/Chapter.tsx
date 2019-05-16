import * as React from "react";
import { match } from "react-router-dom";
import "./Chapter.less";

export interface ChapterProps {
    title: string;
    match: match<{ tab: string }>;
    children: React.ReactChild | React.ReactChild[];
}

export function Chapter({ title, match, children }: ChapterProps) {
    return (
        <div className="Chapter">
            <div className="Chapter__header">
                <span className="Chapter__title">{title}</span>
            </div>
            <div className="Chapter__content md">{children}</div>
        </div>
    );
}

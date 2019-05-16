import * as React from "react";
import { match } from "react-router-dom";
import "./ChapterPageBase.less";

export interface ChapterProps {
    title: string;
    match: match<{ tab: string }>;
    children: React.ReactChild | React.ReactChild[];
}

export function Chapter({ title, match, children }: ChapterProps) {
    return (
        <div className="ChapterPage">
            <div className="ChapterPage__header">
                <span className="ChapterPage__title">{title}</span>
            </div>
            <div className="ChapterPage__content result">{children}</div>
        </div>
    );
}

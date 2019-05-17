import cn from "classnames";
import * as React from "react";
import "./Chapter.less";

export interface ChapterProps {
    title: string;
    children: React.ReactChild | React.ReactChild[];
    className?: string;
}

export function Chapter({ title, children, className }: ChapterProps) {
    return (
        <div className={cn("Chapter", className)}>
            <div className="Chapter__header">
                <span className="Chapter__title">{title}</span>
            </div>
            <div className="Chapter__content slide">{children}</div>
        </div>
    );
}

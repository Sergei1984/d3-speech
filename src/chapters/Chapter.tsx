import * as React from "react";
import "./Chapter.less";

export interface ChapterProps {
    title: string;
    children: React.ReactChild | React.ReactChild[];
}

export function Chapter({ title, children }: ChapterProps) {
    return (
        <div className="Chapter">
            <div className="Chapter__header">
                <span className="Chapter__title">{title}</span>
            </div>
            <div className="Chapter__content md">{children}</div>
        </div>
    );
}

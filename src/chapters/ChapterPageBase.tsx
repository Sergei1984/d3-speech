import * as React from "react";
import { Link, match } from "react-router-dom";
import "./ChapterPageBase.less";
import { Markdown } from "../components";
import cn from "classnames";

export interface ChapterPageProps {
    title: string;
    md: string;
    match: match<{ tab: string }>;
    children: React.ReactChild | React.ReactChild[];
}

export function ChapterPageBase({
    title,

    match,
    md,
    children
}: ChapterPageProps) {
    const urlBase = match.path.replace("/:tab?", "");
    const isMdTabActive = match.params.tab === "md";
    return (
        <div className="ChapterPage">
            <div className="ChapterPage__header">
                <span className="ChapterPage__title">{title}</span>
                <Link
                    to={`${urlBase}/`}
                    className={cn("ChapterPage__link", {
                        active: !isMdTabActive
                    })}
                >
                    Result
                </Link>
                <Link
                    to={`${urlBase}/md`}
                    className={cn("ChapterPage__link", {
                        active: isMdTabActive
                    })}
                >
                    Slide
                </Link>
            </div>

            {isMdTabActive && (
                <Markdown className="ChapterPage__content md" markdown={md} />
            )}
            {!isMdTabActive && (
                <div className="ChapterPage__content result">{children}</div>
            )}
        </div>
    );
}

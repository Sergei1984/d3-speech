import * as React from "react";
import { Link, match } from "react-router-dom";

export interface ChapterPageProps {
    title: string;
    md: string;
    urlBase: string;
    match: match<{ tab: string }>;
    children: React.ReactChild | React.ReactChild[];
}

export function ChapterPageBase({
    title,
    urlBase,
    match,
    md,
    children
}: ChapterPageProps) {
    return (
        <div className="ChapterPage">
            <div className="ChapterPage__header">
                <span className="ChapterPage__title">{title}</span>
                <Link to={`${urlBase}/`}>Result</Link>
                <Link to={`${urlBase}/md`}>Slide</Link>
            </div>
            {match.params.tab === "md" && (
                <div
                    className="ChapterPage__md"
                    dangerouslySetInnerHTML={{ __html: md }}
                />
            )}
            {match.params.tab !== "md" && children}
        </div>
    );
}

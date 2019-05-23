import * as React from "react";
import { Chapter } from "./Chapter";
import { NavLink } from "react-router-dom";

export function C6_ChartBuildingAlgorithm() {
    return (
        <Chapter
            title="D3 + React: chart building algorithm"
            className="C5_LineChart"
        >
            <ol>
                <li>
                    <NavLink to="/chart-building-algorithm/prepare-data">
                        Prepare data
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart-building-algorithm/create-svg">
                        Create SVG
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart-building-algorithm/define-bounds">
                        Define Bounds
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart-building-algorithm/draw-axis">
                        Draw axis
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart-building-algorithm/define-scales">
                        Define scales
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart-building-algorithm/draw-ticks">
                        Draw ticks
                    </NavLink>
                </li>
            </ol>
        </Chapter>
    );
}

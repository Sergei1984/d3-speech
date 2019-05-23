import * as React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "./App.less";
import {
    C1_Intro,
    C2_D3WithReact,
    C3_SvgGeometry,
    C4_SvgShapes,
    C5_LineChart,
    C6_ChartBuildingAlgorithm,
    C6_1_PrepareData,
    C6_2_CreateSVG,
    C6_3_DefineBounds,
    C6_4_DrawAxis,
    C6_5_DefineScales,
    C6_6_DrawTicks
} from "./chapters";

export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App__header">D3 ❤️ React</div>
                <ul className="App__menu">
                    <li>
                        <NavLink to="/" exact>
                            1. Intro. What is D3
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/d3-with-react/">
                            2. Using D3 with React
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/svg-geometry/">3. SVG Geometry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/svg-shapes/">4. SVG Shapes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chart-building-algorithm/">
                            5. D3 + React: Chart building algorithm
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink to="/chart-building-algorithm/prepare-data">
                                    5.1 Prepare data
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chart-building-algorithm/create-svg">
                                    5.2 Create SVG
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chart-building-algorithm/define-bounds">
                                    5.3 Define Bounds
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chart-building-algorithm/draw-axis">
                                    5.4 Draw axis
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chart-building-algorithm/define-scales">
                                    5.5 Define scales
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/chart-building-algorithm/draw-ticks">
                                    5.6 Draw ticks
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/line-chart/">6. Line Chart</NavLink>
                    </li>
                </ul>
                <div className="App__content">
                    <Route path="/d3-with-react" component={C2_D3WithReact} />
                    <Route path="/svg-geometry" component={C3_SvgGeometry} />
                    <Route path="/svg-shapes" component={C4_SvgShapes} />
                    <Route path="/line-chart" component={C5_LineChart} />
                    <Route
                        path="/chart-building-algorithm/"
                        exact
                        component={C6_ChartBuildingAlgorithm}
                    />
                    <Route
                        path="/chart-building-algorithm/prepare-data"
                        component={C6_1_PrepareData}
                    />
                    <Route
                        path="/chart-building-algorithm/create-svg"
                        component={C6_2_CreateSVG}
                    />
                    <Route
                        path="/chart-building-algorithm/define-bounds"
                        component={C6_3_DefineBounds}
                    />
                    <Route
                        path="/chart-building-algorithm/draw-axis"
                        component={C6_4_DrawAxis}
                    />
                    <Route
                        path="/chart-building-algorithm/define-scales"
                        component={C6_5_DefineScales}
                    />
                    <Route
                        path="/chart-building-algorithm/draw-ticks"
                        component={C6_6_DrawTicks}
                    />
                    <Route path="/" exact component={C1_Intro} />
                </div>
            </div>
        </BrowserRouter>
    );
}

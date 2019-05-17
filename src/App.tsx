import * as React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "./App.less";
import {
    C1_Intro,
    C2_D3WithReact,
    C3_SvgGeometry,
    C4_SvgShapes
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
                </ul>
                <div className="App__content">
                    <Route path="/d3-with-react" component={C2_D3WithReact} />
                    <Route path="/svg-geometry" component={C3_SvgGeometry} />
                    <Route path="/svg-shapes" component={C4_SvgShapes} />
                    <Route path="/" exact component={C1_Intro} />
                </div>
            </div>
        </BrowserRouter>
    );
}

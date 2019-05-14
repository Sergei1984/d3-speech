import * as React from "react";
import "./App.less";
import { BrowserRouter, NavLink, Route, Redirect } from "react-router-dom";
import { Intro, D3WithReact, SVGBasics } from "./chapters";

export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App__header">D3 ❤️ React</div>
                <ul className="App__menu">
                    <li>
                        <NavLink to="/intro/">1. Intro. What is D3</NavLink>
                    </li>
                    <li>
                        <NavLink to="/d3-with-react/">
                            2. Using D3 with React
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/svg-basics/">3. SVG basisc</NavLink>
                    </li>
                </ul>
                <div className="App__content">
                    <Route path="/intro/:tab?" component={Intro} />
                    <Route
                        path="/d3-with-react/:tab?"
                        component={D3WithReact}
                    />
                    <Route path="/svg-basics/:tab?" component={SVGBasics} />
                </div>
            </div>
        </BrowserRouter>
    );
}

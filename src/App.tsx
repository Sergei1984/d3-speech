import * as React from "react";
import "./App.less";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Intro, D3WithReact } from "./chapters";

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
                </ul>
                <div className="App__content">
                    <Route path="/intro/:tab?" component={Intro} />
                    <Route
                        path="/d3-with-react/:tab?"
                        component={D3WithReact}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

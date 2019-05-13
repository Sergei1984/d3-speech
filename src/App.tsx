import * as React from "react";
import "./App.less";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Intro } from "./chapters";

export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App__header">D3 ❤️ React</div>
                <ul className="App__menu">
                    <li>
                        <Link to="/intro/">1. Intro. What is D3</Link>
                    </li>
                </ul>
                <div className="App__content">
                    <Route path="/intro/:tab?" component={Intro} />
                </div>
            </div>
        </BrowserRouter>
    );
}

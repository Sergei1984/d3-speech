import * as React from "react";
import { Chapter } from "./Chapter";
import { SvgView } from "../components";

export function C4_SvgShapes() {
    return (
        <Chapter title="SVG Shapes">
            <p>
                <h3>Circle</h3>
                <SvgView>
                    <svg
                        version="1.1"
                        baseProfile="full"
                        xmlns="http://www.w3.org/2000/svg"
                        className="box-with-border"
                    >
                        <circle cx="100" cy="100" radius="40" stroke="red" />
                    </svg>
                </SvgView>
            </p>
        </Chapter>
    );
}

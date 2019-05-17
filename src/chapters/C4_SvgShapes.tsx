import * as React from "react";
import { Chapter } from "./Chapter";
import { SvgView } from "../components";
import "./C4_SvgShapes.less";

export function C4_SvgShapes() {
    return (
        <Chapter title="SVG Shapes">
            <div className="SvgShapes">
                <div className="SvgShapes__shape">
                    <h3>Circle</h3>
                    <SvgView>
                        <svg
                            version="1.1"
                            baseProfile="full"
                            xmlns="http://www.w3.org/2000/svg"
                            className="box-with-border"
                            width="200"
                            height="200"
                        >
                            <circle
                                cx="100"
                                cy="100"
                                r="40"
                                stroke="red"
                                fill="#ceceaa"
                            />
                        </svg>
                    </SvgView>
                </div>
                <div className="SvgShapes__shape">
                    <h3>Rectangle</h3>
                    <SvgView>
                        <svg
                            version="1.1"
                            baseProfile="full"
                            xmlns="http://www.w3.org/2000/svg"
                            className="box-with-border"
                            width="200"
                            height="100"
                        >
                            <rect
                                x="10"
                                y="10"
                                width="70"
                                height="30"
                                stroke="red"
                                fill="#ceceaa"
                            />
                        </svg>
                    </SvgView>
                </div>
                <div className="SvgShapes__shape">
                    <h3>Line</h3>
                    <SvgView>
                        <svg
                            version="1.1"
                            baseProfile="full"
                            xmlns="http://www.w3.org/2000/svg"
                            className="box-with-border"
                            width="200"
                            height="100"
                        >
                            <line
                                x1="10"
                                y1="10"
                                x2="90"
                                y2="90"
                                stroke="red"
                            />
                        </svg>
                    </SvgView>
                </div>
                <div className="SvgShapes__shape">
                    <h3>Text</h3>
                    <SvgView>
                        <svg
                            version="1.1"
                            baseProfile="full"
                            xmlns="http://www.w3.org/2000/svg"
                            className="box-with-border"
                            width="200"
                            height="100"
                        >
                            <text
                                x="50"
                                y="50"
                                fontSize="20"
                                textAnchor="middle"
                                fill="green"
                            >
                                SVG
                            </text>
                        </svg>
                    </SvgView>
                </div>
                <div className="SvgShapes__shape">
                    <h3>Path</h3>
                    <SvgView>
                        <svg
                            version="1.1"
                            baseProfile="full"
                            xmlns="http://www.w3.org/2000/svg"
                            className="box-with-border"
                            width="200"
                            height="200"
                        >
                            <path
                                d="M10 10 Q 52.5 10, 95 80 T 10 80 Z"
                                stroke="red"
                                fill="none"
                            />
                        </svg>
                    </SvgView>
                </div>
            </div>
        </Chapter>
    );
}

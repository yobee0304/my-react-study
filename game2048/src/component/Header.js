import React from "react";

export default function Header() {
    return (
        <div className="heading">
            <h1 className="title">2048</h1>
            <div className="scores-container">
                <div className="score-container"></div>
                <div className="best-container"></div>
            </div>
        </div>
    );
}
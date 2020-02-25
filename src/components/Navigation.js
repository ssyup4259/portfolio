import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            상팔이의 프로그래밍
            <div className = "menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Navigation;
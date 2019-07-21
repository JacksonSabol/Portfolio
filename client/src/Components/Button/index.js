import React from "react";
import "./index.css";

export function NavbarItem(props) {
    return (
        <button className="navbar-nav-item-btn" {...props}>
            {props.children}
        </button>
    );
}
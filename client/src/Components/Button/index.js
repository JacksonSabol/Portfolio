import React from "react";
import "./index.css";

export function SabolDesigns(props) {
    return (
        <button className="back-to-top-logo" {...props}>
            {props.children}
        </button>
    );
}
export function NavbarItem(props) {
    return (
        <button className="navbar-nav-item-btn" {...props}>
            {props.children}
        </button>
    );
}
export function NextButton(props) {
    return (
        <button className="next-btn" {...props}>
            &gt;&gt;&gt;
        </button>
    );
}
export function SiteButton(props) {
    return (
        <button className={props.className === "light" ? "site-btn light" : "site-btn"} {...props}>
            {props.children}
        </button>
    );
}
export function SubmitButton(props) {
    return (
        <button type="button" className={props.type === "light" ? "site-btn light" : "site-btn"} disabled={props.disabled}>
            {props.children}
        </button>
    );
}
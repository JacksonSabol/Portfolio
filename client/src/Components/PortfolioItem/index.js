import React from 'react';
import './index.css';

export function PortfolioItem(props) {
    return (
        <div className="single-portfolio"  style={{ backgroundImage: `url("${props.bgImg}")` }}>
            <button onClick={() => props.handleModalToggle(props.modalId)} className="portfolio-info">
                <div className="pfbg"  style={{ backgroundImage: `url("${props.bgImg}")` }}></div>
                <h5>{props.projectName}</h5>
                <p>{props.projectCategory}</p>
            </button>
        </div>
    );
}
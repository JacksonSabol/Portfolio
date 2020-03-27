import React from 'react';
import './index.css';
import dataIcon from '../../img/icons/data.svg';
import engIcon from '../../img/icons/engineering.svg';
import geoIcon from '../../img/icons/geospatial.svg';
import logIcon from '../../img/icons/logistics.svg';

const Milestones = () => {
    return (
        <div className="wrap-facts">
            <div className="fact-box">
                <div className="fact-content">
                    <img src={dataIcon} alt="Icon" />
                    <h3>End-to-End Development</h3>
                </div>
            </div>
            <div className="fact-box">
                <div className="fact-content">
                    <img src={engIcon} alt="Icon" />
                    <h3>Scalable Solutions Design</h3>
                </div>
            </div>
            <div className="fact-box">
                <div className="fact-content">
                    <img src={geoIcon} alt="Icon" />
                    <h3>Leadership On or Off-Shore</h3>
                </div>
            </div>
            <div className="fact-box">
                <div className="fact-content">
                    <img src={logIcon} alt="Icon" />
                    <h3>Health Monitoring and Reporting</h3>
                </div>
            </div>
        </div>
    );
}
export default Milestones;
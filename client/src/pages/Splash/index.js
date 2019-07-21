import React, { Component } from 'react';
import Navbar from "../../Components/Navbar";
import './index.css';

class Splash extends Component {
    // Placeholder
    state = {
        scrollLocation: ""
    };

    // Smooth scrolling
    easeInOutExponential = (y) => {
        return y === 0 ? 0 : y === 1 ? 1 : y < .5 ? Math.pow(2, 20 * y - 10) / 2 : (2 - Math.pow(2, -20 * y + 10)) / 2
    };

    // handlePageScroll = (target) => {

    // };

    render() {
        return (
            <div>
                <header>
                    <Navbar />
                </header>
                <section className="ws-section" id="top">
                    {/* <WelcomeSlider /> */}
                </section>
            </div>
        );

    }
}

export default Splash;

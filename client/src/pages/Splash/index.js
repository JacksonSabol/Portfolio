import React, { Component } from 'react';
import Navbar from "../../Components/Navbar";
import WelcomeSlider from '../../Components/WelcomeSlider';
import './index.css';

class Splash extends Component {
    // Placeholder
    state = {
        scrollLocation: ""
    };

    offset = (elm) => {
        const rect = elm.getBoundingClientRect(),
        currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return rect.top + currentScrollTop;
    };

    handlePageScroll = (hash) => {
        let element = document.getElementById(hash);
        let target = this.offset(element);
        this.scrollTo(document.scrollingElement, target, 1250);
    };
    // Animated scrolling
    scrollTo = (element, to, duration) => {
        let start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        const animateScroll = function () {
            currentTime += increment;
            // Easing equations - http://www.gizma.com/easing/
            const easeInOutExponential = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                t--;
                return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
            };
            element.scrollTop = easeInOutExponential(currentTime, start, change, duration);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };

    render() {
        return (
            <div>
                <header>
                    <Navbar
                        handlePageScroll={this.handlePageScroll}
                    />
                </header>
                <section className="ws-section">
                    <WelcomeSlider />
                </section>
            </div>
        );

    }
}

export default Splash;

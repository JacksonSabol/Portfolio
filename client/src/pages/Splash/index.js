import React, { Component } from 'react';
import './index.css';
import Navbar from "../../Components/Navbar";
import WelcomeSlider from '../../Components/WelcomeSlider';
import { About } from '../../Components/About';
import Portfolio from '../../Components/Portfolio';

class Splash extends Component {
    state = {
        scrollToggle: false
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

    handleNavbarBg = () => {
        const navbarHeight = document.getElementById('scroll-toggler');
        const startY = navbarHeight.offsetHeight * 2;
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > startY) {
            this.setState({ scrollToggle: true });
        } else {
            this.setState({ scrollToggle: false });
        }
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleNavbarBg);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleNavbarBg);
    };

    render() {
        const scrollToggle = this.state.scrollToggle ? "scrolled" : "";
        return (
            <div>
                <header>
                    <Navbar
                        handlePageScroll={this.handlePageScroll}
                        class={scrollToggle}
                    />
                </header>
                <section className="ws-section" id="top">
                    <WelcomeSlider />
                </section>
                <section className="section-pad" id="about">
                    <About
                        handlePageScroll={this.handlePageScroll}
                    />
                </section>
                <section className="portfolio-section section-p-pad" id="portfolio">
                    <Portfolio />
                </section>
            </div>
        );
    }
}

export default Splash;

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
                <section className="ws-section" id="top">
                    <WelcomeSlider />
                </section>
                <section id="about">
                    <p>My name is Jackson Sabol, and I am a Full-Stack Web Developer based in the San Francisco Bay Area. I primarily focus on front-end development, but I'm comfortable with back-end work as well, using technologies and libraries like React, Node, Express, MySQL, and MongoDB. Before I became a web developer, I worked as a conservation biologist for various consulting firms across the western United States. Over the years, I’ve been responsible for collecting, analyzing, and presenting large amounts of invaluable data on the progress of restoration projects. The management of biological data is what got me interested in programming!</p>
                    <p>While I was a web application developer, I developed tools for field safety and collection of biologically relevant data. I built one application that provides a user-friendly interface for performing a safety checklist prior to the start of work each day. The application runs through the curated safety topics one-by-one so that nothing slips through the cracks, and each field biologist can safely conduct their surveys. Since its implementation, the company has experienced zero OSHA recordable injuries, enhancing their safety record and hire-ability by large clients.</p>
                    <p>In addition to the safety checklist application, I developed a data collection platform that interfaces with the company’s existing database and mapping software. Field biologists are now able to take notes about various natural resources like habitat features, endangered species, and invasive plant dispersal on a device, then sync the data to the database instantly instead of laboring over tedious data entry. This type of problem-solving and knowledge of web application development is something that I’m constantly cultivating, and I look forward to using it to help you!</p>
                </section>
            </div>
        );

    }
}

export default Splash;

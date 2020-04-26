import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import Navbar from "../../Components/Navbar";
import WelcomeSlider from '../../Components/WelcomeSlider';
import { About } from '../../Components/About';
import Portfolio from '../../Components/Portfolio';
import Milestones from '../../Components/Milestones';
// import Contact from '../../Components/Contact';

class Splash extends Component {
    state = {
        scrollToggle: false,
        name: '',
        email: '',
        subject: '',
        message: '',
        sendSuccess: false,
        emptyFields: false,
        sendError: false
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

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        if (name === "subject") {
            value = value.substring(0, 78);
        }
        this.setState({
            [name]: value
        });
    };

    handleMessageSend = event => {
        event.preventDefault();
        if (this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '') {
            this.setState({ emptyFields: true });
        } else {
            axios
                .post('/mail/contactme', {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message
                })
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        sendSuccess: true
                    });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        sendError: true
                    });
                });
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleNavbarBg);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleNavbarBg);
    };

    render() {
        // const { name, email, subject, message, sendSuccess, emptyFields, sendError } = this.state;
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
                <section className="milestones-section section-sm-pad" id="services">
                    <Milestones />
                </section>
                {/* <section className="contact-section" id="contact">
                    <Contact
                        handleInputChange={this.handleInputChange}
                        handleMessageSend={this.handleMessageSend}
                        name={name}
                        email={email}
                        subject={subject}
                        message={message}
                        sendSuccess={sendSuccess}
                        emptyFields={emptyFields}
                        sendError={sendError}
                    />
                </section> */}
            </div>
        );
    }
}

export default Splash;

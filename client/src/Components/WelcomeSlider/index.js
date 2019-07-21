import React, { Component } from "react";
import './index.css';
// import sliderOne from '../../img/slider/1.jpg';
// import sliderTwo from '../../img/slider/1.jpg';
// import sliderThree from '../../img/slider/1.jpg';

class WelcomeSlider extends Component {
    state = {
        img: 1
    };

    toggleSlider = () => {
        this.setState(state => ({
            img: state.img + 1
        }));
    }

    render() {
        return (
            <div className="welcome-slider">
                <div className="ws-item" id="slider-one">
                    <div className="ws-text">
                        <h2 className="ws-title">Full Stack Web Developer</h2>
                        <p className="ws-des">Specializing in JavaScript on the Front End and the Back End</p>
                    </div>
                </div>
                <div className="ws-item" id="slider-two">
                    <div className="ws-text">
                        <h2 className="ws-title">Front End</h2>
                        <p className="ws-des">CSS | SASS | JavaScript ES6 | Bootstrap | jQuery | React.js | Mobile Responsive Design</p>
                    </div>
                </div>
                <div className="ws-item" id="slider-three">
                    <div className="ws-text">
                        <h2 className="ws-title">Back End</h2>
                        <p className="ws-des">Node.js | Express.js | Python | JSON | SQL | NoSQL | NPM | Command Line</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeSlider;
import React, { Component } from "react";
import './index.css';
import sliderOne from '../../img/slider/1.jpg';
import sliderTwo from '../../img/slider/2.jpg';
import sliderThree from '../../img/slider/3.jpg';

class WelcomeSlider extends Component {
    state = {
        img: 1
    };

    componentDidMount() {
        setInterval(this.toggleSlider, 8000);
    };

    toggleSlider = () => {
        if (this.state.img < 3) {
            this.setState(state => ({
                img: state.img + 1
            }));
        } else {
            this.setState({ img: 1 });
        }
    }

    render() {
        const { img } = this.state;
        return (
            <div className="welcome-slider">
                {img === 1 && (
                    <div className="ws-item" id="slider-one" style={{ backgroundImage: `url("${sliderOne}")` }}>
                        <div className="ws-text">
                            <h2 className="ws-title">Full Stack Web Developer</h2>
                            <p className="ws-des">Specializing in JavaScript on the Front End and the Back End</p>
                        </div>
                    </div>
                )}
                {img === 2 && (
                    <div className="ws-item" id="slider-two" style={{ backgroundImage: `url("${sliderTwo}")` }}>
                        <div className="ws-text">
                            <h2 className="ws-title">Front End</h2>
                            <p className="ws-des">CSS | SASS | JavaScript ES6 | Bootstrap | jQuery | React.js | Mobile Responsive Design</p>
                        </div>
                    </div>
                )}
                {img === 3 && (
                    <div className="ws-item" id="slider-three" style={{ backgroundImage: `url("${sliderThree}")` }}>
                        <div className="ws-text">
                            <h2 className="ws-title">Back End</h2>
                            <p className="ws-des">Node.js | Express.js | Python | JSON | SQL | NoSQL | NPM | Command Line</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default WelcomeSlider;
import React, { Component } from "react";
import './index.css';
import sliderOne from '../../img/slider/1.jpg';
import sliderTwo from '../../img/slider/2.jpg';
import sliderThree from '../../img/slider/3.jpg';
import { NextButton } from "../Button";

const content = {
    1: {
        bgImg: sliderOne,
        title: "Full Stack Developer",
        des: "Specializing in JavaScript on the Front End and the Back End"
    },
    2: {
        bgImg: sliderTwo,
        title: "Front End",
        des: "CSS | SASS | JavaScript ES6 | Bootstrap | jQuery | React.js | Mobile Responsive Design"
    },
    3: {
        bgImg: sliderThree,
        title: "Back End",
        des: "Node.js | Express.js | Python | JSON | SQL | NoSQL | NPM | Command Line"
    }
};
class WelcomeSlider extends Component {
    state = {
        intervalId: 0,
        img: 1,
        bgImg: content[1].bgImg,
        title: content[1].title,
        des: content[1].des
    };

    componentDidMount = () => {
        let intervalId = setInterval(this.toggleSlider, 8000);
        this.setState({ intervalId: intervalId });
    };

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    };

    toggleSlider = () => {
        if (this.state.img === 1) {
            this.setState({
                img: 2,
                bgImg: content[2].bgImg,
                title: content[2].title,
                des: content[2].des
            });
        } else if (this.state.img === 2) {
            this.setState({
                img: 3,
                bgImg: content[3].bgImg,
                title: content[3].title,
                des: content[3].des
            });
        } else {
            this.setState({
                img: 1,
                bgImg: content[1].bgImg,
                title: content[1].title,
                des: content[1].des
            });
        }
    }

    handleNextSlide = () => {
        clearInterval(this.state.intervalId);
        this.toggleSlider();
        let newIntervalID = setInterval(this.toggleSlider, 8000);
        this.setState({ intervalId: newIntervalID });
    }

    render() {
        const { bgImg, title, des } = this.state;
        const activeOne = this.state.img === 1 ? "active" : "";
        const activeTwo = this.state.img === 2 ? "active" : "";
        const activeThree = this.state.img === 3 ? "active" : "";
        return (
            <div className="welcome-slider">
                <div className="ws-item" style={{ backgroundImage: `url("${bgImg}")` }}>
                    <div className="ws-text">
                        <h2 className="ws-title">{title}</h2>
                        <p className="ws-des">{des}</p>
                    </div>
                </div>
                <div className="ws-nav">
                    {/* <div className="ws-prev">
                        &lt;&lt;&lt;
                    </div> */}
                    <div className="ws-next">
                        <NextButton onClick={() => this.handleNextSlide()} />
                    </div>
                </div>
                <div className="ws-dots">
                    <div className={`ws-dot ${activeOne}`}>
                        01<span>.</span>
                    </div>
                    <div className={`ws-dot ${activeTwo}`}>
                        02<span>.</span>
                    </div>
                    <div className={`ws-dot ${activeThree}`}>
                        03<span>.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeSlider;
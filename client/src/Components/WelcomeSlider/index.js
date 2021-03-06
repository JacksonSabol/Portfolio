import React, { Component } from "react";
import './index.css';
import sliderOne from '../../img/slider/1.jpg';
import sliderTwo from '../../img/slider/2.jpg';
import sliderThree from '../../img/slider/3.jpg';
import { NextButton } from "../Button";
import PreloadImages from "../PreloadImages";

const content = {
    1: {
        bgImg: sliderOne,
        title: "Full Stack Developer",
        des: "Specializing in JavaScript on the Front End and the Back End"
    },
    2: {
        bgImg: sliderTwo,
        title: "Front End",
        des: "HTML5 | CSS3 | SASS | JavaScript ES6+ | React.js | Responsive Design"
    },
    3: {
        bgImg: sliderThree,
        title: "Back End",
        des: "Docker | AWS | Node.js | Express.js | SQL | NoSQL | NPM | Command Line"
    }
};
class WelcomeSlider extends Component {
    state = {
        intervalId: 0,
        img: 0,
        activeImgIndex: 0
    };

    componentDidMount = () => {
        // this.preloadImages();
        let intervalId = setInterval(this.toggleSlider, 8000);
        this.setState({
            intervalId: intervalId,
            img: 1
        });
    };

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    };

    preloadImages = () => {
        [sliderOne, sliderTwo, sliderThree].map(src => {
            let image = new Image()
            image.src = src
            return image
        });
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

    handleNextSlide = () => {
        clearInterval(this.state.intervalId);
        this.toggleSlider();
        let newIntervalID = setInterval(this.toggleSlider, 8000);
        this.setState({ intervalId: newIntervalID });
    }

    render() {
        const activeOne = this.state.img === 1 ? " active" : "";
        const activeTwo = this.state.img === 2 ? " active" : "";
        const activeThree = this.state.img === 3 ? " active" : "";
        const animatedOne = this.state.img === 1 ? " fade" : "";
        const animatedTwo = this.state.img === 2 ? " fade" : "";
        const animatedThree = this.state.img === 3 ? " fade" : "";
        const slideOne = this.state.img === 1 ? " slide" : "";
        const slideTwo = this.state.img === 2 ? " slide" : "";
        const slideThree = this.state.img === 3 ? " slide" : "";
        return (
            <div className="welcome-slider">
                <PreloadImages
                    images={[sliderOne, sliderTwo, sliderThree]}
                />
                <div className={`ws-item${animatedOne}`} style={{ backgroundImage: `url("${content[1].bgImg}")` }}>
                    <div className="ws-text">
                        <h2 className={`ws-title${slideOne}`} style={{display: "inline-block", width: "60%"}}>{content[1].title}</h2>
                        <p className={`ws-des${slideOne}`}>{content[1].des}</p>
                    </div>
                </div>
                <div className={`ws-item${animatedTwo}`} style={{ backgroundImage: `url("${content[2].bgImg}")` }}>
                    <div className="ws-text">
                        <h2 className={`ws-title${slideTwo}`}>{content[2].title}</h2>
                        <p className={`ws-des${slideTwo}`}>{content[2].des}</p>
                    </div>
                </div>
                <div className={`ws-item${animatedThree}`} style={{ backgroundImage: `url("${content[3].bgImg}")` }}>
                    <div className="ws-text">
                        <h2 className={`ws-title${slideThree}`}>{content[3].title}</h2>
                        <p className={`ws-des${slideThree}`}>{content[3].des}</p>
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
                    <div className={`ws-dot${activeOne}`}>
                        01<span>.</span>
                    </div>
                    <div className={`ws-dot${activeTwo}`}>
                        02<span>.</span>
                    </div>
                    <div className={`ws-dot${activeThree}`}>
                        03<span>.</span>
                    </div>
                </div>
                {/* <div style={{ 'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden' }}>
                    {[sliderOne, sliderTwo, sliderThree].map((preloadImage) => {
                        return (
                            <img src={preloadImage} alt="preloading img" key={`${preloadImage}`} />
                        );
                    })}
                </div> */}
            </div>
        );
    }
}

export default WelcomeSlider;
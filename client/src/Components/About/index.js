import React from 'react';
import './index.css';
import { SiteButton } from '../Button';
import IntroImg from '../../img/intro-img.jpg';

export function About(props) {
    return (
        <div>
            <article className="intro-text">
                <img src={IntroImg} className="intro-img" alt="Hiking in Alaska" />
                <span className="sp-sub-title">Jackson Sabol</span>
                <h3 className="sp-title">Full Stack Developer</h3>
                <p>My name is Jackson Sabol, and I am a Full-Stack Web Developer based in the San Francisco Bay Area. I primarily focus on front-end development, but I'm comfortable with back-end work as well, using technologies and libraries like React, Node, Express, MySQL, and MongoDB. Before I became a web developer, I worked as a conservation biologist for various consulting firms across the western United States. Over the years, I’ve been responsible for collecting, analyzing, and presenting large amounts of invaluable data on the progress of restoration projects. The management of biological data is what got me interested in programming!</p>
                <SiteButton
                    onClick={() => props.handlePageScroll("services")}
                >
                    Read More
                </SiteButton>
            </article>
            {/* <aside className="intro-aside">
                <figure className="intro-figure">
                    
                </figure>
            </aside> */}
        </div>
    );
}
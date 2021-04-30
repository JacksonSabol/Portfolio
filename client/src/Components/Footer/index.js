import React from 'react';
import linkedinIcon from '../../img/icons/linkedin.svg';
import githubIcon from '../../img/icons/github.svg';
import dockerIcon from '../../img/icons/docker-white.png';
import './index.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <h2>Let’s Connect!</h2>
            <div className="social">
                <a href="https://www.linkedin.com/in/jacksonsabol/" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={linkedinIcon} alt="LinkedIn" /></a>
                <a href="https://github.com/JacksonSabol" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={githubIcon} alt="GitHub" /></a>
                <a href="https://hub.docker.com/u/jacksonsabol" target="_blank" rel="noopener noreferrer" className="social-icon"><img src={dockerIcon} alt="Docker" /></a>
            </div>
        </div>
    );
}
export default Footer;
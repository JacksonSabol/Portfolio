import React from 'react';
import './index.css';
import Modal from "../../Components/Modal";
import useModal from '../../Components/Modal/useModal';
import { PortfolioItem } from '../PortfolioItem';
import portfolioPicOne from '../../img/portfolio/1.jpg';
import portfolioPicTwo from '../../img/portfolio/2.jpg';
import portfolioPicThree from '../../img/portfolio/3.jpg';
import portfolioPicFour from '../../img/portfolio/4.jpg';
import portfolioPicFive from '../../img/portfolio/5.jpg';
import portfolioPicSix from '../../img/portfolio/6.jpg';

const portfolioItems = [
    {
        key: 0,
        modalId: 1,
        bgImg: portfolioPicOne,
        projectName: "TailMe",
        projectCategory: "Portal Web Application"
    },
    {
        key: 1,
        modalId: 2,
        bgImg: portfolioPicTwo,
        projectName: "React Concentration Game",
        projectCategory: "Animated Web Application"
    },
    {
        key: 2,
        modalId: 3,
        bgImg: portfolioPicThree,
        projectName: "Sparrow Tasker",
        projectCategory: "Portal Web Application"
    },
    {
        key: 3,
        modalId: 4,
        bgImg: portfolioPicFour,
        projectName: "Tech News Scraper",
        projectCategory: "Portal Web Application"
    },
    {
        key: 4,
        modalId: 5,
        bgImg: portfolioPicFive,
        projectName: "Google Books Search",
        projectCategory: "Dynamic Web Application"
    },
    {
        key: 5,
        modalId: 6,
        bgImg: portfolioPicSix,
        projectName: "Amy's Eat the Burger",
        projectCategory: "Dynamic Web Application"
    }
];

const Portfolio = () => {
    const { isShowing, toggle } = useModal();
    return (
        <div className="portfolio-warp">
            {portfolioItems.map(item => (
                <PortfolioItem key={item.key}
                    modalId={item.modalId}
                    bgImg={item.bgImg}
                    projectName={item.projectName}
                    projectCategory={item.projectCategory}
                />
            ))}
            <button className="button-default" onClick={toggle}>Show Modal</button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );

}

export default Portfolio;

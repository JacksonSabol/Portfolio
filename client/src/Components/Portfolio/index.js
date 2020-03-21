import React from 'react';
import './index.css';
import Modal from "../../Components/Modal";
import useModal from '../../Components/Modal/useModal';
import { PortfolioItem } from '../PortfolioItem';
import portfolioPicOne from '../../img/portfolio/ATSPrototypeOneIcon.png';
import portfolioThumbOne from '../../img/portfolio/ATSPrototypeOneFrame.png';
import portfolioPicTwo from '../../img/portfolio/WompsAndChompsIconTwo.png';
import portfolioThumbTwo from '../../img/portfolio/WompsAndChompsFrame.png';
import portfolioPicThree from '../../img/portfolio/ATSPrototypeThreeIcon.png';
import portfolioThumbThree from '../../img/portfolio/ATSPrototypeThreeFrame.png';
import portfolioPicFour from '../../img/portfolio/ScraperAppIcon.png';
import portfolioThumbFour from '../../img/portfolio/ScraperAppFrame.png';
import portfolioPicFive from '../../img/portfolio/ReactConcentrationGameIcon.png';
import portfolioThumbFive from '../../img/portfolio/ReactConcentrationGameFrame.png';
import portfolioPicSix from '../../img/portfolio/TailMeIcon.png';
import portfolioThumbSix from '../../img/portfolio/TailMeFrame.png';

const portfolioItems = [
    {
        key: 0,
        modalId: 1,
        bgImg: portfolioPicOne,
        thumb: portfolioThumbOne,
        projectName: "ATS Prototype One",
        projectCategory: "Website Redesign"
    },
    {
        key: 1,
        modalId: 2,
        bgImg: portfolioPicTwo,
        thumb: portfolioThumbTwo,
        projectName: "Womps and Chomps",
        projectCategory: "Social Media Application"
    },
    {
        key: 2,
        modalId: 3,
        bgImg: portfolioPicThree,
        thumb: portfolioThumbThree,
        projectName: "ATS Prototype Two",
        projectCategory: "Website Redesign"
    },
    {
        key: 3,
        modalId: 4,
        bgImg: portfolioPicFour,
        thumb: portfolioThumbFour,
        projectName: "Tech News Scraper",
        projectCategory: "Forum Web Application"
    },
    {
        key: 4,
        modalId: 5,
        bgImg: portfolioPicFive,
        thumb: portfolioThumbFive,
        projectName: "React Concentration Game",
        projectCategory: "Dynamic Web Application"
    },
    {
        key: 5,
        modalId: 6,
        bgImg: portfolioPicSix,
        thumb: portfolioThumbSix,
        projectName: "Tail Me",
        projectCategory: "SaaS Web Application"
    }
];

const Portfolio = () => {
    const { isShowing, handleSelect, handleClose, currentItem } = useModal();
    return (
        <div className="portfolio-warp">
            {portfolioItems.map(item => (
                <PortfolioItem key={item.key}
                    item={item}
                    handleSelect={handleSelect}
                    modalId={item.modalId}
                    bgImg={item.bgImg}
                    projectName={item.projectName}
                    projectCategory={item.projectCategory}
                />
            ))}
            {/* <button className="button-default" onClick={handle}>Show Modal</button> */}
            <Modal
                isShowing={isShowing}
                currentItem={currentItem}
                handleClose={handleClose}
            />
        </div>
    );

}

export default Portfolio;

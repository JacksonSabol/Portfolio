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
import portfolioPicSeven from '../../img/portfolio/SparrowTaskerModalIcon.png';
import portfolioThumbSeven from '../../img/portfolio/SparrowTaskerFrame.png';
import portfolioPicEight from '../../img/portfolio/GoogleBooksSearchIcon.png';
import portfolioThumbEight from '../../img/portfolio/GoogleBooksSearchFrame.png';
import portfolioPicNine from '../../img/portfolio/EatTheBurgerIcon.png';
import portfolioThumbNine from '../../img/portfolio/EatTheBurgerFrame.png';
import portfolioPicTen from '../../img/portfolio/WhiskersWhimsiesIcon.png';
import portfolioThumbTen from '../../img/portfolio/WhiskersWhimsiesFrame.png';
import portfolioPicEleven from '../../img/portfolio/TrainSchedulerIcon.png';
import portfolioThumbEleven from '../../img/portfolio/TrainSchedulerFrame.png';
import portfolioPicTwelve from '../../img/portfolio/LIRINodeIcon.png';
import portfolioThumbTwelve from '../../img/portfolio/LIRINodeFrame.png';

const portfolioItems = [
    {
        key: 0,
        bgImg: portfolioPicOne,
        thumb: portfolioThumbOne,
        projectName: "ATS Prototype One",
        projectCategory: "Website Redesign",
        projectDescription: "A prototype website I presented to showcase my design capabilities while bidding on the re-design of an environmental consulting firm's website."
    },
    {
        key: 1,
        bgImg: portfolioPicTwo,
        thumb: portfolioThumbTwo,
        projectName: "Womps and Chomps",
        projectCategory: "Social Media Application",
        projectDescription: "This project is an in-progress application for discovering, saving, and sharing electronic music events in the San Francisco Bay area. The main focus of the project is to securely manage login sessions, simulate a relational database, and implement React hooks using the MERN stack. The project follows OWASP session management guidelines to prevent various types of security vulnerabilities, including cross-site scripting (XSS) attacks, cross-site request forgery (CSRF) attacks, brute-force attacks, and NoSQL injection attacks.",
        githubLink: "https://github.com/JacksonSabol/Womps-And-Chomps",
        deployedLink: "https://womp-and-chomp.herokuapp.com/"
    },
    {
        key: 2,
        bgImg: portfolioPicThree,
        thumb: portfolioThumbThree,
        projectName: "ATS Prototype Two",
        projectCategory: "Website Redesign",
        projectDescription: "A prototype website I presented to showcase my design capabilities while bidding on the re-design of an environmental consulting firm's website."
    },
    {
        key: 3,
        bgImg: portfolioPicFour,
        thumb: portfolioThumbFour,
        projectName: "Tech News Scraper",
        projectCategory: "Forum Web Application",
        projectDescription: "A web application that scrapes a popular news website for relevant articles, allowing users to view the articles, comment on the articles, and save them to a profile page if they like them.",
        githubLink: "https://github.com/JacksonSabol/Scraper-App",
        deployedLink: "https://news-scraper-js.herokuapp.com/"
    },
    {
        key: 4,
        bgImg: portfolioPicFive,
        thumb: portfolioThumbFive,
        projectName: "React Concentration Game",
        projectCategory: "Game",
        projectDescription: "This project is a game built with React.js to help visually demonstrate the mental process of keeping track of React components. It's similar to a standard card game of Concentration, except the cards are face-up React Components that shuffle!",
        githubLink: "https://github.com/JacksonSabol/React-Concentration-Game",
        deployedLink: "https://jacksonsabol.github.io/React-Concentration-Game/"
    },
    {
        key: 5,
        bgImg: portfolioPicSix,
        thumb: portfolioThumbSix,
        projectName: "Tail Me",
        projectCategory: "SaaS Web Application",
        projectDescription: "©TailME is an application for professional dog walkers who are dedicated to providing a premium experience to their clients. TailME is designed to minimize the challenges of running a small, dog-walking business by providing tools to intake chosen users, interact with them more meaningfully, and manage accounts and scheduling with greater efficiency.",
        githubLink: "https://github.com/JacksonSabol/Tail-Me-App",
        deployedLink: "https://tail-me.herokuapp.com/"
    },
    {
        key: 6,
        bgImg: portfolioPicSeven,
        thumb: portfolioThumbSeven,
        projectName: "Sparrow Tasker",
        projectCategory: "SaaS Web Application",
        projectDescription: "Sparrow is a task management system that allows a user to create a list of their 'To Dos'. Sparrow then allows a user to choose to either complete their own task or post it to the global claimboard which allows another person (a Sparrow) to claim the task and complete it on the user's behalf. This allows someone to, in a sense, buy time for themselves to complete other tasks or to spend time with loved ones.",
        githubLink: "https://github.com/JacksonSabol/Sparrow-Tasker",
        deployedLink: "https://sparrow-tasker.herokuapp.com/"
    },
    {
        key: 7,
        bgImg: portfolioPicEight,
        thumb: portfolioThumbEight,
        projectName: "Google Book Search",
        projectCategory: "Forum Web Application",
        projectDescription: "This collaborative project is a web application that provides an aesthetically-pleasing User Interface to search for books and add them to a community list. This community list provides an opportunity to be exposed to books you may not have thought to read before, as well as allow you to expose others to your interests!",
        githubLink: "https://github.com/JacksonSabol/Google-Books-Search",
        deployedLink: "https://google-books-search-react.herokuapp.com/"
    },
    {
        key: 8,
        bgImg: portfolioPicNine,
        thumb: portfolioThumbNine,
        projectName: "Eat the Burger",
        projectCategory: "Interactive Web Application",
        projectDescription: "A burger making and eating application based (loosely) on Amy's© in Petaluma, CA",
        githubLink: "https://github.com/JacksonSabol/Eat-The-Burger",
        deployedLink: "https://eat-the-burger-express.herokuapp.com/"
    },
    {
        key: 9,
        bgImg: portfolioPicTen,
        thumb: portfolioThumbTen,
        projectName: "Whisker's Whimsies",
        projectCategory: "Command Line Interface",
        projectDescription: "Whisker's Whimsies is an Amazon-like, Command Line Interface (CLI) storefront for cat products using a SQL database that has three different views: customer view, manager view, and supervisor view. Each view adds progressively higher levels of editability to the inventory of the store. This application is a back-end only application, run through the command line.",
        githubLink: "https://github.com/JacksonSabol/Whiskers-Whimsies"
    },
    {
        key: 10,
        bgImg: portfolioPicEleven,
        thumb: portfolioThumbEleven,
        projectName: "Caltrain Trip Planner",
        projectCategory: "Interactive Web Application",
        projectDescription: "An implementation of Google Firebase to track a local, Bay Area train. Fill out the four required fields containing the train's information: Train Name; Destination; First Train Time; and Frequency. You will be alerted if the train information in the input fields needs modification before submittal. Click the Submit button to add a train line once all the fields are complete. Sit back, relax, and wait for your train to 'arrive'!",
        githubLink: "https://github.com/JacksonSabol/Train-Scheduler",
        deployedLink: "https://jacksonsabol.github.io/Train-Scheduler/"
    },
    {
        key: 11,
        bgImg: portfolioPicTwelve,
        thumb: portfolioThumbTwelve,
        projectName: "LIRI: Language Interpretation and Recognition Interface",
        projectCategory: "Command Line Interface",
        projectDescription: "An implementation of Node.js to mimic Apple's Siri. This application is a back-end only application, run through the command line.",
        githubLink: "https://github.com/JacksonSabol/LIRI-Node-App"
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
                    bgImg={item.bgImg}
                    projectName={item.projectName}
                    projectCategory={item.projectCategory}
                />
            ))}
            <Modal
                isShowing={isShowing}
                currentItem={currentItem}
                handleClose={handleClose}
            />
        </div>
    );

}

export default Portfolio;

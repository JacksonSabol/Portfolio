import React, { useRef, useEffect } from "react";
import { useDetectOutsideClick } from './useDetectOutsideClick';
import NavbarHamburger from './hamburger';
import { NavbarItem, SabolDesigns } from '../Button';
import logoImg from '../../img/WhiteSabol.png';
import './index.css';

const Navbar = (props) => {
  const navRef = useRef(null);
  // Get state methods and set up detection of click outside navbar
  const [toggled, setToggled] = useDetectOutsideClick(navRef, false);

  // Close the navbar dropdown every time the user clicks on a section option
  useEffect(() => {
    setToggled(false);
  }, [props.currentSection, setToggled]);

  const iconToggled = toggled ? "toggled" : "",
    navbarToggled = toggled ? "open" : "";

  return (
    <nav ref={navRef} className={`navbar ${props.class}`} id="scroll-toggler">
      <NavbarHamburger toggled={iconToggled} onClick={() => setToggled(!toggled)} />
        <img src={logoImg} className="logo" alt="Sabol Designs" />
        <SabolDesigns
          onClick={() => props.handlePageScroll("top")}
        >
          Jackson Sabol
          </SabolDesigns>
        <div className={`navbar-nav ${navbarToggled}`}>
          <NavbarItem
            active={props.currentSection === 'about' ? ' active' : ''}
            onClick={() => props.handlePageScroll('about')}
          >
            About Me
          </NavbarItem>
          <NavbarItem
            active={props.currentSection === 'portfolio' ? ' active' : ''}
            onClick={() => props.handlePageScroll('portfolio')}
          >
            Portfolio
          </NavbarItem>
          <NavbarItem
            active={props.currentSection === 'services' ? ' active' : ''}
            onClick={() => props.handlePageScroll('services')}
          >
            Services
          </NavbarItem>
          <NavbarItem
            active={props.currentSection === 'contact' ? ' active' : ''}
            onClick={() => props.handlePageScroll('contact')}
          >
            Contact
          </NavbarItem>
        </div>
    </nav>
  );
};

export default Navbar;

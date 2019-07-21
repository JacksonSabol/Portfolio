import React, { Component } from "react";
import './index.css';
import { NavbarItem } from '../Button';
import logoImg from '../../img/WhiteSabol.png';

class Navbar extends Component {
  // Set the initial state value for responsive hamburger menu
  state = {
    toggled: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      toggled: !state.toggled
    }));
  }

  render() {
    const iconToggled = this.state.toggled ? "toggled" : "";
    const navbarToggled = this.state.toggled ? "open" : "";
    return (
      <nav className="navbar">
        {/* <p className="welcome-message">Welcome, {this.props.username}!</p> */}
        <div className="navbar-hamburger">
          <div className={`navbar-toggle ${iconToggled}`}>
            <button type="button" className="navbar-toggler" onClick={() => this.toggleMenu()}>
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
        </div>
        <img src={logoImg} className="logo" alt="Sabol Designs" />
        <a href="/" className="home-logo">{`Sabol Designs`}</a>
        <div className={`navbar-nav ${navbarToggled}`}>
          <NavbarItem
            onClick={() => this.props.handlePageScroll("about")}
          >
            About Me
          </NavbarItem>
          <NavbarItem
            onClick={() => this.props.handlePageScroll("portfolio")}
          >
            Portfolio
          </NavbarItem>
          <NavbarItem
            onClick={() => this.props.handlePageScroll("services")}
          >
            Services
          </NavbarItem>
          <NavbarItem
            onClick={() => this.props.handlePageScroll("contact")}
          >
            Contact
          </NavbarItem>
        </div>
      </nav>
    );
  }
}

export default Navbar;

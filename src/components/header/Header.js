import React from "react";
import logo from "../../images/birdlogo.svg";
import search from "../../images/search.svg";
import hamburger from "../../images/hamburger.svg";
import close from "../../images/close.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Section,
  Logo,
  Navigation,
  Item,
  NavLink,
  Button,
  Hamburger,
} from "./styledHeader";

export default function Header({
  zipcode,
  environment,
  updatePlayer,
  playerView,
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLogin() {
    alert("Login features not enabled in Beta.");
  }
  return (
    <Section playerView={playerView}>
      <Link to="/">
        <Logo src={logo} className="header__logo" alt="Bird Company" />
      </Link>
      {/* <Link to="/" className="header__logo">
        A
      </Link> */}
      <Navigation
        $isOpen={menuOpen}
        className={`header__nav ${menuOpen ? "header__nav_open" : ""}`}
      >
        <Item className="header__nav-item">
          <NavLink to="/#about" className="header__link" href="#about">
            About us
          </NavLink>
        </Item>
        <Item className="header__nav-item">
          <NavLink
            to="/player"
            onClick={() => {
              updatePlayer(zipcode, environment);
            }}
            className="header__link"
            href="#destinations"
          >
            Player
          </NavLink>
        </Item>
        <Item hide className="header__nav-item header__nav-item_mag">
          <img className="header__link" src={search} alt="Magnifying glass" />
        </Item>
      </Navigation>
      <Hamburger
        className="header__hamburger"
        onClick={toggleMenu}
        src={menuOpen ? close : hamburger}
        alt="Magnifying glass"
      />
      <Button
        type="button"
        onClick={handleLogin}
        to="/"
        className="header__button"
      >
        Login
      </Button>
    </Section>
  );
}

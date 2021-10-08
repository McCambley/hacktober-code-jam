import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import hamburger from "../../images/hamburger.svg";
import close from "../../images/close.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header({ zipcode, environment, updatePlayer }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Bird Company" />
      </Link>
      <ul className={`header__nav ${menuOpen ? "header__nav_open" : ""}`}>
        <li className="header__nav-item">
          <HashLink to="/#about" className="header__link" href="#about">
            About us
          </HashLink>
        </li>
        <li className="header__nav-item">
          <Link
            to="/player"
            onClick={() => {
              updatePlayer(zipcode, environment);
            }}
            className="header__link"
            href="#destinations"
          >
            Player
          </Link>
        </li>
        <li className="header__nav-item header__nav-item_mag">
          <img className="header__link" src={search} alt="Magnifying glass" />
        </li>
      </ul>
      <img
        className="header__hamburger"
        onClick={toggleMenu}
        src={menuOpen ? close : hamburger}
        alt="Magnifying glass"
      />
      <Link to="/" className="header__button">
        Login
      </Link>
    </div>
  );
}

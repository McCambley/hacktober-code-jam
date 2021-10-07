import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Bird Company" />
      </Link>
      <ul className="header__nav">
        <li className="header__nav-item">
          <a className="header__link" href="#about">
            About us
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__link" href="#destinations">
            Destinations
          </a>
        </li>
        <li className="header__nav-item">
          <img className="header__link" src={search} alt="Magnifying glass" />
        </li>
      </ul>
      <Link to="/" className="header__button">
        Login
      </Link>
    </div>
  );
}

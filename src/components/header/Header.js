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
  Mag,
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
        <Logo src={logo} />
      </Link>

      <Navigation $isOpen={menuOpen}>
        <Item>
          <NavLink to="/#about" href="#about">
            About us
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/player"
            onClick={() => {
              updatePlayer(zipcode, environment);
            }}
          >
            Player
          </NavLink>
        </Item>
        <Item hide>
          <Mag src={search} alt="Magnifying glass" />
        </Item>
      </Navigation>
      <Hamburger
        onClick={toggleMenu}
        src={menuOpen ? close : hamburger}
        alt="Magnifying glass"
      />
      <Button type="button" onClick={handleLogin} to="/">
        Login
      </Button>
    </Section>
  );
}

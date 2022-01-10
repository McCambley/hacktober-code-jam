import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/birdlogo-dark.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import {
  Container,
  Contact,
  Logo,
  LinksContainer,
  FooterLink,
  SocialIcon,
  Copyright,
} from "./styledFooter";

export default function Footer() {
  return (
    <Container>
      <Contact>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <LinksContainer>
          <FooterLink to="/">Privacy Policy</FooterLink>
          <FooterLink to="/">Contact Us</FooterLink>
        </LinksContainer>
        <div>
          <SocialIcon
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/team_ebird/"
            image={instagram}
          />
          <SocialIcon
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/ebird/"
            image={facebook}
          />
          <SocialIcon
            target="_blank"
            rel="noopener"
            href="https://twitter.com/Team_eBird?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            image={twitter}
          />
        </div>
      </Contact>
      <Copyright>© Aviary. All rights reserved.</Copyright>
    </Container>
  );
}

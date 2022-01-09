import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/birdlogo-dark.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";

const Container = styled.section``;
const Contact = styled.div`
  background-color: rgba(199, 210, 159, 0.3);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 64px 64px;
  box-sizing: border-box;
`;
const Copyright = styled.div`
  background-color: #1b271e;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 64px 20px;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
`;
const Logo = styled.img`
  margin-bottom: 50px;
  width: 64px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
const LinksContainer = styled.div`
  margin-bottom: 50px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const FooterLink = styled(Link)`
  font-size: 24px;
  line-height: 24px;
  margin: 0;
  margin-right: 32px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.15s ease;

  &:last-of-type {
    margin-right: 0px;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
`;

const SocialIcon = styled.a`
  margin-right: 44px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 0.7;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

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

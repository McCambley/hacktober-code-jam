import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer``;

export const Contact = styled.div`
  background-color: rgba(199, 210, 159, 0.3);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 64px 64px;
  box-sizing: border-box;
`;
export const Copyright = styled.div`
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
export const Logo = styled.img`
  margin-bottom: 50px;
  width: 64px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const LinksContainer = styled.div`
  margin-bottom: 50px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const FooterLink = styled(Link)`
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

export const SocialIcon = styled.a`
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

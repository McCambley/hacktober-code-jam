import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 164px;
  color: #333333;
  background-color: rgba(51, 51, 51, 0.2);
  /* background: rgba(255, 255, 255, 0.1); */
  z-index: 5;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 8px rgba(51, 51, 51, 0.7);

  @media (max-width: 1024px) {
    padding: 8px 42px;
  }

  @media (max-width: 768px) {
    height: 76px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 48px;
  transition: opacity 0.15s ease;
  margin-right: 76px;
  filter: drop-shadow(-8px 0px 0px rgba(51, 51, 51, 0.8));

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1024px) {
    margin-right: 0px;
    width: 60px;
  }

  @media (max-width: 768px) {
    width: 36px;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  overflow: hidden;
  transition: opacity 0.3s ease;

  @media (max-width: 1024px) {
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    justify-self: flex-end;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  margin-right: 42px;

  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 1024px) {
    display: ${(props) => (props.hide ? "none" : "block")};
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const NavLink = styled(HashLink)`
  text-decoration: none;
  color: #fff;
  transition: opacity 0.15s ease;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 18px;
    text-align: center;
    width: 100%;
  }
`;

export const Button = styled.button`
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 56px;
  background: #fff;
  color: #9e9e9e;
  border: 2px solid #9e9e9e;
  border-radius: 8px;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  transition: color 0.15s ease, border 0.15s ease;

  &:hover {
    color: #b8b8b8;
    border: 2px solid #b8b8b8;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
  }
`;

export const Hamburger = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

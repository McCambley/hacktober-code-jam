import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import hero from "../../images/hero.jpeg";

export const Section = styled.section`
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  height: 600px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 164px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 32px 40px;
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.7);
  /* background-color: rgba(51, 51, 51, 0.2); */
  box-shadow: 0 4px 8px rgba(51, 51, 51, 0.2);

  box-sizing: border-box;
  border-radius: 24px;
  backdrop-filter: blur(2px);
  max-width: 100%;
  width: 100%;
  height: 100%;
  @media (max-width: 1440px) {
    padding: 36px 44px;
  }
`;

export const Title = styled.h1`
  /* font-family: "Playfair Display", serif; */
  font-family: "Italianno", cursive;
  color: #333;
  /* text-transform: uppercase; */
  margin: 0;
  font-size: 96px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 24px;
  font-weight: 400;
  @media (max-width: 1440px) {
    font-size: 64px;
    margin-bottom: 12px;
    line-height: 60px;
  }
`;

export const Subtitle = styled(Link)`
  margin: 0;
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  text-decoration: none;
  color: #333;
  /* color: #fff; */
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Arrow = styled.a`
  background-image: url(${arrow});
  background-size: contain;
  background-position: center;
  height: 28px;
  width: 28px;
  transform: rotate(90deg);
`;

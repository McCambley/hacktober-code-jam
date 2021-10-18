import React from "react";
import "./Hero.css";
import styled from "styled-components";
import hero from "../../images/hero.jpeg";
import { Link } from "react-router-dom";

const Section = styled.section`
  background-image: url(${(props) => props.background || hero});
  background-size: cover;
  background-position: center;
  height: 600px;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.32);
  /* background-color: rgba(51, 51, 51, 0.2); */
  box-shadow: 0 4px 8px rgba(51, 51, 51, 0.2);

  box-sizing: border-box;
  border-radius: 24px;
  backdrop-filter: blur(10px);
  max-width: 100%;
  @media (max-width: 1440px) {
    padding: 36px 44px;
  }
`;

const Title = styled.h1`
  /* font-family: "Playfair Display", serif; */
  font-family: "Italianno", cursive;
  color: #333;
  /* text-transform: uppercase; */
  margin: 0;
  font-size: 80px;
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

const Subtitle = styled(Link)`
  margin: 0;
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

export default function Hero({ zipcode, environment, updatePlayer }) {
  return (
    <Section className="hero" background={hero}>
      <TextContainer>
        <Title>Aviary</Title>
        <Subtitle
          to="/player"
          onClick={() => {
            updatePlayer(zipcode, environment);
          }}
        >
          Bring the great outdoors to you
        </Subtitle>
      </TextContainer>
    </Section>
  );
}

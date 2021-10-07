import React from "react";
import "./Hero.css";
import styled from "styled-components";
import hero from "../../images/hero.png";

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
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(255, 255, 255, 0.69);
  box-sizing: border-box;
  border-radius: 24px;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  margin: 0;
  font-size: 64px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
`;

export default function Hero() {
  return (
    <Section className="hero" background={hero}>
      <TextContainer>
        <Title>Birdsongs</Title>
        <Subtitle>Bring the great outdoors to you.</Subtitle>
      </TextContainer>
    </Section>
  );
}

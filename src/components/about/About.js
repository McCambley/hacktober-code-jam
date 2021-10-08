import React from "react";
import { Link } from "react-router-dom";
// import "./Destinations.css";
import styled from "styled-components";
import bird from "../../images/about.jpeg";

const Section = styled.section`
  padding: 68px 164px;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 70px 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 24px 32px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    grid-row: 1; /* NEW */
  }
`;

const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 50px;
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 60px;
  }
`;
const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 42px;
  font-weight: 400;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
const NewLink = styled(Link)`
  font-size: 24px;
  line-height: 24px;
  color: rgba(116, 116, 116, 1);
  cursor: pointer;
  transition: opacity 0.15s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 44px;
  }
`;

export default function About({ zipcode, environment, updatePlayer }) {
  return (
    <Section id="about">
      <Image src={bird} alt="Bird" />
      <Container>
        <Title>Listen to the birds</Title>
        <Subtitle>
          Experience the sights and sounds of your favorite destinations from
          the comfort of your own home. When you can't travel the globe, bring
          the great outdoors to you.
        </Subtitle>
        <NewLink
          to="/player"
          onClick={() => {
            updatePlayer(zipcode, environment);
          }}
        >
          Try now →
        </NewLink>
      </Container>
    </Section>
  );
}

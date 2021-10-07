import React from "react";
// import "./Destinations.css";
import styled from "styled-components";
import bird from "../../images/about.jpeg";

const Section = styled.section`
  padding: 68px 164px;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 50px;
`;
const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 42px;
  font-weight: 400;
`;
const Link = styled.a`
  font-size: 24px;
  line-height: 24px;
  color: rgba(116, 116, 116, 1);
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function About() {
  return (
    <Section>
      <Image src={bird} alt="Bird" />
      <Container>
        <Title>Listen to the birds</Title>
        <Subtitle>
          Experience the sights and sounds of your favorite destinations from
          the comfort of your own home. When you can't travel the globe, bring
          the great outdoors to you.
        </Subtitle>
        <Link>Read more →</Link>
      </Container>
    </Section>
  );
}

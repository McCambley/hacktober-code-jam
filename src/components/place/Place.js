import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 255px 1fr;
  gap: 16px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1440px) {
    grid-template-columns: 210px 1fr;
  }
`;

const ImageDiv = styled.div`
  cursor: pointer;
  transition: opacity 0.15s ease;
  border-radius: 24px;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  min-height: 180px;
  min-width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

// const Image = styled.img`
//   width: 100%;
// `;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.h3`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.15s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
const Subtitle = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export default function place({
  place,
  description,
  image,
  zip,
  env,
  handlePlaceClick,
}) {
  return (
    <Container>
      <ImageDiv
        onClick={() => handlePlaceClick(zip, env)}
        image={image}
        alt={env}
      />
      <TextWrapper>
        <Title onClick={() => handlePlaceClick(zip, env)}>{place}</Title>
        <Subtitle>{description}</Subtitle>
      </TextWrapper>
    </Container>
  );
}

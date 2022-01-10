import React from "react";
import {
  Container,
  ImageDiv,
  TextWrapper,
  Title,
  Subtitle,
} from "./styledPlace";

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

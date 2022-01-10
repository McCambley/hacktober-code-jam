import React from "react";
import bird from "../../images/about.jpeg";
import {
  Section,
  Image,
  Container,
  Title,
  Subtitle,
  NewLink,
} from "./styledAbout";

export default function About({ zipcode, environment, updatePlayer }) {
  return (
    <Section id="about">
      <Image src={bird} alt="Bird" />
      <Container>
        <Title>Listen to the birds</Title>
        <Subtitle>
          Choose a destination and be transported by a soundscape of beautiful
          songbirds spotted recently in your favorite locations. Aviary uses
          information sourced from ornithologists from around the country to let
          you experience the sights and sounds of the world from the comfort of
          your own home. When you can't travel the globe, we bring the great
          outdoors to you.
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

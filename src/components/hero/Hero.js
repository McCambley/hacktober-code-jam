import React from "react";
import {} from "./styledHero.js";

import {
  Section,
  TextContainer,
  Title,
  Subtitle,
  Arrow,
} from "./styledHero.js";

export default function Hero({ zipcode, environment, updatePlayer }) {
  return (
    <Section className="hero">
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
        <Arrow href="#about" />
      </TextContainer>
    </Section>
  );
}

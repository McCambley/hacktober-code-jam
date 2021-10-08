import React from "react";
import "./Destinations.css";
import styled from "styled-components";
import Form from "../form/Form";
import Place from "../place/Place";
import mountains from "../../images/mountains.jpeg";
import wetlands from "../../images/wetlands.jpeg";
import forests from "../../images/forests.jpeg";
import mapImage from "../../images/map.png";

const placeList = [
  {
    place: "New England",
    description: "Listen to the birdsongs in mountains of New Hampshire",
    image: mountains,
    zip: "03846",
    env: "mountains",
  },
  {
    place: "The Everglades",
    description: "Listen to the birdsongs in the Everglads of Florida",
    image: wetlands,
    zip: "33030",
    env: "everglades",
  },
  {
    place: "Redwood Forest",
    description: "Listen to the birdsongs in the forests of California",
    image: forests,
    zip: "95531",
    env: "forests",
  },
];

const Section = styled.section`
  padding: 0px 164px 90px;
  display: grid;
  gap: 30px 62px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title link"
    "directions form"
    "places map";
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 0 40px 115px;
  }
`;

const Title = styled.h3`
  grid-area: title;

  margin: 0;
  width: 100%;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
`;
const Link = styled.a`
  grid-area: link;
  font-size: 24px;
  line-height: 24px;
  align-self: center;
  justify-self: flex-end;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;
const Directions = styled.p`
  grid-area: directions;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
const FormSection = styled(Form)`
  grid-area: form;
`;
const Places = styled.div`
  grid-area: places;
`;
const Map = styled.div`
  grid-area: map;
  background-image: url(${mapImage});
  background-position: center;
  background-size: cover;
  border-radius: 24px;
  /* min-height: 100%; */
  /* width: 100%; */
`;

export default function Destinations({
  zipcode,
  environment,
  setZipcode,
  setEnvironment,
  handleSubmit,
  isSubmitting,
  updatePlayer,
}) {
  function handlePlaceClick(zip, env) {
    setZipcode(zip);
    setEnvironment(env, () => {
      updatePlayer();
    });
  }

  return (
    <Section id="destinations">
      <Title>Destinations</Title>
      <Link to="/player">All destinations →</Link>
      <Directions>
        Enter your zip-code or choose one of suggested destinations.
      </Directions>
      <FormSection
        displayZip={true}
        zipcode={zipcode}
        environment={environment}
        setZipcode={setZipcode}
        setEnvironment={setEnvironment}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <Places>
        {placeList.map((listedLocation, index) => {
          return (
            <Place
              id={index}
              place={listedLocation.place}
              description={listedLocation.description}
              image={listedLocation.image}
              zip={listedLocation.zip}
              env={listedLocation.env}
              handlePlaceClick={handlePlaceClick}
            />
          );
        })}
      </Places>
      <Map />
    </Section>
  );
}

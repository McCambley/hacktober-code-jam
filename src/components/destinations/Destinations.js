import React from "react";
import "./Destinations.css";
import styled from "styled-components";
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
    place: "New Orleans",
    description: "Listen to the birdsongs in the Everglads of Florida",
    image: wetlands,
    zip: "33030",
    env: "everglades",
  },
  {
    place: "New Orleans",
    description: "Listen to the birdsongs in the forests of California",
    image: forests,
    zip: "95531",
    env: "forests",
  },
];

const Section = styled.section`
  padding: 0px 164px 90px;
  display: grid;
  gap: 30px;
  grid-template-areas:
    "title link"
    "directions form"
    "places map";
  box-sizing: border-box;
`;

const Title = styled.h3`
  grid-area: title;
  background-color: red;
  min-height: 40px;
  margin: 0;
`;
const Link = styled.a`
  grid-area: link;
  background-color: red;
  min-height: 40px;
`;
const Directions = styled.p`
  grid-area: directions;
  background-color: red;
  min-height: 40px;
  margin: 0;
`;
const Form = styled.form`
  grid-area: form;
  background-color: red;
  min-height: 40px;
`;
const Places = styled.div`
  grid-area: places;
  background-color: red;
  min-height: 40px;
`;
const Map = styled.img`
  grid-area: map;
  /* background-color: red; */
  min-height: 40px;
  background-image: url(${mapImage});
  background-position: center;
  background-size: cover;
  border-radius: 24px;
`;

export default function Destinations() {
  return (
    <Section>
      <Title>Destinations</Title>
      <Link>All destinations →</Link>
      <Directions>
        Enter your zip-code or choose one of suggested destinations.
      </Directions>
      <Form>
        <input
          id="zipcode"
          type="text"
          placeholder="119900"
          // value={""}
          minlength="5"
          maxlength="5"
          required
        />
        <label htmlFor="zipcode"> Enter your zipcode here</label>
        <button type="submit">Submit</button>
      </Form>
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
            />
          );
        })}
      </Places>
      <Map />
    </Section>
  );
}

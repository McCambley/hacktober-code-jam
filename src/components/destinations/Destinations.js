import React from "react";
import Place from "../place/Place";
import mountains from "../../images/mountains.jpeg";
import wetlands from "../../images/wetlands.jpeg";
import forests from "../../images/forests.jpeg";
import { useHistory } from "react-router";
import {
  Section,
  Title,
  Link,
  Directions,
  FormSection,
  Places,
  Map,
} from "./styledDestinations";

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
    description: "Listen to the birdsongs in the Everglades of Florida",
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

export default function Destinations({
  zipcode,
  environment,
  setZipcode,
  setEnvironment,
  handleSubmit,
  isSubmitting,
  updatePlayer,
}) {
  const history = useHistory();
  function handlePlaceClick(zip, env) {
    setZipcode(zip);
    setEnvironment(env);
    history.push("/player");
    updatePlayer(zip, env);
  }

  return (
    <Section id="destinations">
      <Title>Destinations</Title>
      <Link to="/player">View more →</Link>
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
              key={index}
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

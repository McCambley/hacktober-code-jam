import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import Hero from "../components/hero/Hero";
import Player from "../components/player/Player";
import About from "../components/about/About";
import Destinations from "../components/destinations/Destinations";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import newOrleans from "../images/background.jpeg";
import api from "../utils/api";
import zipcodes from "zipcodes";
import { shuffles } from "../utils/shuffles";
import { useStateWithCallbackLazy } from "use-state-with-callback";

export default function App() {
  const history = useHistory();
  // form inputs
  const [zipcode, setZipcode] = React.useState("03846");
  const [environment, setEnvironment] = useStateWithCallbackLazy("mountains");

  // fetch results
  const [backgroundImage, setBackgroundImage] = React.useState(newOrleans);
  const [locationName, setLocationName] = React.useState("Jackson, NH");
  const [sources, setSources] = React.useState([]);
  const [birdNames, setBirdNames] = React.useState([]);

  // ux
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    // api
    //   .getBirds(41.127, -73.3591)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.error(err));
    // api
    //   .getSong("Cardinalis cardinalis")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.error(err));
    // api
    //   .getImage("sunset")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.error(err));
  }, []);

  function handleSubmit(evt, z, e) {
    evt.preventDefault();
    updatePlayer(z, e);
  }

  function updatePlayer(z, e) {
    setIsSubmitting(true);
    setSources([]);
    console.log({ z, e });
    const newLocation = zipcodes.lookup(z);
    if (!newLocation) {
      console.log("That's not a place!");
      return;
    }
    const { latitude, longitude, city, state } = newLocation;
    setLocationName(`${city}, ${state}`);
    // look for common birds in that area
    api
      .getBirds(latitude, longitude)
      .then((data) => {
        // console.log(data);
        const firstIndex = Math.floor(Math.random() * 2) + 1;
        const secondIndex = Math.floor(Math.random() * 2) + 1 + firstIndex;
        const thirdIndex = Math.floor(Math.random() * 2) + 1 + secondIndex;
        const fourthIndex = Math.floor(Math.random() * 2) + 1 + thirdIndex;

        setBirdNames([
          data[firstIndex].comName,
          data[secondIndex].comName,
          data[thirdIndex].comName,
          data[fourthIndex].comName,
        ]);

        // console.log(birdNames);

        console.log({
          one: data[firstIndex].sciName,
          two: data[secondIndex].sciName,
          three: data[thirdIndex].sciName,
          four: data[fourthIndex].sciName,
        });

        return [
          api.getSong(data[firstIndex].sciName),
          api.getSong(data[secondIndex].sciName),
          api.getSong(data[thirdIndex].sciName),
          api.getSong(data[fourthIndex].sciName),
        ];
      })
      .then((promises) => {
        Promise.all(promises).then((values) => {
          // console.log(values);
          setSources(values);
          updateBackground(e);
          setIsSubmitting(false);
          history.push("/player");
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error(err);
      });
  }

  function updateBackground(e) {
    api
      .getImage(e)
      .then((res) => {
        // console.log(res.urls.regular);
        return setBackgroundImage(res.urls.regular);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleRandomize() {
    const index = Math.floor(Math.random() * 5);
    const { zipcode, query } = shuffles[index];
    setZipcode(zipcode);
    setEnvironment(query);
    updatePlayer(zipcode, query);
  }

  return (
    <div className="page">
      <Header
        zipcode={zipcode}
        environment={environment}
        updatePlayer={updatePlayer}
      />
      <Switch>
        <Route path="/player">
          <Player
            background={backgroundImage}
            locationName={locationName}
            zipcode={zipcode}
            environment={environment}
            setZipcode={setZipcode}
            setEnvironment={setEnvironment}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            birdNames={birdNames}
            sources={sources}
            handleRandomize={handleRandomize}
            updateBackground={updateBackground}
            updatePlayer={updatePlayer}
          />
        </Route>
        <Route exact path="/">
          <Hero />
          <About
            zipcode={zipcode}
            environment={environment}
            updatePlayer={updatePlayer}
          />
          <Destinations
            zipcode={zipcode}
            environment={environment}
            setZipcode={setZipcode}
            setEnvironment={setEnvironment}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            updatePlayer={updatePlayer}
          />
          <Footer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

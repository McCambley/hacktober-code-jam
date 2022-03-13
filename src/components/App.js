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
import { places } from "../utils/shuffles";
import { useStateWithCallbackLazy } from "use-state-with-callback";

export default function App() {
  const history = useHistory();
  // form inputs
  const [zipcode, setZipcode] = React.useState("03846");
  const [environment, setEnvironment] = useStateWithCallbackLazy("mountains");

  // fetch results
  const [backgroundImage, setBackgroundImage] = React.useState({
    full: newOrleans,
    regular: newOrleans,
    small: newOrleans,
  });
  const [locationName, setLocationName] = React.useState("Jackson, NH");
  const [sources, setSources] = React.useState([]);
  const [birdNames, setBirdNames] = React.useState([]);

  // ux
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  function handleSubmit(evt, z, e) {
    evt.preventDefault();
    updatePlayer(z, e);
  }

  function handleCurrentLocation() {
    history.push("/player");
    setIsSubmitting(true);
    setSources([]);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        // Success
        (location) => {
          const { latitude, longitude } = location.coords;
          const placeIndex = Math.floor(Math.random() * (places.length - 1));
          const query = places[placeIndex];
          setEnvironment(query);
          updatePlaceName(latitude, longitude);
          getBirds(latitude, longitude, query);
          return;
        },
        // Failed
        (error) => {
          setIsSubmitting(false);
          console.log(error);
        }
      );
    }
  }

  function updatePlaceName(latitude, longitude) {
    return api
      .getPlace(latitude, longitude)
      .then((response) => {
        setZipcode(response.address.postcode);
        setLocationName(
          `${response.address.village}, ${response.address.state}`
        );
      })
      .catch((error) => {
        setLocationName(`Lat: ${latitude} | Long: ${longitude}`);
        console.error(error);
      });
  }

  function updatePlayer(z, e) {
    setIsSubmitting(true);
    setSources([]);
    const newLocation = zipcodes.lookup(z);
    if (!newLocation) {
      alert(`Please choose a valid zipcode`);
      setIsSubmitting(false);
      return;
    }
    const { latitude, longitude, city, state } = newLocation;
    setLocationName(`${city}, ${state}`);
    // look for common birds in that area
    return getBirds(latitude, longitude, e);
  }

  function getBirds(latitude, longitude, environment) {
    api
      .getBirds(latitude, longitude)
      .then((data) => {
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

        return [
          api.getSong(data[firstIndex].sciName),
          api.getSong(data[secondIndex].sciName),
          api.getSong(data[thirdIndex].sciName),
          api.getSong(data[fourthIndex].sciName),
        ];
      })
      .then((promises) => {
        Promise.all(promises).then((values) => {
          setSources(values);
          updateBackground(environment);
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
        console.log(res.urls);
        const { full, regular, small } = res.urls;
        return setBackgroundImage({ full, regular, small });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleRandomize() {
    const placeIndex = Math.floor(Math.random() * (places.length - 1));
    const query = places[placeIndex];
    const zipcode = zipcodes.random().zip;
    setZipcode(zipcode);
    setEnvironment(query);
    updatePlayer(zipcode, query);
  }

  return (
    <div className="page">
      <Switch>
        <Route path="/player">
          <Header
            zipcode={zipcode}
            environment={environment}
            updatePlayer={updatePlayer}
            playerView={true}
          />
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
            handleCurrentLocation={handleCurrentLocation}
          />
        </Route>
        <Route exact path="/">
          <Header
            zipcode={zipcode}
            environment={environment}
            updatePlayer={updatePlayer}
            playerView={false}
          />
          <Hero
            zipcode={zipcode}
            environment={environment}
            updatePlayer={updatePlayer}
          />
          <About
            id="about"
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
            handleCurrentLocation={handleCurrentLocation}
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

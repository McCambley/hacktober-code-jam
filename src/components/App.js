import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Hero from "../components/hero/Hero";
import Player from "../components/player/Player";
import About from "../components/about/About";
import Destinations from "../components/destinations/Destinations";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import newOrleans from "../images/background.jpeg";

export default function App() {
  const [backgroundImage, setBackgroundImage] = React.useState(newOrleans);
  const [locationName, setLocationName] = React.useState("New Orleans");
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/player">
          <Player background={backgroundImage} destination={locationName} />
        </Route>
        <Route exact path="/">
          <Hero />
          <About />
          <Destinations />
          <Footer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

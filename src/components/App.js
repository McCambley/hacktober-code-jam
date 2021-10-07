import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Hero from "../components/hero/Hero";
import Player from "../components/player/Player";
import About from "../components/about/About";
import Destinations from "../components/destinations/Destinations";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route path="/player">
          <Player />
        </Route>
        <Route exact path="/">
          <Hero />
          <About />
          <Destinations />
          <Footer />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

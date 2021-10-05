// import logo from './logo.svg';
import "./App.css";
import React from "react";
import zipcodes from "zipcodes";
import xenocanto from "xeno-canto";
// import ebird from 'ebird'
// import { findAllByLabelText } from '@testing-library/dom';
// const ebird = require('ebird')

function App() {
  const [birdQuery, setBirdQuery] = React.useState("06880");
  const [birdData, setBirdData] = React.useState("Cool");
  const [lat, setLat] = React.useState("6");
  const [long, setLong] = React.useState("6");
  const [firstBird, setFirstBird] = React.useState("");

  React.useEffect(() => {
    const newBird = new xenocanto();
    newBird.search(firstBird, (self) => {
      console.log(self.entity.numRecordings);
    });
  }, [firstBird]);

  React.useEffect(() => {
    const location = zipcodes.lookup(birdQuery);
    const { latitude, longitude } = location;
    setLat(latitude);
    setLong(longitude);
  }, [birdQuery]);

  React.useEffect(() => {
    return fetch(
      `https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${long}`,
      {
        headers: {
          "x-ebirdapitoken": "mi4ei0kog2o9",
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((birdData) => {
        setFirstBird(birdData[0].comName);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [lat, long]);

  return (
    <div className="App">
      <h1>{firstBird}</h1>
    </div>
  );
}

export default App;

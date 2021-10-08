// import logo from './logo.svg';
import "./Player.css";
import React from "react";
import zipcodes from "zipcodes";
import XenoCanto from "xeno-canto";
import { createApi } from "unsplash-js";
import logo from "../../logo.svg";

// import ebird from 'ebird'
// import { findAllByLabelText } from '@testing-library/dom';
// const ebird = require('ebird')

function Legacy() {
  // const [birdQuery, setBirdQuery] = React.useState("06880");
  // const [birdData, setBirdData] = React.useState("Cool");
  // const [lat, setLat] = React.useState("");
  // const [long, setLong] = React.useState("");
  // const [firstBird, setFirstBird] = React.useState("bluejay");
  const [backgroundImage, setBackgroundImage] = React.useState(logo);
  const [inputValue, setInputValue] = React.useState("");
  const [environmentValue, setEnvironmentValue] = React.useState("");
  // const [backgroundImage, setBackgroundImage] = React.useState("");
  const [sources, setSources] = React.useState([]);
  const [birdOne, setBirdOne] = React.useState("");
  const [birdTwo, setBirdTwo] = React.useState("");
  const [birdThree, setBirdThree] = React.useState("");
  const [birdFour, setBirdFour] = React.useState("");
  // const [birdOneSound, setBirdOneSound] = React.useState("");
  // const [birdTwoSound, setBirdTwoSound] = React.useState("");
  // const [birdThreeSound, setBirdThreeSound] = React.useState("");
  // const [birdFourSound, setBirdFourSound] = React.useState("");
  // const birdA = React.useRef();
  // const birdB = React.useRef();
  // const birdC = React.useRef();
  // const birdD = React.useRef();
  const { ACCESS_KEY, SECRET_KEY } = process.env;

  // console.log(ACCESS_KEY);

  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "xjXfjbZXUyocjWtFmr8VkvF2ir1ee4omC5IYJCc1598",
  });

  function loadBird(birdName) {
    // console.log(birdName);
    const birdQuery = birdName.split(" ").join("+");
    return fetch(
      `https://jsonp.afeld.me/?url=https://www.xeno-canto.org/api/2/recordings?query=${birdQuery}`
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((res) => {
        // setSources(sources.push(res.recordings[0].file));
        return res.recordings[0].file;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function loadImage(query) {
    const imageIndex = Math.floor(Math.random() * 10);
    api.search
      .getPhotos({ query, orientation: "landscape" })
      .then((result) => {
        // console.log(result);
        setBackgroundImage(result.response.results[imageIndex].urls.regular);
      })
      .catch((error) => {
        console.log("something went wrong!", error);
      });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setSources([]);
    const { latitude, longitude } = zipcodes.lookup(inputValue);
    // setLat(latitude);
    // setLong(longitude);
    findBirds(latitude, longitude).then((promises) => {
      Promise.all(promises).then((values) => {
        // console.log(values);
        setSources(values);
        loadImage(environmentValue);
      });
    });
  }

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }
  function handleEnvironmentChange(evt) {
    setEnvironmentValue(evt.target.value);
  }

  function findBirds(lat, long) {
    return fetch(
      `https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${long}`,
      {
        headers: {
          "x-ebirdapitoken": "mi4ei0kog2o9",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log({ one: data[0].sciName, two: data[1].sciName, three: data[2].sciName, four: data[3].sciName });
        // setBirdOne(data[0].sciName);
        // setBirdTwo(data[1].sciName);
        // setBirdThree(data[2].sciName);
        // setBirdFour(data[3].sciName);
        // const p1 = loadBird(birdOne);
        // const p2 = loadBird(birdTwo);
        // const p3 = loadBird(birdThree);
        // const p4 = loadBird(birdFour);
        const p1 = loadBird(data[0].sciName);
        const p2 = loadBird(data[2].sciName);
        const p3 = loadBird(data[4].sciName);
        const p4 = loadBird(data[6].sciName);
        return [p1, p2, p3, p4];

        return "cool";
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // React.useEffect(() => {

  // }, []);

  // React.useEffect(() => {
  //   return fetch(
  //     `https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${long}`,
  //     {
  //       headers: {
  //         "x-ebirdapitoken": "mi4ei0kog2o9",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res);
  //       if (!res.ok) {
  //         return Promise.reject(`${res.status} error!`);
  //       }
  //       return res.json();
  //     })
  //     .then((birds) => {
  //       console.log(birds);
  //       const birdName = birds[0].comName;
  //       setFirstBird(birdName);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [birdQuery, lat, long]);

  return (
    <div className="App">
      {sources.map((sound, index) => {
        return <audio key={index} src={sound} autoPlay loop></audio>;
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Zipcode"
          onChange={handleChange}
          value={inputValue}
        />
        <input
          type="text"
          placeholder="Choose Environment"
          onChange={handleEnvironmentChange}
          value={environmentValue}
        />
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={loadBird}>BIRD TIME</button>
      <button onClick={loadImage}>IMAGE TIME</button>
      <button
        onClick={() => {
          loadBird();
          loadImage();
        }}
      >
        COMBO TIME
      </button> */}
      <img className="image" src={backgroundImage} alt="background image" />
    </div>
  );
}

export default Legacy;

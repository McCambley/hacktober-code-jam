import { createApi } from "unsplash-js";

class Api {
  constructor() {
    // constructor body
    this._unsplashApi = createApi({
      accessKey: "xjXfjbZXUyocjWtFmr8VkvF2ir1ee4omC5IYJCc1598",
    });
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(res);
    }
    return res.json();
  }

  getBirds(lat, long) {
    const distance = Math.floor(Math.random() * 15) + 10;
    return fetch(
      `https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${long}&dist=${distance}&maxResults=100`,
      {
        headers: {
          "x-ebirdapitoken": "mi4ei0kog2o9",
        },
      }
    ).then((res) => this._checkResponse(res));
  }

  getSong(birdName) {
    const randomNumber = Math.floor(Math.random() * 2);
    const birdQuery = birdName.split(" ").join("+");
    return fetch(
      `https://jsonp.afeld.me/?url=https://www.xeno-canto.org/api/2/recordings?query=${birdQuery}`
    )
      .then((res) => this._checkResponse(res))
      .then((res) => {
        if (res.recordings.length === 0) {
          return {
            file: "",
            url: "",
          };
        }
        return {
          file: res.recordings[randomNumber].file,
          url: res.recordings[randomNumber].url,
        };
      })
      .catch((err) => console.error(err));
  }

  getImage(environment) {
    let adjustedEnvironment = environment.split(" ");
    return this._unsplashApi.photos
      .getRandom({
        query: adjustedEnvironment.join("+"),
        orientation: "landscape",
      })
      .then((res) => {
        if (!(res.status === 200)) {
          return Promise.reject(res);
        }
        return res.response;
      });
  }
}

const api = new Api();

export default api;

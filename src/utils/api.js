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
    const birdQuery = birdName.split(" ").join("+");
    return fetch(
      `https://jsonp.afeld.me/?url=https://www.xeno-canto.org/api/2/recordings?query=${birdQuery}`
    ).then((res) => this._checkResponse(res));
  }

  getImage(environment) {
    return this._unsplashApi.photos
      .getRandom({
        query: environment,
        orientation: "landscape",
      })
      .then((res) => this._checkResponse(res));
  }
}

const api = new Api();

export default api;
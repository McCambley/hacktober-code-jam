# [View this project live 🎉](https://mccambley.github.io/hacktober-code-jam/)

**Aviary** is a project completed for **Practicum by Yandex's October Code Jam**. During the Code Jam, two web developers and one web designer came together over the course of three days to create an application that would help users stay grounded during the pandemic.

Our group designed and built **[Aviary](https://mccambley.github.io/hacktober-code-jam/)**, an application that allows users to pick a landscape and location to build a custom audiovisual experience containing images of the chosen landscape as well as the sounds of birds native to their chosen location.

### Check out a live demo of this project [here](https://youtu.be/6hlaG0G9euE).

## 📣 Overview

- Chose a location using the form on the **[landing page](https://mccambley.github.io/hacktober-code-jam/)**
- Or click the **player** link in the header to be taken to sample soundscape depicting the bird sounds of **Jackson, NH** with a **Mountain** backdrop
- From the **player**
  - Click the **Mountain** button to pick a new location or landscape preference
  - Click the **Bird** button to see the list of currently playing birdsongs
  - Click the **Shuffle** button get a randomize location and landscape

## 🛠 Technologies

- **React** and **React Router** handle the frontend of the application
- **Styled-Components** make the frontend look good
- **[eBird Api](https://documenter.getpostman.com/view/664302/S1ENwy59)**: Provides data for what birds have been spotted recently in the user's chosen location
- **[Xeno-canto Api](https://xeno-canto.org/explore/api)**: Provides the songs of birds found by the **eBird Api**
- **[Unsplash](https://unsplash.com/developers)**: Provides the images to match the landscape chosen by the user

## ✨ Screenshots - [Live Demo](https://youtu.be/6hlaG0G9euE)

---

### Landing Page

![aviary_demo](https://user-images.githubusercontent.com/74033573/145722372-de483550-e73a-4e5f-a4a2-1af4794b7283.png)

### Player

![Player](https://user-images.githubusercontent.com/74033573/145722374-1fab4c28-3d4e-4240-876c-e9f45e53b7fa.png)

### Customize Player

![Customize Player](https://user-images.githubusercontent.com/74033573/145722376-0a47e645-b806-48ee-91b2-2ae590467d7e.png)

### View Birds

![View Birds](https://user-images.githubusercontent.com/74033573/145722386-18cd28b7-34cd-40d7-9f23-1e37a3fa3ecc.png)

---

## 🧑‍💻 Get Started

**Clone**

```
$ git clone https://github.com/McCambley/hacktober-code-jam.git
```

**Install**

```
$ cd hacktober-code-jam
$ npm i
```

**Launch**

```
$ npm run start
```

---

### To Do:

- [x] Create complete this readme and create a more in-depth about page
- [ ] Connect skip buttons to audio rather than image
- [ ] Create some new button functionality for choosing a new image... or redesign skip buttons so as to not confuse them with audio functionality
- [ ] Allow for entry of place names rather than only zipcodes
- [ ] With 4, expand location beyond the united states
- [ ] Display images of birds in addition to the names on the player popup
- [ ] Make player progress bar something more functional, perhaps a volume slider
- [ ] UI fixes (close on overlay, make place options more obviously clickable etc.)
- [ ] Store previous calls in next buttons
- [ ] Consolidate to one page
- [ ] Add a random image button instead
- [ ] Certify the unsplash API to be able to get more than a hundred requests
- [ ] If no bird calls are returned then populate with a new zip code
- [ ] Troubleshoot if only three calls are returned
- [x] Add Fetch current location
- [x] convert Zipcode to location name using [this](https://nominatim.org/release-docs/develop/api/Lookup/)
- [x] Readme
- [ ] Family feedback
  - [ ] WhatsApp
  - [ ] Journal
- [ ] Tooltip images of current birds
- [ ] Share button instead of save button

import React from "react";
import "./Player.css";
import styled from "styled-components";
import Form from "../form/Form";
import Settings from "../settings/Settings";
import BirdInfo from "../bird-info/BirdInfo";
import Popup from "../popup/Popup";
import defaultBackground from "../../images/background.jpeg";
import bird from "../../images/bird.svg";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";
import skipForward from "../../images/skip-f.svg";
import skipBack from "../../images/skip-b.svg";
import settings from "../../images/settings.svg";
import shuffle from "../../images/shuffle.svg";
import mountain from "../../images/mountain.svg";
import heart from "../../images/heart.svg";
import liked from "../../images/liked.svg";
import api from "../../utils/api";

const PlayerContent = styled.section`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;
`;

const Foreground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px 64px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin-bottom: 70px;
  font-size: 42px;
  text-transform: uppercase;
`;

const PlaybackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const PlaybackButton = styled.button`
  border-radius: 50%;
  background-color: #fff;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border: none;
  margin: 0px 20px;
  cursor: pointer;
  transition: transform 0.15s ease;

  &.skip {
    width: 40px;
    height: 40px;
    padding: 8px;
    margin: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
const PlaybackIcon = styled.img`
  width: 100%;
  height: 100%;
`;
const Runner = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 150px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.69);
  border-radius: 2px;
  display: flex;
`;
const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: rgba(43, 141, 192, 1);
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PlayerButton = styled.button`
  width: 60px;
  height: 60px;
  margin-right: 64px;
  border: 2px solid #ffffff;
  background-color: transparent;
  border-radius: 50%;
  transition: transform 0.15s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Player({ background, destination }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [birdTooltipOpen, setBirdTooltipOpen] = React.useState(false);
  const [settingsTooltipOpen, setSettingsTooltipOpen] = React.useState(false);

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

  function toggleBirdInfo() {
    setBirdTooltipOpen(!birdTooltipOpen);
  }

  function toggleSettings() {
    setSettingsTooltipOpen(!settingsTooltipOpen);
  }

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  function togglePlayback() {
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <PlayerContent background={background}>
        <Foreground>
          <Title>{destination}</Title>
          <PlaybackContainer>
            <PlaybackButton className="skip">
              <PlaybackIcon src={skipBack} />
            </PlaybackButton>
            <PlaybackButton onClick={togglePlayback}>
              <PlaybackIcon src={isPlaying ? pause : play} />
            </PlaybackButton>
            <PlaybackButton className="skip">
              <PlaybackIcon src={skipForward} />
            </PlaybackButton>
          </PlaybackContainer>
          <Runner>
            <Progress progress={33} />
          </Runner>
          <IconsContainer>
            <PlayerButton onClick={toggleLike}>
              <ButtonIcon src={isLiked ? liked : heart} alt="Playback icon" />
            </PlayerButton>
            <PlayerButton onClick={toggleSettings}>
              <ButtonIcon src={mountain} alt="Playback icon" />
            </PlayerButton>
            <PlayerButton onClick={toggleBirdInfo}>
              <ButtonIcon src={bird} alt="Playback icon" />
            </PlayerButton>
            <PlayerButton onClick={() => console.log("Shuffling")}>
              <ButtonIcon src={shuffle} alt="Playback icon" />
            </PlayerButton>
          </IconsContainer>
        </Foreground>
      </PlayerContent>
      <Popup isOpen={birdTooltipOpen} toggleClose={toggleBirdInfo}>
        <BirdInfo />
      </Popup>
      <Popup isOpen={settingsTooltipOpen} toggleClose={toggleSettings}>
        <Settings />
      </Popup>
    </>
  );
}

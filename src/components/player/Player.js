import React from "react";
import "./Player.css";
import styled from "styled-components";
// import Form from "../form/Form";
// import Settings from "../settings/Settings";
import BirdInfo from "../bird-info/BirdInfo";
import Popup from "../popup/Popup";
// import defaultBackground from "../../images/background.jpeg";
import bird from "../../images/bird.svg";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";
import skipForward from "../../images/skip-f.svg";
import skipBack from "../../images/skip-b.svg";
// import settings from "../../images/settings.svg";
import shuffle from "../../images/shuffle.svg";
import mountain from "../../images/mountain.svg";
import heart from "../../images/heart.svg";
import liked from "../../images/liked.svg";
// import Audio from "../audio/Audio";
import ReactPlayer from "react-player";
import Form from "../form/Form";

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
  @media (max-width: 768px) {
    padding: 24px;
  } ;
`;

const Foreground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 72px 76px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);

  @media (max-width: 1440px) {
    padding: 72px 48px;
  }
  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    padding: 52px 24px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    padding: 24px 18px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin-bottom: 70px;
  font-size: 42px;
  text-transform: uppercase;
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 60px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 0;
  }
`;

const PlaybackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 1440px) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 16px;
  }
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

  @media (max-width: 1440px) {
    width: 80px;
    height: 80px;
    padding: 24px;
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
  @media (max-width: 1440px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 20px;
  }
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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 48px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 32px;
  }
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
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Player({
  background,
  locationName,
  zipcode,
  environment,
  setZipcode,
  setEnvironment,
  handleSubmit,
  isSubmitting,
  birdNames,
  sources,
  handleRandomize,
  updateBackground,
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [birdTooltipOpen, setBirdTooltipOpen] = React.useState(false);
  const [settingsTooltipOpen, setSettingsTooltipOpen] = React.useState(false);
  const [count, setCount] = React.useState(30);
  const firstSound = React.useRef();

  React.useState(() => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  }, [isLiked, isPlaying]);

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
          <Title>{locationName}</Title>
          <PlaybackContainer>
            <PlaybackButton className="skip" onClick={updateBackground}>
              <PlaybackIcon src={skipBack} />
            </PlaybackButton>
            <PlaybackButton onClick={togglePlayback}>
              <PlaybackIcon src={isPlaying ? pause : play} />
            </PlaybackButton>
            <PlaybackButton className="skip" onClick={updateBackground}>
              <PlaybackIcon src={skipForward} />
            </PlaybackButton>
          </PlaybackContainer>
          <Runner>
            <Progress progress={count} />
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
            <PlayerButton onClick={handleRandomize}>
              <ButtonIcon src={shuffle} alt="Playback icon" />
            </PlayerButton>
          </IconsContainer>
        </Foreground>
      </PlayerContent>
      <Popup isOpen={birdTooltipOpen} toggleClose={toggleBirdInfo}>
        <BirdInfo birdNames={birdNames} sources={sources} />
      </Popup>
      <Popup isOpen={settingsTooltipOpen} toggleClose={toggleSettings}>
        <Form
          double={true}
          displayZip={true}
          displayEnv={true}
          zipcode={zipcode}
          environment={environment}
          setZipcode={setZipcode}
          setEnvironment={setEnvironment}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </Popup>
      <ReactPlayer
        ref={firstSound}
        playing={isPlaying}
        url={sources[0] && sources[0].file}
        loop={true}
        height="0"
        width="0"
        playbackRate={1}
        volume={0.3}
      />
      <ReactPlayer
        playing={isPlaying}
        url={sources[1] && sources[1].file}
        loop={true}
        height="0"
        width="0"
        playbackRate={0.9}
        volume={0.2}
      />
      <ReactPlayer
        playing={isPlaying}
        url={sources[2] && sources[2].file}
        loop={true}
        height="0"
        width="0"
        playbackRate={0.8}
        volume={0.5}
      />
      <ReactPlayer
        playing={isPlaying}
        url={sources[3] && sources[3].file}
        loop={true}
        height="0"
        width="0"
        playbackRate={0.95}
        volume={0.8}
      />
    </>
  );
}

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
import settings from "../../images/settings.svg";
import shuffle from "../../images/shuffle.svg";

const PlayerContent = styled.section`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 42px;
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
  transition: transform 0.3s ease;
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

export default function Player({
  background = defaultBackground,
  destination = "New England",
}) {
  const [playing, setPlaying] = React.useState(false);
  const [birdTooltipOpen, setBirdTooltipOpen] = React.useState(false);
  const [settingsTooltipOpen, setSettingsTooltipOpen] = React.useState(false);

  function toggleBirdInfo() {
    setBirdTooltipOpen(!birdTooltipOpen);
  }

  function toggleSettings() {
    setSettingsTooltipOpen(!settingsTooltipOpen);
  }

  return (
    <>
      <PlayerContent background={background}>
        <Controls>
          <Title>{destination}</Title>
          <IconsContainer>
            <PlayerButton>
              <ButtonIcon src={playing ? pause : play} atl="Playback icon" />
            </PlayerButton>
            <PlayerButton>
              <ButtonIcon src={shuffle} atl="Playback icon" />
            </PlayerButton>
            <PlayerButton onClick={toggleBirdInfo}>
              <ButtonIcon src={bird} atl="Playback icon" />
            </PlayerButton>
            <PlayerButton onClick={toggleSettings}>
              <ButtonIcon src={settings} atl="Playback icon" />
            </PlayerButton>
          </IconsContainer>
        </Controls>
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

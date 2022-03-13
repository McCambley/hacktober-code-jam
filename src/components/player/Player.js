import React from "react";
import BirdInfo from "../bird-info/BirdInfo";
import Popup from "../popup/Popup";
import bird from "../../images/bird.svg";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";
import skipForward from "../../images/skip-f.svg";
import skipBack from "../../images/skip-b.svg";
import shuffle from "../../images/shuffle.svg";
import mountain from "../../images/mountain.svg";
import heart from "../../images/heart.svg";
import liked from "../../images/liked.svg";
import ReactPlayer from "react-player";
import Form from "../form/Form";
import spinner from "../../images/spinner.svg";
import {
  PlayerContent,
  Foreground,
  LoadingText,
  Title,
  PlaybackContainer,
  PlaybackButton,
  PlaybackIcon,
  Runner,
  Progress,
  IconsContainer,
  PlayerButton,
  ButtonIcon,
} from "./styledPlayer";

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
  updatePlayer,
  handleCurrentLocation,
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [birdTooltipOpen, setBirdTooltipOpen] = React.useState(false);
  const [settingsTooltipOpen, setSettingsTooltipOpen] = React.useState(false);
  // const [count, setCount] = React.useState(0);
  const firstSound = React.useRef();

  React.useEffect(() => {
    setIsPlaying(true);
  }, [sources]);

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

  console.log({ background });

  return (
    <>
      <PlayerContent background={background}>
        <Foreground>
          {isSubmitting ? (
            // add spinnerDark as source below for optional title loading spinner
            <LoadingText />
          ) : (
            <Title isLoading={isSubmitting}>
              {/* {isSubmitting ? `Loading ${environment}...` : locationName} */}
              {locationName}
            </Title>
          )}
          <PlaybackContainer>
            <PlaybackButton
              className="skip"
              onClick={() => updateBackground(environment)}
            >
              <PlaybackIcon src={skipBack} />
            </PlaybackButton>
            <PlaybackButton onClick={togglePlayback}>
              <PlaybackIcon
                isLoading={isSubmitting}
                src={isSubmitting ? spinner : isPlaying ? pause : play}
              />
            </PlaybackButton>
            <PlaybackButton
              className="skip"
              onClick={() => updateBackground(environment)}
            >
              <PlaybackIcon src={skipForward} />
            </PlaybackButton>
          </PlaybackContainer>
          <Runner>
            <Progress
              isPlaying={isPlaying}
              isSubmitting={isSubmitting}
              progress={0}
            />
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
          handleCurrentLocation={handleCurrentLocation}
        />
      </Popup>
      <ReactPlayer
        ref={firstSound}
        playing={isPlaying}
        url={sources[0] && sources[0].file}
        config={{
          file: {
            forceAudio: true,
          },
        }}
        loop={true}
        height="0"
        width="0"
        playbackRate={1}
        volume={0.3}
        controls={false}
      />
      <ReactPlayer
        playing={isPlaying}
        url={sources[1] && sources[1].file}
        config={{
          file: {
            forceAudio: true,
          },
        }}
        loop={true}
        height="0"
        width="0"
        playbackRate={0.9}
        volume={0.2}
        controls={false}
      />
      <ReactPlayer
        playing={isPlaying}
        url={sources[2] && sources[2].file}
        config={{
          file: {
            forceAudio: true,
          },
        }}
        loop={true}
        height="0"
        width="0"
        playbackRate={0.8}
        volume={0.5}
        controls={false}
      />
      <ReactPlayer
        playing={isPlaying}
        url={sources[3] && sources[3].file}
        config={{
          file: {
            forceAudio: true,
          },
        }}
        loop={true}
        height="0"
        width="0"
        playbackRate={0.95}
        volume={0.8}
        controls={false}
      />
    </>
  );
}

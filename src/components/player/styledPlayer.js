import styled, { keyframes } from "styled-components";

const spinLoader = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

export const increaseProgress = keyframes`
0% {
  width: 0%;
}
100% {
  width: 100%;
}
`;

export const PlayerContent = styled.section`
  background-image: url(${(props) => props.background.full});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    background-image: url(${(props) => props.background.regular});
  }
  @media (max-width: 768px) {
    padding: 24px;
  }
  @media (max-width: 480px) {
    background-image: url(${(props) => props.background.small});
  }
`;

export const Foreground = styled.div`
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

export const Title = styled.h1`
  margin: 0;
  font-family: "Bitter", serif;
  font-weight: 700;
  margin-bottom: 70px;
  font-size: 42px;
  text-transform: ${(props) => (props.isLoading ? `sentence` : `uppercase`)};
  min-height: 1em;
  color: ${(props) =>
    props.isLoading ? `rgba(51, 51, 51, .3)` : `rgb(51, 51, 51)`};
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 60px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    text-align: center;
    line-height: 30px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 12px;
  }
`;

export const LoadingText = styled.img`
  animation: ${spinLoader} 1.1s linear infinite;
  opacity: 0.2;
  margin-bottom: 40px;
  width: 80px;
  transform: translate(12px, 12px);

  @media (max-width: 1440px) {
    width: 60px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    width: 52px;
    text-align: center;
    margin-bottom: 12px;
    line-height: 20px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    width: 32px;
    margin-bottom: 12px;
  }
`;

export const PlaybackContainer = styled.div`
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

export const PlaybackButton = styled.button`
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

export const PlaybackIcon = styled.img`
  width: 100%;
  height: 100%;
  animation: ${(props) => props.isLoading && spinLoader} 1s linear infinite;
`;
export const Runner = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 150px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.69);
  border-radius: 2px;
  display: flex;
  cursor: pointer;
  @media (max-width: 1440px) {
    margin-bottom: 50px;
  }
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 20px;
  }
`;
export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: rgba(43, 141, 192, 1);
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
  animation: ${({ isPlaying, isSubmitting }) =>
      isSubmitting ? `none` : isPlaying ? increaseProgress : `none`}
    30s linear infinite;
`;

export const IconsContainer = styled.div`
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

export const PlayerButton = styled.button`
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

export const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
`;

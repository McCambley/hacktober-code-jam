import React from "react";
import { Information, BirdLink } from "./styledBirdInfo";

export default function BirdInfo({ birdNames, sources }) {
  return (
    // <BirdDisplay>
    //   {/* <Bird>{birdNames[0]}</Bird>
    //   <Bird>{birdNames[1]}</Bird>
    //   <Bird>{birdNames[2]}</Bird>
    // <Bird>{birdNames[3]}</Bird> */}
    // </BirdDisplay>
    <Information>
      Enjoy the sounds of the
      <BirdLink
        target="_blank"
        rel="noopener"
        href={sources[0] && sources[0].url}
      >
        {" "}
        {birdNames[0]}
      </BirdLink>
      , the
      <BirdLink
        target="_blank"
        rel="noopener"
        href={sources[1] && sources[1].url}
      >
        {" "}
        {birdNames[1]}
      </BirdLink>
      , the
      <BirdLink
        target="_blank"
        rel="noopener"
        href={sources[2] && sources[2].url}
      >
        {" "}
        {birdNames[2]}
      </BirdLink>
      , and the{" "}
      <BirdLink
        target="_blank"
        rel="noopener"
        href={sources[3] && sources[3].url}
      >
        {birdNames[3]}
      </BirdLink>
      .
    </Information>
  );
}

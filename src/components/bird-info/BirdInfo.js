import React from "react";
import styled from "styled-components";

// const Bird = styled.div`
//   width: 200px;
//   height: 100px;
//   border: 2px solid gray;
//   border-radius: 4px;
//   color: #333333;
// `;

// const BirdDisplay = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 24px;
//   width: 100%;
//   height: 100%;
//   color: #333333;
// `;

const Information = styled.h2`
  width: 100%;
  max-width: 50vw;
  color: #333;
  text-align: center;
  margin: 0 auto;
  line-height: 36px;
  @media (max-width: 768px) {
    max-width: 85vw;
  }
`;

const BirdLink = styled.a`
  color: #2b8dc0;
  cursor: pointer;
  text-decoration: none;
  transiton: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function BirdInfo({ birdNames, sources }) {
  // React.useEffect(() => {
  //   console.log(birdNames[0] === birdNames[1]);
  // });

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

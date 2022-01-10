import styled from "styled-components";

export const Information = styled.h2`
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

export const BirdLink = styled.a`
  color: #2b8dc0;
  cursor: pointer;
  text-decoration: none;
  transiton: opacity 0.15s ease;

  &:hover {
    opacity: 0.7;
  }
`;

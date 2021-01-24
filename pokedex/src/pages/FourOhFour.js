import React from "react";
import { GiPokecog } from "react-icons/gi";
import styled, { keyframes } from "styled-components";

const FourOhFour = () => {
  return (
    <Wrapper>
      <h1>Oops... something went wrong!</h1>
      <BackgroundLogo></BackgroundLogo>
    </Wrapper>
  );
};

export default FourOhFour;

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `;

const BackgroundLogo = styled(GiPokecog)`
  height: 60%;
  width: 60%;
  animation: ${rotate} 10s linear infinite;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 80vw;
  margin: auto;

  @media only screen and (max-width: 400px) {
    width: 95vw;
  }
`;

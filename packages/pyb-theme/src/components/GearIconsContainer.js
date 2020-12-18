import React from "react";
import { connect, styled } from "frontity";
import SoundWave from "../assets/backwave.png";
import MicLogo from "../assets/microfonia.png";
import GuitarLogo from "../assets/guitar.png";
import GeneralLogo from "../assets/general.png";
import Link from "./Link";

const Container = styled.div`
  background-color: #343434;
  height: 250px;
`;

const StyledText = styled.h2`
  font-size: 2rem;
  color: #39847e;
  letter-spacing: 1rem;
  text-align: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  padding-top: 10px;
  font-family: "Hikou Regular";

  @media (max-width: 425px) {
    font-size: 1.4rem;
    width: 70%;
    letter-spacing: 0.5rem;
    line-height: 2rem;
  }
`;

const StyledWave = styled.img`
  width: 50px;
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 25px auto;
  width: 70%;
`;

const StyledIcons = styled.img`
  height: 40px;
  opacity: 0.6;
  transition: all 0.2s;
  & :hover {
    height: 60px;
  }
`;

const StyledItems = styled.div`
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    margin-top: 10px;
    display: flex;
    color: #cbcbcb;
    font-family: "Roboto Regular";
    font-size: 1rem;
  }
  & :hover {
    height: 60px;
    & p {
      color: #39847e;
    }
  }
`;

const GearIconsContainer = () => {
  return (
    <>
      <Container>
        <StyledWave src={SoundWave}></StyledWave>
        <StyledText>
          Conocé
          <br />
          nuestros equipos
        </StyledText>
        <IconsContainer>
          <StyledItems>
            <Link href="/categoria/microfonia">
              <StyledIcons src={MicLogo}></StyledIcons>
            </Link>
            <p>Microfonía</p>
          </StyledItems>
          <StyledItems>
            <Link href="/categoria/guitarra">
              <StyledIcons src={GuitarLogo}></StyledIcons>
            </Link>
            <p>Guitarras</p>
          </StyledItems>
          <StyledItems>
            <Link href="/categoria/general">
              <StyledIcons src={GeneralLogo}></StyledIcons>
            </Link>
            <p>Generales</p>
          </StyledItems>
        </IconsContainer>
      </Container>
    </>
  );
};

export default connect(GearIconsContainer);

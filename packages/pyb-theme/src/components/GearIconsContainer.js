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
  padding-top: 20px;
  @media (min-width: 400px) {
    padding-top: 40px;
    height: 350px;
  }
  @media (min-width: 559px) {
    height: 380px;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
`;

const StyledText = styled.h2`
  font-size: 1.4rem;
  color: #39847e;
  letter-spacing: 0.5rem;
  line-height: 2rem;
  text-align: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  padding-top: 10px;
  font-family: "Hikou Regular";
  width: 70%;
  @media (min-width: 400px) {
    font-size: 2rem;
    letter-spacing: 0.7rem;
    line-height: 2.85rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
    line-height: 3.2rem;
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
  @media (min-width: 400px) {
    width: 65.7px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 40px auto 30px;
  width: 85%;
  @media (min-width: 400px) {
    margin-top: 50px;
  }
`;

const StyledIcons = styled.img`
  height: 40px;
  opacity: 0.6;
  transition: all 0.2s;

  & :hover {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(129deg)
      brightness(100%) contrast(90%);
    height: 60px;
  }
  @media (min-width: 400px) {
    height: 60px;
    & :hover {
      height: 80px;
    }
  }
  @media (min-width: 559px) {
    height: 85px;
  }
  @media (min-width: 1200px) {
    height: 120px;
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
    font-family: "Hikou Outline";
    font-size: 1rem;
    letter-spacing: 0.1rem;
    @media (min-width: 400px) {
      font-size: 1.5rem;
    }

    @media (min-width: 559px) {
      font-size: 2rem;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
  & :hover {
    height: 80px;

    & p {
      font-family: "Hikou Regular";
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

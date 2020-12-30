import React from "react";
import { connect, styled } from "frontity";
import SoundWave from "../assets/backwave.png";
import MicLogo from "../assets/microfonia.png";
import GuitarLogo from "../assets/guitar.png";
import GeneralLogo from "../assets/general.png";

import GearIcons from "./GearIcons";

const Container = styled.div`
  height: 550px;
  padding-top: 50px;

  @media (min-width: 400px) {
    padding-top: 40px;
    height: 600px;
  }
  @media (min-width: 559px) {
    height: 700px;
  }
  @media (min-width: 880px) {
    height: 600px;
  }
  @media (min-width: 1200px) {
    height: 800px;
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
  margin-bottom: -30px;
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

  opacity: 0.7;
  @media (min-width: 400px) {
    width: 65.7px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 40px auto 30px;
  width: 85%;
  @media (min-width: 400px) {
    margin-top: 50px;
  }
  @media (min-width: 880px) {
    flex-direction: row;
  }
`;

const StyledItems = styled.div`
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  & p {
    display: flex;
    color: #cbcbcb;
    font-family: "Hikou Regular";
    opacity: 0.6;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
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
`;

const GearIconsContainer = () => {
  return (
    <>
      <Container>
        <StyledWave src={SoundWave}></StyledWave>
        <StyledText>
          <a id="equipos">
            Conocé
            <br />
            nuestros equipos
          </a>
        </StyledText>
        <IconsContainer>
          <StyledItems>
            <GearIcons
              link="/categoria/microfonia"
              icono={MicLogo}
              description="Microfonía"
            />
          </StyledItems>
          <StyledItems>
            <GearIcons
              link="/categoria/guitarra"
              icono={GuitarLogo}
              description="Guitarras"
            />
          </StyledItems>
          <StyledItems>
            <GearIcons
              link="/categoria/general"
              icono={GeneralLogo}
              description="Generales"
            />
          </StyledItems>
        </IconsContainer>
      </Container>
    </>
  );
};

export default connect(GearIconsContainer);

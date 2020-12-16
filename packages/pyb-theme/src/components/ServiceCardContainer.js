import React from "react";
import { connect, styled } from "frontity";
import ServiceCards from "./ServiceCards";
import GrabacionImage from "../assets/grabacion.jpg";
import ProduccionImage from "../assets/produccion.jpg";
import MezclaImage from "../assets/mezcla.jpg";
import MasteringImage from "../assets/mastering.jpg";

const GridCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  width: 90%;
  justify-items: center;
  overflow: hidden;
  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 426px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100%;
    width: 100%;
  }
`;

const StyledText = styled.h2`
  font-size: 2rem;
  color: #39847e;
  letter-spacing: 1rem;
  text-align: center;
  display: flex;
  margin: 0 auto;
  font-family: "Hikou Regular";
  text-shadow: -3px 1px 2px black;
  @media (max-width: 425px) {
    font-size: 1.4rem;
    width: 50%;
    letter-spacing: 0.5rem;
    line-height: 2rem;
  }
`;
const ServiceCardContainer = () => {
  return (
    <>
      <StyledText>Conocé nuestros servicios</StyledText>
      <GridCardsContainer>
        <CardsGrid>
          <ServiceCards
            title="Producción"
            description="La Producción coso"
            background={ProduccionImage}
          />
          <ServiceCards
            title="Grabación"
            description="Grabamos re lindo. Grabate."
            background={GrabacionImage}
          />
          <ServiceCards
            title="Mezcla"
            description="El que quiera celeste que mezcle azul y blanco"
            background={MezclaImage}
          />
          <ServiceCards
            title="Mastering"
            description="Que hacé mastering!"
            background={MasteringImage}
          />
        </CardsGrid>
      </GridCardsContainer>
    </>
  );
};

export default connect(ServiceCardContainer);

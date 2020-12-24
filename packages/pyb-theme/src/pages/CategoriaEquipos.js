import React from "react";
import { connect, styled } from "frontity";
import Featured from "../components/Featured";
import Link from "../components/Link";

const EquiposContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 80%;
  justify-items: center;
  overflow: hidden;
  @media (min-width: 559px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    margin-top: 30px;
  }
  @media (min-width: 1000px) {
    margin-top: 50px;
    padding-bottom: 100px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const StyledTitle = styled.h2`
  font-family: "Hikou Outline";
  font-size: 1.8rem;
  letter-spacing: 0.6rem;
  text-align: center;
  color: #cbcbcb;
  justify-self: center;
  margin: 0 auto 0.7rem;
  z-index: 5;
  @media (min-width: 400px) {
    font-size: 2.5rem;
    letter-spacing: 0.7rem;
    line-height: 2.85rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
    line-height: 3.2rem;
  }
`;

const StyledP = styled.p`
  display: flex;
  z-index: 3;
  color: #cbcbcb;
  opacity: 0.8;
  font-size: 0.7rem;
  font-family: "Hikou Regular";
  letter-spacing: 0.22rem;
  text-align: center;
  width: 70%;
  justify-content: center;
  @media (min-width: 400px) {
    font-size: 1.3rem;
  }
`;

const StyledArticle = styled.article`
  :hover {
    & h4 {
      transform: translate(0, -0.5px);
      opacity: 1;
    }
    & img {
      filter: none;
    }
    & p {
      transform: translate(0, -0.5px);
      opacity: 1;
    }
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 120px;
  z-index: 1000;
  position: relative;
  background-color: white;
  border-radius: 10px;
  border: 3px solid #39847e;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  & img {
    filter: grayscale();
    width: 95px;
  }
`;

const CardTitle = styled.h4`
  font-family: "Hikou Regular";
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
  color: white;
  width: 80%;
  text-align: center;
  transition: all 0.3s ease-out;
  margin: 0 auto;
  padding: 5px 0;
  background-color: #39847e;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  z-index: 1;
  transform: translate(0, 40px);
  opacity: 0;
`;

const CardSpan = styled.p`
  font-family: "Hikou Regular";
  font-size: 0.7rem;
  letter-spacing: 0.15rem;
  color: #39847e;
  width: 50%;
  text-align: center;
  transition: all 0.3s ease-out;
  margin: 0 auto;
  padding: 5px 0;
  background-color: #cbcbcb;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  transform: translate(0, -20px);
  z-index: 1;
`;

const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(3, 3, 3, 1) 0%,
    rgba(52, 52, 52, 1) 100%
  );
`;

const CategoriaEquipos = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <GeneralContainer>
        <StyledTitle>Equipos</StyledTitle>
        <StyledP>
          Estos son los equipos que tenemos disponibles para vos.
        </StyledP>
        <EquiposContainer>
          {data.items.map(({ id }) => {
            const equipo = state.source.equipo[id];
            return (
              <StyledArticle key={id}>
                <CardTitle
                  dangerouslySetInnerHTML={{ __html: equipo.title.rendered }}
                ></CardTitle>

                <StyledImgContainer>
                  <Featured imgID={equipo.featured_media} element="equipo" />
                </StyledImgContainer>
                <Link href={equipo.link}>
                  <CardSpan>Ver descripción</CardSpan>
                </Link>
              </StyledArticle>
            );
          })}
        </EquiposContainer>
      </GeneralContainer>
    </>
  );
};

export default connect(CategoriaEquipos);

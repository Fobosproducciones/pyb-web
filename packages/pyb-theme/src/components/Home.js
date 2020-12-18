import React, { useEffect } from "react";
import { connect, styled } from "frontity";

import Fondo from "../assets/fondo.png";
import Persona from "../assets/persona7-1.png";
import Flechas from "../assets/flechas.png";
import ServiceCardContainer from "./ServiceCardContainer";
import GearIconsContainer from "./GearIconsContainer";

const Hero = styled.section`
  position: relative;
  min-width: 320px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    height: 600px;
  }

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, #0b0b0b, transparent);
    z-index: 10000;
  }
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #0b0b0b;
    z-index: 10000;
    mix-blend-mode: color;
  }
`;

const ImagenFondo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;
  @media (max-width: 425px) {
    height: 800px;
    margin-top: -185px;
  }
`;

const Imagen = styled.img`
  position: absolute;
  top: 100;
  overflow: hidden;

  object-fit: contain;
  z-index: 2;
  @media (max-width: 1400px) {
    width: 1200px;
  }
  @media (max-width: 768px) {
    width: 1000px;
  }
  @media (max-width: 425px) {
    right: -200px;
  }
`;

const StyledTexto = styled.h2`
  font-size: 3rem;
  color: #cbcbcb;
  position: absolute;
  top: 0;
  margin-top: 150px;
  letter-spacing: 1rem;
  font-weight: 300;
  font-family: "Hikou Outline";
  & img {
    width: 15px;
    margin-left: 70px;
    margin-top: 5px;
  }
  & span {
    font-family: "Hikou Regular";
    color: #cbcbcb;
  }
  @media (max-width: 425px) {
    font-size: 1.8rem;
    width: 70%;
    margin-top: 275px;
    margin-right: 25px;
    letter-spacing: 0.5rem;
    line-height: 2.5rem;
  }
`;

const Home = () => {
  useEffect(function mount() {
    function onScroll() {
      let fondo = document.getElementById("fondo");

      let text = document.getElementById("text");

      var value = window.scrollY;
      fondo.style.top = value * 0.5 + "px";

      text.style.top = value * 1.5 + "px";
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <>
      <Hero>
        <ImagenFondo src={Fondo} alt="fondo" id="fondo"></ImagenFondo>

        <Imagen src={Persona} alt="persona" id="persona"></Imagen>
        <StyledTexto id="text">
          Hagamos que tus ideas <br /> <span>suenen bien </span>
          <img src={Flechas} alt="flechas hacia abajo"></img>
        </StyledTexto>
      </Hero>

      <ServiceCardContainer />
      <GearIconsContainer />
    </>
  );
};

export default connect(Home);

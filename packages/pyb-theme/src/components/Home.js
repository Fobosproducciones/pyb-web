import React, { useEffect } from "react";
import { connect, styled } from "frontity";

import Fondo from "../assets/fondo.png";
import Persona from "../assets/persona9.png";
import Flechas from "../assets/flechas.png";
import ServiceCardContainer from "./ServiceCardContainer";
import GearIconsContainer from "./GearIconsContainer";

const Hero = styled.section`
  position: relative;
  min-width: 320px;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1600px) {
    height: 850px;
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
  height: 800px;
  margin-top: -185px;
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.7;
  @media (max-width: 425px) {
  }
`;

const Imagen = styled.img`
  position: absolute;
  top: 100;
  overflow: hidden;
  object-fit: contain;
  z-index: 2;
  width: 1000px;
  right: -200px;
  @media (min-width: 559px) {
    right: -60px;
  }
  @media (min-width: 1000px) {
    right: -10px;
    width: 1100px;
  }
  @media (min-width: 1200px) {
    right: -10px;
    width: 1300px;
  }
  @media (min-width: 1600px) {
    right: 50px;
    width: 1800px;
  }
`;

const StyledTexto = styled.h2`
  font-size: 1.8rem;
  width: 70%;
  color: #cbcbcb;
  position: absolute;
  top: 0;
  margin-top: 275px;
  margin-right: 25px;
  letter-spacing: 0.5rem;
  line-height: 2.5rem;
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
  @media (min-width: 559px) {
    font-size: 3rem;
    margin-right: 50px;
    letter-spacing: 0.73rem;
    line-height: 3.7rem;
    margin-top: 250px;
  }
  @media (max-width: 842px) and (orientation: landscape) {
    margin-top: 0px;
  }

  @media (min-width: 1000px) {
    font-size: 4rem;
    margin-top: 220px;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
    letter-spacing: 2rem;
    line-height: 7rem;
    @media (min-width: 1600px) {
      font-size: 6rem;
      letter-spacing: 2rem;
      line-height: 7rem;
    }
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
      <a id="trabajos">
        <ServiceCardContainer />
      </a>
      <a id="equipos">
        <GearIconsContainer />
      </a>
    </>
  );
};

export default connect(Home);

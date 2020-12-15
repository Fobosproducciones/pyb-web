import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";

import Fondo from "../assets/fondo.png";
import Persona from "../assets/persona6.png";
import Letras from "../assets/letras3.png";

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

const Imagenletras = styled.img`
  position: relative;
  top: 0;
  margin-top: 250px;
  left: 0;
  color: #fff;
  width: 90%;
  z-index: 1;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    margin-top: 178px;
    width: 350px;
    left: 10px;
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

  @media (max-width: 425px) {
    height: 800px;
    margin-top: -185px;
  }
`;

const Imagen = styled.img`
  position: absolute;
  top: 100;

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

        <Imagenletras src={Letras} id="text"></Imagenletras>
      </Hero>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
      <h1>Contenido</h1>
    </>
  );
};

export default connect(Home);

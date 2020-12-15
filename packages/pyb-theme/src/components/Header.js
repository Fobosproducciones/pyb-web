import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import Logo from "../assets/logopyb.png";
import MenuButton from "./MenuButton";

const NavigationBar = styled.nav`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 2rem auto;
  position: relative;
`;

const NavigationContentLeft = styled.div`
  & img {
    height: 100px;
    transition: all 0.35s ease;
  }
  & img:hover {
    transform: scale(1.05);
  }
`;

const NavigationContentRight = styled.div`
  & a {
    font-size: 1.4rem;
    padding-left: 2.4rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <>
      <NavigationBar>
        <NavigationContentLeft>
          <Link href="/">
            <img src={Logo} alt="logo palo y a la bolsa"></img>
          </Link>
        </NavigationContentLeft>
        <NavigationContentRight>
          <Link href="/trabajos">Trabajos</Link>
          <Link href="/equipos">Equipos</Link>
          <Link href="">Contacto</Link>
          <Link href="">El Estudio</Link>
        </NavigationContentRight>
        <MenuButton />
      </NavigationBar>
    </>
  );
};

export default connect(Header);

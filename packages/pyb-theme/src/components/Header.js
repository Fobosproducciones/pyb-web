import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";
import Logo from "../assets/logopyb.png";
import MenuButton from "./MenuButton";

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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
    font-size: 1.2rem;
    padding-left: 2.4rem;
    font-family: "Hikou Regular";
    letter-spacing: 0.3rem;
    :hover {
      color: #39847e;
    }
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
          <a href="/#trabajos">Trabajos</a>
          <a href="/#equipos">Equipos</a>
          <Link href="/contacto">Contacto</Link>
        </NavigationContentRight>
        <MenuButton />
      </NavigationBar>
    </>
  );
};

export default connect(Header);

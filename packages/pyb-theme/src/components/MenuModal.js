import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  letter-spacing: 0.1rem;
  color: #cbcbcb;
  overflow: hidden;

  @media (max-width: 600px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

    background-color: rgb(0, 0, 0, 0.5);
    position: absolute;
    overflow: hidden;
    transform: ${({ open }) => (open ? "translateY(10%)" : "translateY(0)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    padding-right: 5rem;
    top: 70px;
    right: -15px;
    height: 150px;
    width: 100px;

    z-index: 50;
    transition: all 1s ease-in-out;
  }
`;

const MenuModal = ({ open }) => {
  return (
    <Ul open={open}>
      <Link href="/trabajos">Trabajos</Link>
      <Link href="/equipos">Equipos</Link>
      <Link href="">Contacto</Link>
      <Link href="">El Estudio</Link>
    </Ul>
  );
};

export default connect(MenuModal);

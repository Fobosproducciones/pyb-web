import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  font-family: "Space Mono", monospace;
  letter-spacing: 0.1rem;
  color: #cbcbcb;
  overflow: hidden;

  @media (max-width: 600px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: flex-end;
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    margin-right: 1rem;
    top: 100px;
    right: 0;
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

import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";

const Ul = styled.ul`
  list-style: none;
  display: none;
  font-family: "Hikou Regular";
  letter-spacing: 0.1rem;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    letter-spacing: 0.15rem;
    display: flex;
    flex-flow: column;
    text-align: right;
    position: absolute;
    overflow: hidden;
    transform: ${({ open }) => (open ? "translateY(10%)" : "translateY(0)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    top: 60px;
    right: 1px;
    height: 150px;
    width: 100px;
    z-index: 50;
    transition: all 0.5s ease-in-out;

    & li {
      margin: 8px 0 10px;
    }
  }
  & a:hover {
    color: #39847e;
  }
`;

const MenuModal = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/#trabajos">Trabajos</a>
      </li>
      <li>
        <a href="/#equipos">Equipos</a>
      </li>
      <li>
        <Link href="/contacto">Contacto</Link>
      </li>
    </Ul>
  );
};

export default connect(MenuModal);

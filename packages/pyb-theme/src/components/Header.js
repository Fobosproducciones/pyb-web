import React from "react";
import { connect } from "frontity";
import Link from "./Link";

const Header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/equipos">Equipos</Link>
      <Link href="/trabajos">Trabajos</Link>
    </>
  );
};

export default connect(Header);

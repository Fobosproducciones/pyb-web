import React from "react";
import { connect } from "frontity";

import Link from "../components/Link";

const Trabajos = ({}) => {
  return (
    <>
      <h2>Trabajos</h2>
      <p>Estos son los trabajos que hemos realizado.</p>
      <Link href="/realizado/produccion">
        {" "}
        <p>Produccion</p>{" "}
      </Link>
      <Link href="/realizado/mezcla">
        {" "}
        <p>Mezcla</p>{" "}
      </Link>
      <Link href="/realizado/grabacion">
        {" "}
        <p>Grabacion</p>{" "}
      </Link>
      <Link href="/realizado/master">
        {" "}
        <p>Mastering</p>{" "}
      </Link>
    </>
  );
};

export default connect(Trabajos);

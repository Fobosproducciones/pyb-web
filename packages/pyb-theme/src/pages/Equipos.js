import React from "react";
import { connect } from "frontity";

import Link from "../components/Link";

const Equipos = ({}) => {
  return (
    <>
      <h2>Equipos</h2>
      <p>Estos son los equipos que tenemos disponibles para vos.</p>
      <Link href="/categoria/microfonia">
        {" "}
        <p>Microfonia</p>{" "}
      </Link>
      <Link href="/categoria/general">
        {" "}
        <p>General</p>{" "}
      </Link>
      <Link href="/categoria/guitarra">
        {" "}
        <p>Guitarra</p>{" "}
      </Link>
    </>
  );
};

export default connect(Equipos);

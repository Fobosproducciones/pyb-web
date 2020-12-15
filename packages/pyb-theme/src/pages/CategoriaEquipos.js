import React from "react";
import { connect } from "frontity";
import Featured from "../components/Featured";
import Link from "../components/Link";

const CategoriaEquipos = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <h2>Equipos</h2>
      <p>Estos son los equipos que tenemos disponibles para vos.</p>
      {data.items.map(({ id }) => {
        const equipo = state.source.equipo[id];
        return (
          <article key={id}>
            <Link href={equipo.link}>
              <h3
                dangerouslySetInnerHTML={{ __html: equipo.title.rendered }}
              ></h3>
              <Featured imgID={equipo.featured_media} element="equipo" />
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default connect(CategoriaEquipos);

import React from "react";
import { connect } from "frontity";
import Featured from "../components/Featured";
import Link from "../components/Link";

const TrabajosRealizados = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <h2>Trabajos</h2>
      <p>Estos son los trabajos que hemos realizado.</p>
      {data.items.map(({ id }) => {
        const trabajo = state.source.trabajo[id];
        return (
          <article key={id}>
            <Link href={trabajo.link}>
              <h3
                dangerouslySetInnerHTML={{ __html: trabajo.title.rendered }}
              ></h3>
              <Featured imgID={trabajo.featured_media} element="trabajo" />
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default connect(TrabajosRealizados);

import React, { useEffect } from "react";
import { connect } from "frontity";
import Base from "./Styles/Base";
import Header from "./components/Header";
import Equipos from "./pages/Equipos";
import Post from "./components/Post";
import Trabajos from "./pages/Trabajos";
import CategoriaEquipos from "./pages/CategoriaEquipos";
import TrabajosRealizados from "./pages/TrabajosRealizados";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  useEffect(() => {
    actions.source.fetch("/trabajos");
    actions.source.fetch("/equipos");
    actions.source.fetch("/categoria/microfonia");
    actions.source.fetch("/categoria/general");
    actions.source.fetch("/categoria/guitarra");
    actions.source.fetch("/realizado/produccion");
    actions.source.fetch("/realizado/mezcla");
    actions.source.fetch("/realizado/grabacion");
    actions.source.fetch("/realizado/master");
    actions.source.fetch("/contacto");
  }, []);
  return (
    <>
      <Base />
      <Header />
      {data.isHome && <Home />}
      {data.isEquipoArchive && <Equipos />}
      {data.isEquipo && <Post element="equipo" />}
      {data.isTrabajoArchive && <Trabajos />}
      {data.isTrabajo && <Post element="trabajo" />}
      {data.isCategoria && <CategoriaEquipos />}
      {data.isRealizado && <TrabajosRealizados />}
      {data.isPage && <Post element="contacto" />}
      {data.is404 && <ErrorPage />}
      <Footer />
    </>
  );
};

export default connect(Root);

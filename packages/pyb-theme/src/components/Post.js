import React from "react";
import { connect } from "frontity";
import Featured from "./Featured";

const Post = ({ state, element }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  if (element === "trabajo") {
    return (
      <>
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </>
    );
  } else if (element === "equipo") {
    return (
      <>
        <h3>{post.title.rendered}</h3>
        <Featured imgID={post.featured_media} element="equipo" />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </>
    );
  }
};

export default connect(Post);

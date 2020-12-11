import React from "react";
import { connect } from "frontity";

const Featured = ({ state, imgID, element }) => {
  const media = state.source.attachment[imgID];
  if (element === "equipo") {
    return (
      <>
        <img
          src={media.media_details.sizes.medium.source_url}
          alt={media.alt_text}
        />
      </>
    );
  } else if (element === "trabajo") {
    return (
      <>
        <img
          src={media.media_details.sizes.medium.source_url}
          alt={media.alt_text}
        />
      </>
    );
  }
};

export default connect(Featured);

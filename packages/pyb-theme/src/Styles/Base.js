import React from "react";
import { Global, css } from "frontity";
import bootstrapGlobalStyles from "bootstrap/dist/css/bootstrap.min.css";

const Base = () => {
  const mainBlack = "#0b0b0b";
  const mainBlue = "#39847e";
  const mainWhite = "#FFFFFF";
  const mainGrey = "#cbcbcb";

  return (
    <>
      <Global styles={bootstrapGlobalStyles} />
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            background-color: black;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            font-family: "Space Mono", monospace;
          }
          a {
            text-decoration: none;

            color: ${mainGrey};
          }
          img {
            display: block;
          }
        `}
      />
    </>
  );
};

export default Base;

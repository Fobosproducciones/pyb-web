import React from "react";
import { Global, css } from "frontity";
import bootstrapGlobalStyles from "bootstrap/dist/css/bootstrap.min.css";
import BarlowCondensed from "./Fonts/BarlowCondensed-Regular.ttf";
import HikouFont from "./Fonts/HikouOutline.ttf";
import HikouRegular from "./Fonts/Hikou-Regular.ttf";
import RobotoRegular from "./Fonts/RobotoCondensed-Regular.ttf";
import RobotoLight from "./Fonts/RobotoCondensed-Light.ttf";
const Base = () => {
  const mainBlack = "#030303";
  const mainBlue = "#39847e";
  const mainWhite = "#FFFFFF";
  const mainGrey = "#cbcbcb";

  return (
    <>
      <Global styles={bootstrapGlobalStyles} />
      <Global
        styles={css`
          @font-face {
            font-family: "Barlow Condensed";
            src: url("${BarlowCondensed}") format("truetype");
          }
          @font-face {
            font-family: "Hikou Outline";
            src: url("${HikouFont}") format("truetype");
          }
          @font-face {
            font-family: "Hikou Regular";
            src: url("${HikouRegular}") format("truetype");
          }
          @font-face {
            font-family: "Roboto Regular";
            src: url("${RobotoRegular}") format("truetype");
          }
          @font-face {
            font-family: "Roboto Light";
            src: url("${RobotoLight}") format("truetype");
          }
          html {
            font-size: 62.5%;
          }
          body {
            background-color: ${mainBlack};
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Barlow Condensed", sans-serif;
            font-family: "JetBrains Mono", monospace;
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

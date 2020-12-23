import React from "react";
import { connect, styled } from "frontity";
import Featured from "./Featured";
import SoundWave from "../assets/backwave.png";

const Post = ({ state, element, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2react = libraries.html2react.Component;

  if (element === "trabajo") {
    return (
      <>
        <StyledPostsContainer>
          <StyledWave src={SoundWave}></StyledWave>
          <StyledPostTitle>{post.title.rendered}</StyledPostTitle>
          <StyledPostP
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></StyledPostP>
          <StyledWave src={SoundWave}></StyledWave>
        </StyledPostsContainer>
      </>
    );
  } else if (element === "equipo") {
    return (
      <>
        <StyledPostsContainer>
          <StyledWave src={SoundWave}></StyledWave>
          <StyledPostTitle>{post.title.rendered}</StyledPostTitle>
          <StyledPostImg>
            <Featured imgID={post.featured_media} element="equipo" />
          </StyledPostImg>
          <StyledPostP
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></StyledPostP>
          <StyledWave src={SoundWave}></StyledWave>
        </StyledPostsContainer>
      </>
    );
  } else if (element === "contacto") {
    return (
      <>
        <StyledPostsContainer>
          <StyledWave src={SoundWave}></StyledWave>
          <StyledPostTitle>Contactanos</StyledPostTitle>
          <StyledPostP>
            Comunicate con nosotros. Dejanos tu consulta y te responderemos a la
            brevedad.
          </StyledPostP>
          <StyledContact>
            <Html2react html={post.content.rendered} />
          </StyledContact>
          <StyledWave src={SoundWave}></StyledWave>
        </StyledPostsContainer>
      </>
    );
  }
};

const StyledContact = styled.div`
  color: #cbcbcb;
  font-family: "Hikou Regular";
  font-size: 1rem;
  letter-spacing: 0.2rem;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  .wpcf7 input[type="text"],
  .wpcf7 input[type="email"],
  .wpcf7 textarea {
    background-color: #cbcbcb;
    border-radius: 2px;
    border: none;
  }
  .wpcf7 input[type="submit"] {
    color: #cbcbcb;
    background-color: #39847e;
    border: none;
    width: 100px;
    display: flex;
    letter-spacing: 0.1rem;
    justify-content: center;
    margin: 0 auto;
  }
  .wpcf7 form .wpcf7-response-output {
    margin: 2em 0.5em 1em;
    padding: 0.2em 1em;
    border: 2px solid #00a0d2; /* Blue */
  }

  .wpcf7 form.init .wpcf7-response-output {
    display: none;
  }

  .wpcf7 form.sent .wpcf7-response-output {
    border-color: #46b450; /* Green */
  }

  .wpcf7 form.failed .wpcf7-response-output,
  .wpcf7 form.aborted .wpcf7-response-output {
    border-color: #dc3232; /* Red */
  }

  .wpcf7 form.spam .wpcf7-response-output {
    border-color: #f56e28; /* Orange */
  }

  .wpcf7 form.invalid .wpcf7-response-output,
  .wpcf7 form.unaccepted .wpcf7-response-output {
    border-color: #ffb900; /* Yellow */
  }
`;

const StyledPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  overflow: hidden;
  background: linear-gradient(
    176deg,
    rgba(3, 3, 3, 1) 0%,
    rgba(52, 52, 52, 1) 100%
  );
`;

const StyledPostTitle = styled.h3`
  font-size: 2rem;
  color: #39847e;
  letter-spacing: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-family: "Hikou Regular";
  text-shadow: -3px 1px 2px black;
  z-index: 50;
  @media (max-width: 425px) {
    font-size: 2rem;
    width: 70%;
    letter-spacing: 0.5rem;
    line-height: 2rem;
    margin: 20px auto 1px;
  }
`;

const StyledPostImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 157px;
  margin-top: 20px;
  z-index: 1000;
  position: relative;
  background-color: white;
  border-radius: 10px;
  border: 3px solid #39847e;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.8);

  overflow: hidden;
  & img {
    width: 140px;
  }
`;

const StyledPostP = styled.div`
  color: #cbcbcb;
  font-size: 1.3rem;
  margin: 30px auto 10px;
  text-align: center;

  opacity: 0.8;
  width: 65%;
  font-family: "Roboto Regular";
  & iframe {
    width: 100%;
    height: 150%;
    border-radius: 10px;
    margin-top: -25px;
    margin-bottom: 25px;
    border: 3px solid #39847e;
  }
`;
const StyledWave = styled.img`
  width: 50px;
  display: flex;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
`;

export default connect(Post);

import React from "react";
import { connect, styled } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import Link from "../components/Link";

const ErrorPage = () => {
  return (
    <>
      <StyledContainer>
        <TitleContainer>
          <StyledTexto>404 </StyledTexto>
          <StyledIcon>
            <FontAwesomeIcon icon={faVolumeMute} />
          </StyledIcon>
        </TitleContainer>
        <div>
          <StyledP>No encontramos lo que buscabas.</StyledP>
        </div>
        <Link href="/">Volver al Home</Link>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 550px;

  overflow: hidden;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledTexto = styled.h2`
  font-size: 8rem;

  color: #cbcbcb;

  letter-spacing: 0.5rem;
  line-height: 2.5rem;
  font-weight: 300;
  font-family: "Hikou Regular";
  padding-right: 10px;
`;

const StyledIcon = styled.div`
  font-size: 6rem;
  color: #cbcbcb;
  opacity: 0.6;
`;

const StyledP = styled.div`
  color: #cbcbcb;
  font-size: 1.3rem;
  margin: 30px auto 50px;
  text-align: center;
  opacity: 0.8;
  width: 65%;
  font-family: "Roboto Regular";
`;

export default connect(ErrorPage);

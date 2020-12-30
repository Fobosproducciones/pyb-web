import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const StyledIcons = styled.img`
  height: 60px;
  opacity: 0.6;
  transition: all 0.2s;
  margin: 10px auto;

  & :hover {
    height: 100px;
  }
  @media (min-width: 400px) {
    height: 60px;
    & :hover {
      height: 80px;
    }
  }
  @media (min-width: 559px) {
    height: 85px;
  }
  @media (min-width: 880px) {
    margin-top: 45px;
    & :hover {
      height: 150px;
    }
  }
  @media (min-width: 1200px) {
    height: 120px;
  }
`;

const GearIcons = (props) => {
  return (
    <>
      <Link href={props.link}>
        <StyledIcons src={props.icono}></StyledIcons>
      </Link>
      <p>{props.description}</p>
    </>
  );
};

export default connect(GearIcons);

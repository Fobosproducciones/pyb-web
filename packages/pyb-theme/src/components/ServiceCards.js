import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";

const ServiceCards = (props) => {
  return (
    <>
      <Link href={props.link}>
        <Card style={{ backgroundImage: `url(${props.background})` }}>
          <CardTitle>
            <span> {props.title}</span>
          </CardTitle>
          <img src={props.icono}></img>
          <p>{props.description}</p>
        </Card>
      </Link>
    </>
  );
};

const CardTitle = styled.h4`
  font-family: "Hikou Regular";
  font-size: 1.2rem;
  letter-spacing: 0.6rem;
  width: 70%;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 5px black;

  z-index: 5;
`;

const Card = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 190px;
  height: 120px;
  opacity: 0.9;
  margin-top: 40px;

  background: ${(props) => `url(${props.background}) no-repeat top center,`};

  background-position: center center;
  background-repeat: no-repeat;
  background-size: 480px;
  border-radius: 10px;
  border: 1px solid #39847e;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.8),
    inset 0px 0px 7px 5px rgba(0, 0, 0, 0.6);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  & img {
    display: none;
  }
  & p {
    display: none;
  }

  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(3, 3, 3, 0.5662640056022409) 5%,
      rgba(255, 255, 255, 0) 37%
    );
  }
  &:before {
    content: "";
    background-color: rgba(black, 0.1);
    z-index: 0;
  }
  &:after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }
  &:hover {
    justify-content: center;
    & p {
      display: flex;
      z-index: 3;
      color: #cbcbcb;
      font-size: 1rem;
      font-family: "Roboto Regular";
    }
    & img {
      display: flex;
      width: 40px;
      z-index: 3;
      margin: auto;
      margin-bottom: 20px;
    }

    & h4 {
      display: none;
    }

    background-size: 210%;
    &:after {
      background-color: rgba(0, 0, 0, 0.9);
      color: white;
      font-size: 72px;
      z-index: 2;
    }

    & figcaption {
      transform: translateY(-110%);
    }
  }
`;

export default connect(ServiceCards);

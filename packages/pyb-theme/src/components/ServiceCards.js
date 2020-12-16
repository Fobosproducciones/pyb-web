import React from "react";
import { styled, connect } from "frontity";
import Link from "./Link";

const ServiceCards = (props) => {
  return (
    <>
      <Link href="/">
        <Card style={{ backgroundImage: `url(${props.background})` }}>
          <CardTitle>
            <span> {props.title}</span>
          </CardTitle>

          <p>{props.description}</p>
        </Card>
      </Link>
    </>
  );
};

const CardTitle = styled.h4`
  font-family: "Hikou Outline";
  font-size: 1.8rem;
  letter-spacing: 0.5rem;
  width: 70%;
  text-align: center;
  padding-bottom: 0.2rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.3);
`;

const Card = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 180px;
  height: 220px;
  opacity: 0.9;
  margin-top: 40px;
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 800px;
  border-radius: 10px;
  border: 0.5px solid #39847e;
  box-shadow: 0 7px 5px 1px rgba(0, 0, 0, 0.8),
    0 4px 35px 0.8px rgba(139, 139, 139, 0.2),
    inset 0px 0px 10px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;

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
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
  }
  &:hover {
    & p {
      display: flex;
      z-index: 3;
      color: #cbcbcb;
    }
    background-size: 210%;
    &:after {
      content: "♣︎";
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

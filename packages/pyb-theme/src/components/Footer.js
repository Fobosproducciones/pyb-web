import React from "react";
import { connect, styled } from "frontity";
import Foot from "../assets/foot4.png";
import FootHd from "../assets/foot10.png";
import YTLogo from "../assets/youtube.png";
import FBLogo from "../assets/facebook.png";
import INSTLogo from "../assets/instagram.png";
import Logo from "../assets/logo.png";

const FooterContainer = styled.div`
  height: 150px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url(${Foot}) no-repeat;
  background-size: 430px;
  background-position-x: center;

  @media (min-width: 400px) {
    background-size: 565px;
    height: 197px;
  }
  @media (min-width: 559px) {
    background-size: 800px;
    height: 245px;
  }
  @media (min-width: 900px) {
    background-size: 1000px;
    padding-top: 100px;
    height: 245px;
  }
  @media (min-width: 1000px) {
    background: url(${FootHd}) no-repeat;
    background-size: 1200px;
    background-position-x: center;
    height: 200px;
    padding-top: 120px;
    margin-top: -100px;
  }
  @media (min-width: 1200px) {
    background: url(${FootHd}) no-repeat;

    background-position-x: center;
    background-size: 1500px;
    height: 200px;
    padding-top: 150px;
    margin-top: -100px;
  }
  @media (min-width: 1600px) {
    background-size: 2100px;
    height: 300px;
    padding-top: 150px;
    margin-top: -200px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  & img {
    width: 20px;
    margin-top: 30px;
    @media (min-width: 400px) {
      width: 29px;
      margin-top: 45px;
    }
    @media (min-width: 559px) {
      margin-top: 75px;
    }
    @media (min-width: 1000px) {
      width: 40px;
      padding-bottom: 110px;
    }
  }
`;

const StyledLogo = styled.img`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1000px) {
    display: flex;
    width: 150px;
    top: 1930px;
  }
  @media (min-width: 1600px) {
    top: 2075px;
    width: 250px;
  }
`;

const StyledP = styled.p`
  margin-top: 25px;
  font-family: "Roboto Light";
  color: #cbcbcb;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SocialContainer>
          <a href="https://www.youtube.com/channel/UCwAvjMgmOdfvriY8SmpbHjQ">
            <img src={YTLogo}></img>
          </a>
          <a href="https://www.facebook.com/paloyalabolsaproducciones">
            <img src={FBLogo}></img>
          </a>
          <a href="https://www.instagram.com/paloyalabolsaestudio/">
            <img src={INSTLogo}></img>
          </a>
        </SocialContainer>
        <StyledP>Palo Y A La Bolsa © 2020 by Fobos</StyledP>
      </FooterContainer>
      <StyledLogo src={Logo}></StyledLogo>
    </>
  );
};

export default connect(Footer);

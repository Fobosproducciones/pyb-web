import React from "react";
import { connect, styled } from "frontity";
import Foot from "../assets/foot4.png";
import FootHd from "../assets/foot6.png";
import YTLogo from "../assets/youtube.png";
import FBLogo from "../assets/facebook.png";
import INSTLogo from "../assets/instagram.png";

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
  & p {
    margin-top: 25px;
    font-family: "Roboto Light";
    color: #cbcbcb;
    font-size: 0.5rem;
  }
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
    height: 300px;
    padding-top: 120px;
  }
  @media (min-width: 1200px) {
    background: url(${FootHd}) no-repeat;

    background-position-x: center;
    background-size: 1500px;
    height: 400px;
    padding-top: 170px;
  }
  @media (min-width: 1600px) {
    background-size: 2100px;
    height: 500px;
    padding-top: 230px;
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
    }
  }
`;

const GeneralBack = styled.div`
  background-color: #343434;
`;

const Footer = () => {
  return (
    <>
      <GeneralBack>
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
          <p>Fobos © 2020</p>
        </FooterContainer>
      </GeneralBack>
    </>
  );
};

export default connect(Footer);

import React from "react";
import { connect, styled } from "frontity";
import Foot from "../assets/foot4.png";
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
  background-size: 320px;
  background-position-x: center;

  & p {
    margin-top: 25px;
    font-family: "Roboto Light";
    color: #cbcbcb;
    font-size: 0.5rem;
  }
  @media (min-width: 321px) {
    background-size: 430px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 150px;

  & img {
    width: 20px;
    margin-top: 15px;
    @media (min-width: 321px) {
      margin-top: 30px;
    }
  }
  @media (min-width: 321px) {
    width: 220px;
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

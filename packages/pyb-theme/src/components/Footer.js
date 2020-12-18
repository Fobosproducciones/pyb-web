import React from "react";
import { connect, styled } from "frontity";
import Foot from "../assets/foot.png";

const FooterContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  background-color: rgba(52, 52, 52, 1);
`;

const FooterImg = styled.img`
  margin-top: 100px;
  width: 350px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterImg src={Foot}></FooterImg>
      </FooterContainer>
    </>
  );
};

export default connect(Footer);

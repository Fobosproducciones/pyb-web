import React, { useState } from "react";
import { connect, styled } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuModal from "./MenuModal";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledMenuButton = styled.button`
  text-decoration: none;
  border: none;
  color: ${({ open }) => (open ? "#39847e" : "#cbcbcb")};
  background-color: black;
  font-size: 2.4rem;
  overflow: hidden;
  display: none;
  z-index: 50;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const MenuButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledMenuButton open={open} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </StyledMenuButton>
      <MenuModal open={open} />
    </>
  );
};

export default connect(MenuButton);

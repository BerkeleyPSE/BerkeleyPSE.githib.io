import React from "react";

// node modules
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import DropdownUnit from "./DropdownUnit";
import HamburgerMenu from "./HamburgerMenu";
import { NAVBAR_INFO } from "./navbar_constants";
import { RowContainer } from "../components/ContainerStyles";
import { Image } from "../components/ImageStyles";
import { SiteHeader } from "../components/HeaderStyles";
import { ParaText } from "../components/TextStyles";

const Navbar = props => {
  const dropdownUnits = NAVBAR_INFO.map(item => {
    return (
      <DropdownUnit
        header={item.header}
        headerLink={item.headerLink}
        pages={item.pages}
        key={`nav_${item.header}`}
      />
    );
  });

  return (
    <NavbarContainer bgColor="#333">
      <LogoContainer to="/">
        <Image
          src="/images/logo.png"
          alt="Pi Sigma Epsilon logo"
          height="50px"
          width="89px"
        />
        <TextContainer>
          <SiteHeader>Pi Sigma Epsilon</SiteHeader>
          <Text alt>Zeta Chi Chapter</Text>
        </TextContainer>
      </LogoContainer>
      <DropdownUnitContainer>{dropdownUnits}</DropdownUnitContainer>
      <HamburgerMenuContainer>
        <HamburgerMenu />
      </HamburgerMenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = RowContainer.extend`
  height: 75px;
  justify-content: baseline;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 425px) {
    justify-content: left;
  }
`;

const LogoContainer = RowContainer.withComponent(Link).extend`
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextContainer = styled.div`
  color: #fff;
  padding-left: 20px;
`;

const Text = ParaText.extend`
  font-size: 1rem;
  margin: 0;
`;

const DropdownUnitContainer = RowContainer.extend`
  position: absolute;
  right: 0;
  padding-right: 10px;
  @media (max-width: 769px) {
    display: none !important;
  }
`;

const HamburgerMenuContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

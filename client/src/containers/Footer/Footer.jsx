import React from "react";

// node modules
import styled from "styled-components";
import SocialMediaBar from "react-social-media-bar";

// components
import FOOTER_INFO from "./Footer_Info";
import { RowContainer } from "../components/ContainerStyles";
import { ParaText } from "../components/TextStyles";
import { ExtLink } from "../components/LinkStyles";

const Footer = props => {
  return (
    <FooterContainer bgColor="#333">
      <MarginContainer>
        <Text alt>&#169;2017. Pi Sigma Epsilon, Zeta Chi Chapter.</Text>
      </MarginContainer>
      <SocialMediaBar
        icons={FOOTER_INFO}
        iconColor={"#FFF"}
        iconSize={"1.125rem"}
        hoverColor={"#FFD700"}
        margin={{ top: "5px", right: "7.5px", bottom: "5px", left: "7.5px" }}
      />
      <MarginContainer>
        <Text alt>
          Developed by
          <SelfLink to={"http://www.rahrang.xyz"} target="blank">
            {" "}
            Rahul Rangnekar
          </SelfLink>
        </Text>
      </MarginContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = RowContainer.extend`
  justify-content: space-between;
  padding: 5px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MarginContainer = styled.div`
  margin: 5px 10px;
`;

const Text = ParaText.extend`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
`;

const SelfLink = ExtLink.extend`
  color: #fff;
`;

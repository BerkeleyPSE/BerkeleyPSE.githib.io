import React from "react";

// node modules
import styled from "styled-components";

// components
import { RowContainer } from "./components/ContainerStyles";
import { ExtLink } from "./components/LinkStyles";
import { PageHeader } from "./components/HeaderStyles";
import { ParaText } from "./components/TextStyles";
import { Image } from "./components/ImageStyles";

// constants
const CONTACT_LIST = [
  {
    for: "general questions or inquiries",
    email: "berkeleypse.president@gmail.com"
  },
  {
    for: "corporate projects or sponsorship questions and inquiries",
    email: "berkeleypse.pr@gmail.com"
  },
  {
    for: "recruitment questions or concerns",
    email: "berkeleypse.recruiting@gmail.com"
  },
  {
    for: "social media or technical issues",
    email: "berkeleypse.marketing@gmail.com"
  }
];

const Contact = props => {
  document.title = "Contact - Pi Sigma Epsilon | Zeta Chi Chapter";

  const contactInfo = CONTACT_LIST.map((item, index) => {
    return (
      <Text>
        For {item.for}, please email{" "}
        <ExtLink href={`mailto:${item.email}`} key={index}>
          {item.email}
        </ExtLink>
        .
      </Text>
    );
  });

  return (
    <div id="contact-container">
      <RowContainer>
        <Image
          src="../images/campanile.jpg"
          alt="Pi Sigma Epsilon brotherhood"
        />
        <Header alt>Contact Us</Header>
      </RowContainer>
      <InfoContainer>{contactInfo}</InfoContainer>
    </div>
  );
};

export default Contact;

const Header = PageHeader.extend`
  font-size: 3rem;
  padding: 2rem 0;
  text-align: center;
  position: absolute;
  width: 100%;
`;

const Text = ParaText.extend`
  margin: 1rem 0;
`;

const InfoContainer = styled.div`
  padding: 1.25rem 2.5rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

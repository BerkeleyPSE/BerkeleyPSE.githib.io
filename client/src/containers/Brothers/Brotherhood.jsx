// React
import React from "react";

// node modules
import styled from "styled-components";

// components
import { BROTHER_INFO } from "./brotherhood_constants";
import { BrotherImage } from "./BrotherImage.jsx";
import { ColumnContainer } from "../components/ContainerStyles";
import { PageHeader } from "../components/HeaderStyles";

const Brotherhood = props => {
  document.title = "Brotherhood - Pi Sigma Epsilon | Zeta Chi Chapter";

  const allBrothers = Object.keys(BROTHER_INFO).map(brother => {
    return <BrotherImage brother={brother} key={brother} page="bros" />;
  });

  return (
    <div id="brotherhood-container">
      <LandingContainer>
        <Image
          src="../images/brotherhood.jpg"
          alt="Pi Sigma Epsilon brotherhood"
        />
        <Header alt>Our Brotherhood</Header>
      </LandingContainer>
      <AllBrothersContainer>{allBrothers}</AllBrothersContainer>
    </div>
  );
};

export default Brotherhood;

const LandingContainer = ColumnContainer.extend`
  margin-bottom: 30px;
`;

const Image = styled.img`
  max-width: 100%;
  position: relative;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  position: absolute;
  width: 100%;
  padding: 2rem 0;
`;

const AllBrothersContainer = styled.div`
  text-align: center;
`;

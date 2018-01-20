import React from "react";

// node modules
import styled from "styled-components";

// components
import { VP_LIST } from "./brotherhood_constants";
import { BrotherImage } from "./BrotherImage.jsx";
import { RowContainer } from "../components/ContainerStyles";
import { PageHeader } from "../components/HeaderStyles";
import { Image } from "../components/ImageStyles";

const Executives = props => {
  document.title = "Executive Board - Pi Sigma Epsilon | Zeta Chi Chapter";

  const topRowVPs = VP_LIST.slice(0, 3).map(brother => {
    return <BrotherImage brother={brother} key={brother} page="execs" />;
  });

  const bottomRowVPs = VP_LIST.slice(3).map(brother => {
    return <BrotherImage brother={brother} key={brother} page="execs" />;
  });

  return (
    <div id="brotherhood-container">
      <LandingContainer>
        <Image
          src="../images/executive_board.JPG"
          alt="Pi Sigma Epsilon executive board"
        />
        <Header alt>Executive Board</Header>
      </LandingContainer>
      <CenterTextContainer>
        <BrotherImage brother="kevin_phan" key="kevin_phan" page="execs" />
        <div id="VPs-top-row">{topRowVPs}</div>
        <div id="VPs-bottom-row">{bottomRowVPs}</div>
      </CenterTextContainer>
    </div>
  );
};

export default Executives;

const LandingContainer = RowContainer.extend`
  margin-bottom: 2rem;
`;

const CenterTextContainer = styled.div`
  text-align: center;
`;

const Header = PageHeader.extend`
  position: absolute;
  width: 100%;
`;

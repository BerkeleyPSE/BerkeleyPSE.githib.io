import React from "react";

// node modules
import styled from "styled-components";

// components
import { BROTHERS_PATH, EXECUTIVES_PATH } from "../Navbar/navbar_constants";
import { BROTHER_INFO } from "./brotherhood_constants";
import { IntLink } from "../components/LinkStyles";

export default class PageHandler extends React.Component {
  getIndices = index => {
    let { brotherList } = this.props;
    var prevIndex = -1;
    var nextIndex = -1;
    const numBrothers = brotherList.length - 1;
    if (index === 0) {
      prevIndex = numBrothers;
    } else {
      prevIndex = index - 1;
    }

    if (index === numBrothers) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    return [brotherList[prevIndex], brotherList[nextIndex]];
  };

  render() {
    let { page } = this.props;

    let bros = this.getIndices(this.props.index);
    let prevBro = "";
    let nextBro = "";
    if (!bros) {
      return null;
    } else {
      prevBro = bros[0];
      nextBro = bros[1];
    }

    let toPath = page === "bros" ? BROTHERS_PATH : EXECUTIVES_PATH;

    return (
      <PageHandlerContainer>
        <PrevLink to={`${toPath}/${prevBro}`}>
          <LeftIcon className="fa fa-chevron-left" aria-hidden="true" />
          {BROTHER_INFO[prevBro].name}
        </PrevLink>
        <NextLink to={`${toPath}/${nextBro}`}>
          {BROTHER_INFO[nextBro].name}
          <RightIcon className="fa fa-chevron-right" aria-hidden="true" />
        </NextLink>
      </PageHandlerContainer>
    );
  }
}

const PageHandlerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TempLink = IntLink.extend`
  border-bottom: 3px solid #333;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3125rem 0.125rem;
`;

const PrevLink = TempLink.extend`
  margin: 0 auto 0 0.625rem;
`;

const NextLink = TempLink.extend`
  margin: 0 1.5625rem 0 auto;
`;

const LeftIcon = styled.i`
  font-size: 0.9rem;
  padding: 0 0.3125rem 0 0;
`;

const RightIcon = styled.i`
  font-size: 0.9rem;
  padding: 0 0 0 0.3125rem;
`;

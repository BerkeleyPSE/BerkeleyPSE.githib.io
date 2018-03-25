import React from "react";

// node modules
import styled from "styled-components";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

// components
import { BROTHERS_PATH, EXECUTIVES_PATH } from "../Navbar/navbar_constants";
import { IntLink } from "../components/LinkStyles";

const PageHandler = props => {
  const { path, prevBro, nextBro } = props;
  return (
    <PageHandlerContainer>
      {!isEmpty(prevBro) && (
        <PrevLink to={`${path}/${prevBro.key}`}>
          <LeftIcon className="fa fa-chevron-left" aria-hidden="true" />
          {prevBro.name}
        </PrevLink>
      )}
      {!isEmpty(nextBro) && (
        <NextLink to={`${path}/${nextBro.key}`}>
          {nextBro.name}
          <RightIcon className="fa fa-chevron-right" aria-hidden="true" />
        </NextLink>
      )}
    </PageHandlerContainer>
  );
};

export default PageHandler;

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

// PropTypes
PageHandler.propTypes = {
  prevBro: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string
  }),
  nextBro: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string
  }),
  path: PropTypes.oneOf([BROTHERS_PATH, EXECUTIVES_PATH]).isRequired
};

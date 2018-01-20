import React from "react";

// node modules
import styled from "styled-components";
import PropTypes from "prop-types";

const MediaLink = props => {
  return (
    <Anchor href={props.href} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.media}`} aria-hidden="true" />
    </Anchor>
  );
};

export default MediaLink;

const Anchor = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #895fad;
  border-radius: 3px;
  color: #895fad;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 30px;
  width: 30px;
  padding: 5px;
  text-decoration: none;

  &:hover {
    background-color: #895fad;
    color: #fff;
  }
`;

MediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired
};

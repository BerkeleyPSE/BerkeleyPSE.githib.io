// React
import React from "react";

// node modules
import styled from "styled-components";

// components
import { RowContainer, ColumnContainer } from "../components/ContainerStyles";
import { IntButtonLink, ExtButtonLink } from "../components/LinkStyles";
import { ParaText } from "../components/TextStyles";

export default class AppBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  closeBanner = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      this.state.show && (
        <BannerContainer>
          <MessageContainer>
            <ParaText alt>Our Spring 2018 Application is open!</ParaText>
            <IntLink to={"/app"}>Apply</IntLink>
            <ExtLink href={"https://www.facebook.com/events/112518222782092/"}>
              RSVP
            </ExtLink>
          </MessageContainer>
          <CloseContainer onClick={this.closeBanner}>
            <i className="fa fa-times" aria-hidden="true" />
          </CloseContainer>
        </BannerContainer>
      )
    );
  }
}

const BannerContainer = RowContainer.extend`
  background-color: #818181;
  margin: auto;
  text-align: center;
  width: 100%;
  z-index: 2;
`;

const ExtLink = ExtButtonLink.extend`
  font-size: 0.9rem;
  margin: 0 0.625rem;
  padding: 0.125rem 0.625rem;
  text-transform: uppercase;
`;

const IntLink = IntButtonLink.extend`
  font-size: 0.9rem;
  margin: 0.625rem;
  padding: 0.125rem 0.625rem;
  text-transform: uppercase;
`;

const MessageContainer = ColumnContainer.extend`
  flex-grow: 1;
  padding: 0 1.25rem 0.25rem;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const CloseContainer = styled.div`
  cursor: pointer;
  font-size: 1.125rem;
  margin: 0 1.25rem 0 auto;
  padding: 0 0.625rem;

  &:hover {
    opacity: 0.5;
  }
`;

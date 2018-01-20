import React from "react";

// node modules
import styled from "styled-components";
import includes from "lodash/includes";
import PropTypes from "prop-types";

// components
import { BROTHER_INFO, ALL_EXECS_LIST } from "./brotherhood_constants";
import PageHandler from "./PageHandler";
import BrotherTable from "./BrotherTable";
import { ColumnContainer } from "../components/ContainerStyles";
import { PageHeader } from "../components/HeaderStyles";
import { Image } from "../components/ImageStyles";
import { ParaText } from "../components/TextStyles";
import MediaLink from "../components/MediaLink";

export default class Brother extends React.Component {
  broNotFound = () => {
    this.broNotFound = setTimeout(
      function() {
        this.props.history.push("/brothers");
      }.bind(this),
      250
    );
  };

  isExecsPath = () => {
    let { match } = this.props;
    return includes(match.path, "/eboard/");
  };

  render() {
    let brother = this.props.match.params.name;
    let broList = Object.keys(BROTHER_INFO);
    let page = "bros";
    if (this.isExecsPath()) {
      broList = ALL_EXECS_LIST;
      page = "execs";
    }
    let broIndex = broList.indexOf(brother);
    let bro = BROTHER_INFO[brother];

    if (!bro) {
      this.broNotFound();
      return null;
    }

    document.title = `${bro.name} - Pi Sigma Epsilon | Zeta Chi Chapter`;

    return (
      <div id="brother-container">
        <ProfileContainer>
          <ImageContainer>
            <BroImage src={`../${bro.img}`} border alt={bro.name} />
          </ImageContainer>
          <BroInfoContainer>
            <PageHandler index={broIndex} brotherList={broList} page={page} />
            <BroHeaderContainer>
              <Name>{bro.name}</Name>
              <Position>{bro.position}</Position>
            </BroHeaderContainer>
            <BrotherTable bro={bro} />
            <BroBio>{bro.bio}</BroBio>
            <BroMediaContainer>
              <MediaLink href={bro.linkedin} media="linkedin" />
            </BroMediaContainer>
          </BroInfoContainer>
        </ProfileContainer>
      </div>
    );
  }
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const BroInfoContainer = ColumnContainer.extend`
  justify-content: normal;
  width: 100%;
`;

const BroHeaderContainer = styled.div`
  letter-spacing: 0.025rem;
  padding: 0.625rem 1.25rem;
  text-align: center;
`;

const Name = PageHeader.extend`
  font-size: 3rem;
  font-weight: 700;
  padding: 0.625rem 0 0.3125rem 0;
`;

const Position = styled.h3`
  color: #818181;
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const BroImage = Image.extend`
  @media (min-width: 325px) {
    width: 325px;
    height: 485px;
  }

  @media (min-width: 425px) {
    width: 402px;
    height: 600px;
  }
`;

const BroBio = ParaText.extend`
  color: #818181;
  line-height: 1.65rem;
  margin: 15px auto;
  width: 80%;
`;

const BroMediaContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// PropTypes

Brother.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

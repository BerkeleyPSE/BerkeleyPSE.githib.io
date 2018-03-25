import React from "react";

// node modules
import { connect } from "react-redux";
import styled from "styled-components";
import includes from "lodash/includes";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

// components
import PageHandler from "./PageHandler";
import BrotherTable from "./BrotherTable";
import { ColumnContainer } from "../components/ContainerStyles";
import { PageHeader } from "../components/HeaderStyles";
import { Image } from "../components/ImageStyles";
import { ParaText } from "../components/TextStyles";
import MediaLink from "../components/MediaLink";
import { BROTHERS_PATH, EXECUTIVES_PATH } from "../Navbar/navbar_constants";

// actions
import { DataActions } from "../../actions/data-actions";

// constants
const IMAGE_URL =
  "https://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip.progressive,q_auto:best/brothers";

class Brother extends React.Component {
  componentDidMount() {
    const { brothers, executives } = this.props.data;
    const { getBrothers } = this.props;
    if (!brothers.length || !executives.length) getBrothers();
  }

  getPath = () => {
    const { match } = this.props;
    return includes(match.path, EXECUTIVES_PATH)
      ? EXECUTIVES_PATH
      : BROTHERS_PATH;
  };

  getBrosList = () => {
    const { match } = this.props;
    const { brothersList, executivesList } = this.props.data;
    return includes(match.path, EXECUTIVES_PATH)
      ? executivesList
      : brothersList;
  };

  getSurroundingBros = broKey => {
    const { brothers } = this.props.data;
    const broList = this.getBrosList();
    if (!broList.length) return null;
    const index = broList.indexOf(broKey);
    if (index === -1) return null;

    let prevBroKey, nextBroKey;
    const numBros = broList.length - 1;

    if (index === 0) {
      prevBroKey = broList[numBros];
      nextBroKey = broList[index + 1];
    } else if (index === numBros) {
      prevBroKey = broList[index - 1];
      nextBroKey = broList[0];
    } else {
      prevBroKey = broList[index - 1];
      nextBroKey = broList[index + 1];
    }

    const prevBro = {
      key: prevBroKey,
      name: brothers[prevBroKey].name
    };
    const nextBro = {
      key: nextBroKey,
      name: brothers[nextBroKey].name
    };

    return [prevBro, nextBro];
  };

  render() {
    const { brothers } = this.props.data;
    if (isEmpty(brothers)) return null;

    const broKey = this.props.match.params.name;
    const activeBro = brothers[broKey] || {};
    if (isEmpty(activeBro)) return null;

    const [prevBro, nextBro] = this.getSurroundingBros(broKey);

    document.title = `${activeBro.name} - Pi Sigma Epsilon | Zeta Chi Chapter`;

    return (
      <div id="brother-container">
        <ProfileContainer>
          <ImageContainer>
            <BroImage
              src={`${IMAGE_URL}/${activeBro.key}.jpg`}
              alt={activeBro.name}
              border
            />
          </ImageContainer>
          <BroInfoContainer>
            <PageHandler
              path={this.getPath()}
              prevBro={prevBro || {}}
              nextBro={nextBro || {}}
            />
            <BroHeaderContainer>
              <Name>{activeBro.name}</Name>
              <Position>{activeBro.position.label || "Active"}</Position>
            </BroHeaderContainer>
            <BrotherTable
              name={activeBro.name}
              year={activeBro.year}
              hometown={activeBro.hometown}
              class={activeBro.pseClass}
              major={activeBro.majors}
              minor={activeBro.minors}
              careerInterests={activeBro.careerInterests}
              previousPositions={activeBro.previousPositions}
            />
            <BroBio>{activeBro.bio}</BroBio>
            <BroMediaContainer>
              {Object.entries(activeBro.mediaUrls).map(site => {
                const [key, info] = site;
                if (isEmpty(info.value)) return null;
                return <MediaLink key={`${activeBro.name}_${key}`} {...info} />;
              })}
            </BroMediaContainer>
          </BroInfoContainer>
        </ProfileContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.data
});

export default connect(mapStateToProps, DataActions)(Brother);

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

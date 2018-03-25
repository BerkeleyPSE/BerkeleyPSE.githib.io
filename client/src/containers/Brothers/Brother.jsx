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
    const { brothers, activeBrother } = this.props.data;
    const { getBrothers, getActiveBrother } = this.props;
    if (!brothers.length) getBrothers();

    const broKey = this.props.match.params.name;
    if (isEmpty(activeBrother)) {
      getActiveBrother(broKey);
      this.getSurroundingBros(broKey);
    }
  }

  componentWillReceiveProps(nextProps) {
    const broKey = this.props.match.params.name;
    const nextBroKey = nextProps.match.params.name;
    if (broKey !== nextBroKey) {
      this.props.getActiveBrother(nextBroKey);
      this.getSurroundingBros(nextBroKey);
    }
  }

  getPath = () => {
    const { match } = this.props;
    if (includes(match.path, EXECUTIVES_PATH)) return EXECUTIVES_PATH;
    return BROTHERS_PATH;
  };

  getBrosList = () => {
    const { match } = this.props;
    const { brothersList, executivesList } = this.props.data;
    if (includes(match.path, EXECUTIVES_PATH)) return executivesList;
    return brothersList;
  };

  getSurroundingBros = async broKey => {
    const { getPrevBro, getNextBro } = this.props;

    const brotherList = this.getBrosList();
    if (!brotherList.length) return null;
    const index = brotherList.indexOf(broKey);
    if (index === -1) return null;

    let prevBroKey, nextBroKey;
    const numBros = brotherList.length - 1;

    if (index === 0) {
      prevBroKey = brotherList[numBros];
      nextBroKey = brotherList[index + 1];
    } else if (index === numBros) {
      prevBroKey = brotherList[index - 1];
      nextBroKey = brotherList[0];
    } else {
      prevBroKey = brotherList[index - 1];
      nextBroKey = brotherList[index + 1];
    }

    await getPrevBro(prevBroKey);
    await getNextBro(nextBroKey);

    return null;
  };

  render() {
    const { data } = this.props;
    const { activeBrother, prevBro, nextBro } = data;

    if (isEmpty(activeBrother)) {
      return null;
    }

    document.title = `${
      activeBrother.name
    } - Pi Sigma Epsilon | Zeta Chi Chapter`;

    return (
      <div id="brother-container">
        <ProfileContainer>
          <ImageContainer>
            <BroImage
              src={`${IMAGE_URL}/${activeBrother.key}.jpg`}
              alt={activeBrother.name}
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
              <Name>{activeBrother.name}</Name>
              <Position>{activeBrother.position.label || "Active"}</Position>
            </BroHeaderContainer>
            <BrotherTable
              name={activeBrother.name}
              year={activeBrother.year}
              hometown={activeBrother.hometown}
              class={activeBrother.pseClass}
              major={activeBrother.majors}
              minor={activeBrother.minors}
              careerInterests={activeBrother.careerInterests}
              previousPositions={activeBrother.previousPositions}
            />
            <BroBio>{activeBrother.bio}</BroBio>
            <BroMediaContainer>
              {Object.entries(activeBrother.mediaUrls).map(site => {
                const [key, info] = site;
                if (isEmpty(info.value)) return null;
                return (
                  <MediaLink key={`${activeBrother.name}_${key}`} {...info} />
                );
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

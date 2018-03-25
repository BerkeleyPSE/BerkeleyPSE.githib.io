import React, { Component } from "react";

// node modules
import { connect } from "react-redux";
import styled from "styled-components";

// components
import { BrotherImage } from "./BrotherImage.jsx";
import { RowContainer } from "../components/ContainerStyles";
import { PageHeader } from "../components/HeaderStyles";
// import { Image } from '../components/ImageStyles';
import { EXECUTIVES_PATH } from "../Navbar/navbar_constants";

// actions
import { DataActions } from "../../actions/data-actions.js";

class Executives extends Component {
  componentDidMount() {
    document.title = "Executive Board - Pi Sigma Epsilon | Zeta Chi Chapter";
    this.props.getBrothers();
  }

  render() {
    const { executives } = this.props.data;

    const president = executives.filter(
      bro => bro.position.value === "president"
    )[0];
    const presIndex = executives.indexOf(president);
    const vps = [
      ...executives.slice(0, presIndex),
      ...executives.slice(presIndex + 1)
    ];

    const topRowVPs = vps.slice(0, 3).map(brother => {
      return (
        <BrotherImage
          brother={brother}
          key={`${EXECUTIVES_PATH}_${brother._id}`}
          path={EXECUTIVES_PATH}
        />
      );
    });

    const bottomRowVPs = vps.slice(3).map(brother => {
      return (
        <BrotherImage
          brother={brother}
          key={`${EXECUTIVES_PATH}_${brother._id}`}
          path={EXECUTIVES_PATH}
        />
      );
    });

    return (
      <div id="brotherhood-container">
        <LandingContainer>
          {/* <Image
            src="../images/executive_board.JPG"
            alt="Pi Sigma Epsilon executive board"
          /> */}
          <PageHeader>Executive Board</PageHeader>
        </LandingContainer>
        <CenterTextContainer>
          <BrotherImage
            brother={president}
            key={president._id}
            path={EXECUTIVES_PATH}
          />
          <div id="VPs-top-row">{topRowVPs}</div>
          <div id="VPs-bottom-row">{bottomRowVPs}</div>
        </CenterTextContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.data
});

export default connect(mapStateToProps, DataActions)(Executives);

const LandingContainer = RowContainer.extend`
  margin-bottom: 2rem;
`;

const CenterTextContainer = styled.div`
  text-align: center;
`;

// const Header = PageHeader.extend`
//   position: absolute;
//   width: 100%;
// `;

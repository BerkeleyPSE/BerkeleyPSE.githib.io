import React, { Component } from "react";

// node modules
import { connect } from "react-redux";
import styled from "styled-components";

// components
import { BrotherImage } from "./BrotherImage.jsx";
import { ColumnContainer } from "../components/ContainerStyles";
import { PageHeader } from "../components/HeaderStyles";

// actions
import { DataActions } from "../../actions/data-actions.js";

class Brotherhood extends Component {
  componentDidMount() {
    document.title = "Brotherhood - Pi Sigma Epsilon | Zeta Chi Chapter";
    this.props.getBrothers();
  }

  render() {
    const { brothers } = this.props.data;

    const allBrothers = brothers.map(brother => {
      return <BrotherImage brother={brother} key={brother._id} page="bros" />;
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.data
});

export default connect(mapStateToProps, DataActions)(Brotherhood);

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

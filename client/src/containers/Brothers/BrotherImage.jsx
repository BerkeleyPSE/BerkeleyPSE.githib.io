import React from "react";

// node modules
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components
import { BROTHER_INFO } from "./brotherhood_constants";
import { BROTHERS_PATH, EXECUTIVES_PATH } from "../Navbar/navbar_constants";
import { ColumnContainer } from "../components/ContainerStyles";
import { Image } from "../components/ImageStyles";

// constants
const IMAGE_PATH = "images/brothers";

export class BrotherImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const { brother, page } = this.props;
    let { hover } = this.state;
    const bro = BROTHER_INFO[brother];

    if (!bro) {
      return null;
    }

    const isBrosPage = page === "bros";
    const toPath = isBrosPage ? BROTHERS_PATH : EXECUTIVES_PATH;

    return (
      <BrotherImageContainer
        to={`${toPath}/${brother}`}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <BroContainer>
          <Image
            src={`${IMAGE_PATH}/${brother}.jpg`}
            alt={bro.name}
            height="425px"
            width="285px"
          />
          <Overlay hover={hover} isBrosPage>
            <Name>{bro.name}</Name>
            <DividerLine />
            <Position>{bro.position || "Active"}</Position>
          </Overlay>
        </BroContainer>
      </BrotherImageContainer>
    );
  }
}

const BrotherImageContainer = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
`;

const BroContainer = ColumnContainer.extend`
  position: relative;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  height: 135px;
  width: 100%;

  display: ${props => (props.hover || !props.isBrosPage ? "block" : "none")};
  @media (max-device-width: 425px) {
    display: block;
  }
`;

const Name = styled.p`
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.025rem;
  padding: 0.3125rem 0;
  margin: 1rem 0;
`;

const DividerLine = styled.hr`
  color: #fff;
  border: 1px solid #895fad;
  width: 60%;
`;

const Position = styled.p`
  color: #fff;
  font-family: Open Sans, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  margin: 1rem auto;
  padding: 0 0.625rem;
  text-transform: uppercase;
`;

// PropTypes

BrotherImage.propTypes = {
  brother: PropTypes.string.isRequired,
  page: PropTypes.oneOf(["execs", "bros"])
};

import React from "react";

// node modules
import { StyleSheet, css } from "aphrodite";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import { animations } from "../../stylesheets/Animations.js";
import { brotherInfo } from "./brotherhood_constants";
import { BROTHERS_PATH, EXECUTIVES_PATH } from "../Navbar/Navbar_Info";
import { ColumnContainer } from "../components/ContainerStyles";
import { Image } from "../components/ImageStyles";

export class BrotherImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    let { brother, page } = this.props;
    let { hover } = this.state;
    var bro = brotherInfo[brother];

    if (!bro) {
      return null;
    }

    let isBrosPage = page === "bros";
    let toPath = isBrosPage ? BROTHERS_PATH : EXECUTIVES_PATH;

    return (
      <BrotherImageContainer
        to={`${toPath}/${brother}`}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <BroContainer>
          <Image src={bro.img} alt={bro.name} height="100%" width="100%" />
          <Overlay hover={hover} isBrosPage>
            <p className={css(styles.broName, animations.slideInLeft)}>
              {bro.name}
            </p>
            <hr className={css(styles.hr)} />
            <p className={css(styles.broPosition, animations.slideInRight)}>
              {bro.position}
            </p>
          </Overlay>
          {/* {(hover || !isBrosPage) && (
            <div className={css(styles.overlay)}>
              <p className={css(styles.broName, animations.slideInLeft)}>
                {bro.name}
              </p>
              <hr className={css(styles.hr)} />
              <p className={css(styles.broPosition, animations.slideInRight)}>
                {bro.position}
              </p>
            </div>
          )}
          {isBrosPage && (
            <div className={css(styles.mobileBro)}>
              <p className={css(styles.mobileName)}>{bro.name}</p>
              <hr className={css(styles.hr)} />
              <p className={css(styles.mobilePosition)}>{bro.position}</p>
            </div>
          )} */}
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
`;
// the media query is problematic when applied to Overlay
// @media (min-device-width: 425px) {
//   display: none
// }

const styles = StyleSheet.create({
  broName: {
    color: "#FFF",
    fontFamily: "Lato, sans-serif",
    fontSize: "1.25em",
    letterSpacing: "0.025em",
    margin: "15px auto"
  },

  mobileName: {
    color: "#FFF",
    fontFamily: "Lato, sans-serif",
    fontSize: "1.25em",
    letterSpacing: "0.025em",
    padding: "5px 0",
    margin: "15px auto"
  },

  hr: {
    color: "#FFF",
    border: "1px solid #895FAD",
    width: "60%"
  },

  broPosition: {
    color: "#FFF",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    fontWeight: "500",
    letterSpacing: "0.025em",
    margin: "15px auto",
    padding: "0 10px",
    textTransform: "uppercase"
  },

  mobilePosition: {
    color: "#FFF",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    fontWeight: "500",
    letterSpacing: "0.025em",
    padding: "5px 0",
    margin: "15px auto",
    textTransform: "uppercase"
  },

  mobileBro: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#303030",
    position: "absolute",
    bottom: "0",
    margin: "0",
    padding: "20px 0",
    height: "135px",
    width: "100%",
    "@media (min-device-width: 425px)": {
      display: "none"
    }
  }
});

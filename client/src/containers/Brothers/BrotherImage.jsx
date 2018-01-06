// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

// Local Helper Files & Components
import { animations } from "../../stylesheets/Animations.js";
import { brotherInfo } from "./brotherhood_constants";
import { BROTHERS_PATH, EXECUTIVES_PATH } from "../Navbar/Navbar_Info";

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

    let toPath = page === "bros" ? BROTHERS_PATH : EXECUTIVES_PATH;

    return (
      <Link
        to={toPath + "/" + brother}
        className={css(styles.broLink)}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <div className={css(styles.broContainer)}>
          <img src={bro.img} className={css(styles.broImg)} alt={bro.name} />
          {(hover || page === "execs") && (
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
          {page === "bros" && (
            <div className={css(styles.mobileBro)}>
              <p className={css(styles.mobileName)}>{bro.name}</p>
              <hr className={css(styles.hr)} />
              <p className={css(styles.mobilePosition)}>{bro.position}</p>
            </div>
          )}
        </div>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  broLink: {
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none"
  },

  broContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },

  broImg: {
    width: "100%",
    height: "100%"
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    bottom: "0",
    height: "135px",
    width: "100%"
  },

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

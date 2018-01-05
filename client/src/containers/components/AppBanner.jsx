// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

// Local Helper Files & Components
import { animations } from "../../stylesheets/Animations.js";

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
        <div
          className={css(animations.slideInRight, styles.appBannerContainer)}
        >
          <div className={css(styles.messageContainer)}>
            <p className={css(styles.message)}>
              Our Fall 2017 Application is open!
            </p>
            <Link to={"/app"} className={css(styles.linkButton)}>
              Apply
            </Link>
            <Link
              to={"https://www.facebook.com/events/112518222782092/"}
              className={css(styles.linkButton)}
              target="blank"
            >
              RSVP
            </Link>
          </div>
          <div
            className={css(styles.closeContainer)}
            onClick={this.closeBanner}
          >
            <i
              className={css(styles.closeIcon) + " fa fa-times"}
              aria-hidden="true"
            />
          </div>
        </div>
      )
    );
  }
}

const styles = StyleSheet.create({
  appBannerContainer: {
    backgroundColor: "#818181",
    // borderBottom: '2px solid #303030',
    color: "#FFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1em",
    margin: "auto",
    textAlign: "center",
    width: "100%",
    zIndex: "2"
  },

  messageContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    "@media(min-width: 600px)": {
      flexDirection: "row"
    }
  },

  message: {
    margin: "0",
    padding: "5px 20px",
    textAlign: "center"
  },

  linkButton: {
    border: "2px solid #FFF",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875em",
    margin: "0 10px",
    padding: "3px 10px",
    textDecoration: "none",
    textTransform: "uppercase",
    ":hover": {
      backgroundColor: "#FFF",
      color: "#895FAD"
    }
  },

  closeContainer: {
    cursor: "pointer",
    margin: "0 20px 0 auto",
    padding: "0 10px",
    ":hover": {
      opacity: "0.5"
    }
  },

  closeIcon: {
    fontSize: "1.125em"
  }
});

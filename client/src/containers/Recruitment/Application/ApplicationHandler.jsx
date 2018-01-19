// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import isUndefined from "lodash/isUndefined";

// Local Helper Files & Components
import { animations } from "../../../stylesheets/Animations.js";
import Application from "./app_is_open/Application";
import PreregistrationForm from "./app_is_closed/PreregistrationForm";
import { AppActions } from "../../../actions/app-actions.js";

const APP_IS_OPEN = true;

const ApplicationHandler = props => {
  document.title = "Application - Pi Sigma Epsilon | Zeta Chi Chapter";
  let { appReducer } = props;
  return (
    <div className={css(styles.appContainer, animations.fadeIn)}>
      {APP_IS_OPEN ? (
        <Application
          appReducer={appReducer}
          submitApp={props.submitApplication}
        />
      ) : (
        <div>
          <h1 className={css(styles.header)}>Spring 2018 Pre-Registration</h1>
          <p className={css(styles.description)}>
            Our Fall 2017 Application is now closed. Thank you for applying!
            <br />
            If you would like notifications for our Spring 2018 recruitment
            events, please enter your name and email below.
          </p>
          {!isUndefined(appReducer.formSubmitSuccess) ? (
            appReducer.formSubmitSuccess === true ? (
              <p className={css(styles.successMessage)}>
                Your information was submitted successfully. We'll notify you
                when our recruitment calendar is released. Thanks!
              </p>
            ) : (
              <p className={css(styles.successMessage)}>
                Something went wrong with your submission. Please refresh this
                page and try again.
              </p>
            )
          ) : (
            <PreregistrationForm submitForm={props.submitForm} />
          )}
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { appReducer: state.app };
}

export default connect(mapStateToProps, AppActions)(ApplicationHandler);

const styles = StyleSheet.create({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    color: "#895FAD",
    fontFamily: "Lato, sans-serif",
    fontSize: "3em",
    fontWeight: "500",
    margin: "0",
    padding: "30px 0",
    textAlign: "center"
  },

  description: {
    color: "#303030",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1em",
    margin: "0",
    textAlign: "center"
  },

  successMessage: {
    color: "#895FAD",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1.5em",
    margin: "40px 20px",
    textAlign: "center"
  }
});

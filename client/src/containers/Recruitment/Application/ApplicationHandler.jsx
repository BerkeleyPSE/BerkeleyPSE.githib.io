import React from "react";

// node modules
import { connect } from "react-redux";
import PropTypes from "prop-types";

// components
import { ColumnContainer } from "../../components/ContainerStyles";
import Application from "./app_is_open/Application";
import Preregistration from "./app_is_closed/Preregistration";
import { AppActions } from "../../../actions/app-actions.js";

const APP_IS_OPEN = false;

const ApplicationHandler = props => {
  document.title = "Application - Pi Sigma Epsilon | Zeta Chi Chapter";
  let { appReducer } = props;
  return (
    <ColumnContainer id="application-handler-container">
      {APP_IS_OPEN ? (
        <Application
          appReducer={appReducer}
          submitApp={props.submitApplication}
        />
      ) : (
        <Preregistration
          appReducer={appReducer}
          submitForm={props.submitForm}
        />
      )}
    </ColumnContainer>
  );
};

function mapStateToProps(state) {
  return { appReducer: state.app };
}

export default connect(mapStateToProps, AppActions)(ApplicationHandler);

// PropTypes

ApplicationHandler.propTypes = {
  appReducer: PropTypes.object.isRequired
};

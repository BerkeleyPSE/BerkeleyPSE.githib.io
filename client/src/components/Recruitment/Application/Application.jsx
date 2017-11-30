// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import * as _ from 'lodash';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';
import ApplicationForm from './ApplicationForm';
import PreregistrationForm from './PreregistrationForm';
import { AppActions } from '../../../actions/app-actions.js';

const IS_APP_OPEN = false;

const Application = props => {
  document.title = 'Application - Pi Sigma Epsilon | Zeta Chi Chapter';
  let { appReducer } = props;
  return (
    <div className={css(styles.appContainer, animations.fadeIn)}>
      {IS_APP_OPEN ? (
        <div>
          <h1 className={css(styles.header)}>Spring 2018 Application</h1>
          <p className={css(styles.description)}>
            Please fill out all fields.
            <br />
            The deadline is January 31st, 2018 at 11:59pm. Good luck!
          </p>
          {!_.isUndefined(appReducer.appSubmitSuccess) ? (
            appReducer.formSubmitSuccess === true ? (
              <p className={css(styles.successMessage)}>
                Your application was submitted successfully. We'll notify you
                about the next steps on February 1st. Thanks!
              </p>
            ) : (
              <p className={css(styles.successMessage)}>
                Something went wrong with your application submission. Please
                refresh this page and try again.
              </p>
            )
          ) : (
            <ApplicationForm submitApp={props.submitApplication} />
          )}
        </div>
      ) : (
        <div>
          <h1 className={css(styles.header)}>Spring 2018 Pre-Registration</h1>
          <p className={css(styles.description)}>
            Our Fall 2017 Application is now closed. Thank you for applying!
            <br />
            If you would like notifications for our Spring 2018 recruitment
            events, please enter your name and email below.
          </p>
          {!_.isUndefined(appReducer.formSubmitSuccess) ? (
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

export default connect(mapStateToProps, AppActions)(Application);

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  description: {
    color: '#303030',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    margin: '0',
    textAlign: 'center'
  },

  successMessage: {
    color: '#895FAD',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.5em',
    margin: '40px 20px',
    textAlign: 'center'
  }
});

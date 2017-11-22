// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';
import ApplicationForm from './ApplicationForm';
import ApplicationReview from './ApplicationReview';
import PreregistrationForm from './PreregistrationForm';

const IS_APP_OPEN = false;

export default class Application extends React.Component {
  render() {
    document.title = 'Application - Pi Sigma Epsilon | Zeta Chi Chapter';

    return (
      <div className={css(styles.appContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Spring 2018 Pre-Registration</h1>
        {IS_APP_OPEN ? (
          <div>
            <ApplicationForm />
          </div>
        ) : (
          <div>
            <p className={css(styles.description)}>
              Our Fall 2017 Application is now closed. Thank you for applying!
              <br />
              If you would like notifications for our Spring 2018 recruitment
              events, please enter your name and email below.
            </p>
            <PreregistrationForm />
          </div>
        )}
      </div>
    );
  }
}

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
  }
});

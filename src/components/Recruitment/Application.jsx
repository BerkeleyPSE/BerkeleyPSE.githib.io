// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class Application extends React.Component {
  render() {
    document.title = 'Application - Pi Sigma Epsilon | Zeta Chi Chapter';

    return (
      <div className={css(styles.appContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Fall 2017 Application</h1>
        <p className={css(styles.description)}>
          The Fall 2017 Application will open after our Meet the Chapter event.
          <br />
          If you would like notifications for our recruitment events, please
          enter your email below.
        </p>
        <div className={css(styles.formContainer)}>
          <iframe
            title="Fall 2017 Pre-Registration"
            className="center-block"
            src="https://docs.google.com/a/berkeley.edu/forms/d/e/1FAIpQLSfua72kmqeFJYEpLEZiuUd30vMqJWxUuqKxCQ_tHExJoerndg/viewform?embedded=true"
            width="100%"
            height="950"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </div>
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
  },

  formContainer: {
    padding: '20px 0',
    width: '800px',
    '@media(max-width: 768px)': {
      width: '100%'
    }
  }
});

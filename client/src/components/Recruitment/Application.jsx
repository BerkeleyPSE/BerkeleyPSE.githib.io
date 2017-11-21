// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
// import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appOpen: true // change to false
    };
  }

  createInput = (label, placeholder) => {
    return (
      <div className={css(formStyles.container)}>
        <label className={css(formStyles.inputLabel)}>{label}</label>
        <input className={css(formStyles.input)} placeholder={placeholder} />
      </div>
    );
  };

  render() {
    document.title = 'Application - Pi Sigma Epsilon | Zeta Chi Chapter';

    return (
      <div className={css(styles.appContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Spring 2018 Pre-Registration</h1>
        {this.state.appOpen ? (
          <div>
            <form>
              {this.createInput('Name', 'ex: Rahul Rangnekar')}
              {this.createInput(
                'Berkeley Email',
                'ex: rrangnekar@berkeley.edu'
              )}
              {this.createInput('Phone Number', 'ex: (123) 456-7890')}
              {this.createInput('Year', 'ex: 2021')}
              {this.createInput('Major(s)', 'Intended Business')}
              {this.createInput('Minor(s)', 'Psychology')}
            </form>
          </div>
        ) : (
          <div>
            <p className={css(styles.description)}>
              Our Fall 2017 Application is now closed. Thank you for applying!
              <br />
              If you would like notifications for our Spring 2018 recruitment
              events, please enter your email below.
            </p>
            <div className={css(styles.formContainer)}>
              <iframe
                title="Spring 2018 Pre-Registration"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfxJ_d4BCstJX-Cr8F22owitnbLyQs3Udzn2vHq8Lfz7VWpqw/viewform?embedded=true"
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
  },

  formContainer: {
    padding: '20px 0',
    width: '800px',
    '@media(max-width: 768px)': {
      width: '100%'
    }
  },

  link: {
    textDecoration: 'none',
    color: '#895FAD',
    ':hover': {
      color: '#FFD700'
    }
  },

  imageContainer: {
    border: '3px solid #895FAD',
    margin: '20px 0',
    width: '800px',
    '@media(max-width: 768px)': {
      width: '100%'
    }
  },

  appImage: {
    width: '100%',
    height: '100%'
  }
});

const formStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '15px 0'
  },

  inputLabel: {
    borderBottom: '1px solid #895FAD',
    color: '#333',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.875em',
    margin: '5px 0',
    textTransform: 'uppercase'
  },

  input: {
    border: 'none',
    borderBottom: '3px solid #333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    outline: 'none',
    padding: '2px 3px',
    width: '300px',
    ':focus': {
      border: 'none',
      borderBottom: '3px solid #895FAD'
    }
  },

  textarea: {}
});

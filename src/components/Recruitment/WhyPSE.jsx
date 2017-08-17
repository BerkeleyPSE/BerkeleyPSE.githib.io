// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class WhyPSE extends React.Component {
  render() {
    return (
      <div className={css(styles.whyPSEContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Why Pi Sigma Epsilon?</h1>
        <div className={css(styles.bodyContainer)}>
          <div className={css(styles.section, styles.darkBackground)}>
            <p className={css(styles.description, styles.lightDescription)} />
          </div>
          <div className={css(styles.section)}>
            <h2 className={css(styles.sectionHeader)}>Rahul's Testimonial</h2>
            <div className={css(styles.descriptionContainer)}>
              <p className={css(styles.description, styles.darkDescription)} />
            </div>
          </div>
          <div className={css(styles.section)} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  whyPSEContainer: {},

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  bodyContainer: {},

  section: {},

  darkBackground: {
    backgroundColor: '#303030'
  },

  lightBackground: {
    backgroundColor: '#FFF'
  },

  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
    textAlign: 'left',
    '@media (max-width: 1200px)': {
      flexDirection: 'column'
    }
  },

  description: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500',
    padding: '0 20px'
  },

  darkDescription: {
    backgroundColor: '#303030'
  },

  lightDescription: {
    color: '#FFF'
  },

  sectionHeader: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '2em',
    fontWeight: '500',
    margin: 'auto',
    padding: '30px 0',
    textAlign: 'center'
  }
});

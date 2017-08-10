// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footerContainer, animations.fadeIn)}>
        <div className={css(styles.copyrightContainer)}>
          <p className={css(styles.copyright, styles.text)}>
            &#169;2017. Pi Sigma Epsilon, Zeta Chi Chapter.
          </p>
        </div>
        <div className={css(styles.mediaContainer)}>
          <ul />
        </div>
        <div className={css(styles.creditContainer)}>
          <p className={css(styles.credit, styles.text)}>
            Developed by
            <a
              className={css(styles.link)}
              href="http://www.rahrang.xyz"
              target="blank"
            >
              {' '}Rahul Rangnekar
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#303030',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  text: {
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.875em',
    fontWeight: '500'
  },

  copyrightContainer: {
    padding: '0 10px'
  },

  creditContainer: {
    padding: '0 10px'
  },

  link: {
    color: 'white',
    textDecoration: 'none',
    ':hover': {
      color: '#895FAD'
    }
  }
});

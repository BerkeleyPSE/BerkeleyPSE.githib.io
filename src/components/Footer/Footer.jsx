// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footerContainer, animations.fadeInUp)}>
        <div className={css(styles.copyrightContainer)}>
          <p className={css(styles.copyright, styles.text)}>
            &#169;2017. Pi Sigma Epsilon, Zeta Chi Chapter.
          </p>
        </div>
        <div className={css(styles.mediaContainer)}>
          <Link
            className={css(styles.link, styles.mediaLink)}
            to={'https://www.facebook.com/berkeleypse'}
            target="blank"
          >
            <i
              className={css(styles.icon) + ' fa fa-facebook-official'}
              aria-hidden="true"
            />
          </Link>
          <Link
            className={css(styles.link, styles.mediaLink)}
            to={'https://www.instagram.com/berkeleypse'}
            target="blank"
          >
            <i
              className={css(styles.icon) + ' fa fa-instagram'}
              aria-hidden="true"
            />
          </Link>
          <Link
            className={css(styles.link, styles.mediaLink)}
            to={'https://www.twitter.com/berkeleypse'}
            target="blank"
          >
            <i
              className={css(styles.icon) + ' fa fa-twitter'}
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className={css(styles.creditContainer)}>
          <p className={css(styles.credit, styles.text)}>
            Developed by
            <Link
              className={css(styles.link)}
              to={'http://www.rahrang.xyz'}
              target="blank"
            >
              {' '}Rahul Rangnekar
            </Link>
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
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
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
    color: '#FFF',
    cursor: 'pointer',
    height: '100%',
    textDecoration: 'none',
    ':hover': {
      color: '#895FAD'
    }
  },

  mediaLink: {
    padding: '0 10px'
  },

  icon: {
    fontSize: '1.5em'
  }
});

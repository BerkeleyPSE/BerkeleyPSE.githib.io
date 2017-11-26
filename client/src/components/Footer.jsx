// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import SocialMediaBar from 'react-social-media-bar';

// Local Helper Files & Components
import { animations } from '../stylesheets/Animations.js';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footerContainer, animations.fadeInUp)}>
        <div className={css(styles.copyrightContainer)}>
          <p className={css(styles.copyright, styles.text)}>
            &#169;2017. Pi Sigma Epsilon, Zeta Chi Chapter.
          </p>
        </div>
        <SocialMediaBar
          icons={MEDIA_ICONS}
          iconColor={'#FFF'}
          iconSize={'1.25em'}
          hoverColor={'#FFD700'}
          margin={{ top: '5px', right: '7.5px', bottom: '5px', left: '7.5px' }}
        />
        <div className={css(styles.creditContainer)}>
          <p className={css(styles.credit, styles.text)}>
            Developed by
            <Link
              className={css(styles.link)}
              to={'http://www.rahrang.xyz'}
              target="blank"
            >
              {' '}
              Rahul Rangnekar
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

const MEDIA_ICONS = [
  {
    media: 'facebook-official',
    link: 'https://www.facebook.com/berkeleypse'
  },
  {
    media: 'instagram',
    link: 'https://www.instagram.com/berkeleypse'
  },
  {
    media: 'twitter',
    link: 'https://www.twitter.com/berkeleypse'
  }
];

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#303030',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px 0',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
  },

  text: {
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.875em',
    fontWeight: '500',
    margin: '0',
    padding: '0'
  },

  copyrightContainer: {
    margin: '5px 10px'
  },

  creditContainer: {
    margin: '5px 10px'
  },

  link: {
    color: '#FFF',
    cursor: 'pointer',
    height: '100%',
    textDecoration: 'none',
    ':hover': {
      color: '#FFD700'
    }
  }
});

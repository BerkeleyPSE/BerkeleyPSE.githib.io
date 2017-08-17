// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

const mediaLinkItems = [
  {
    media: 'facebook',
    link: 'https://www.facebook.com/berkeleypse',
    icon: 'fa-facebook-official'
  },
  {
    media: 'instagram',
    link: 'https://www.instagram.com/berkeleypse',
    icon: 'fa-instagram'
  },
  {
    media: 'twitter',
    link: 'https://www.twitter.com/berkeleypse',
    icon: 'fa-twitter'
  }
];

export default class Footer extends React.Component {
  render() {
    const mediaLinks = mediaLinkItems.map(item => {
      return (
        <Link
          className={css(styles.link, styles.mediaLink)}
          to={item.link}
          target="blank"
        >
          <i
            className={css(styles.icon) + ` fa ${item.icon}`}
            aria-hidden="true"
          />
        </Link>
      );
    });

    return (
      <div className={css(styles.footerContainer, animations.fadeInUp)}>
        <div className={css(styles.copyrightContainer)}>
          <p className={css(styles.copyright, styles.text)}>
            &#169;2017. Pi Sigma Epsilon, Zeta Chi Chapter.
          </p>
        </div>
        <div className={css(styles.mediaContainer)}>
          {mediaLinks}
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
    padding: '5px 10px'
  },

  mediaContainer: {
    padding: '5px 0'
  },

  creditContainer: {
    padding: '5px 10px'
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

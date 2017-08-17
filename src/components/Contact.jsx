// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../stylesheets/Animations.js';

// Constants
const contactList = [
  {
    for: 'general questions or inquiries',
    email: 'berkeleypse.president@gmail.com'
  },
  {
    for: 'corporate projects or sponsorship questions and inquiries',
    email: 'berkeleypse.pr@gmail.com'
  },
  {
    for: 'recruitment questions or concerns',
    email: 'berkeleypse.recruitment@gmail.com'
  },
  {
    for: 'social media or technical issues',
    email: 'berkeleypse.marketing@gmail.com'
  }
];

export default class Contact extends React.Component {
  render() {
    const contactInfo = contactList.map((item, index) => {
      return (
        <p className={css(styles.contactInfo)}>
          For {item.for}, please email
          <Link
            to={`mailto:${item.email}`}
            className={css(styles.link)}
            target="blank"
            key={index}
          >
            {' '}{item.email}
          </Link>
          .
        </p>
      );
    });

    return (
      <div className={css(animations.fadeIn) + ' contact-container'}>
        <div className={css(styles.landingContainer)}>
          <img
            src={'../images/campanile.jpg'}
            className={css(styles.image)}
            alt={'Pi Sigma Epsilon brotherhood'}
          />
          <h1 className={css(styles.header)}>Contact Us</h1>
        </div>
        <div className={css(styles.infoContainer)}>
          {contactInfo}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  landingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    maxWidth: '100%',
    position: 'relative'
  },

  header: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center',

    position: 'absolute',
    width: '100%'
  },

  infoContainer: {
    padding: '20px 40px',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  },

  contactInfo: {
    color: '#303030',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em'
  },

  link: {
    color: '#895FAD',
    textDecoration: 'none',
    ':hover': {
      color: '#FFD700'
    }
  }
});

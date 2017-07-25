// React
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

// React Router
import { Link } from 'react-router-dom';

// import '../../stylesheets/Navbar.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={css(styles.mainContainer)}>
        <div className={css(styles.logoContainer)}>
          <img className={css(styles.logo)} src="/logo.png" />
          <div className={css(styles.textContainer)}>
            <p className={css(styles.PSEText)}>Pi Sigma Epsilon</p>
            <p className={css(styles.chapterText)}>Zeta Chi Chapter</p>
          </div>
        </div>
        <div className={css(styles.dropdownContainer)} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: '#D4D9DF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px'
  },

  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px 20px'
  },

  logo: {
    height: '70px',
    width: '124px'
  },

  textContainer: {
    color: '#303030',
    fontFamily: 'Lato, sans-serif',
    paddingLeft: '20px'
  },

  PSEText: {
    fontSize: '1.5em',
    letterSpacing: '-0.025em',
    margin: 0,
    textTransform: 'uppercase'
  },

  chapterText: {
    fontSize: '1.125em',
    margin: 0
    // textAlign: 'center',
  }
});

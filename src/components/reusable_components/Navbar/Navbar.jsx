// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite'; // remove this later
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';
import DropdownUnit from './DropdownUnit.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';
import { navbar_constants } from './navbar_constants.jsx';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dropdownUnits = navbar_constants.map((item, index) => {
      return (
        <DropdownUnit
          header={item.header}
          headerLink={item.headerLink}
          pages={item.pages}
          key={index}
        />
      );
    });

    return (
      <div className={css(styles.mainContainer, animations.fadeInDown)}>
        <div className={css(styles.logoContainer)}>
          <img
            className={css(styles.logo)}
            src="/images/logo.png"
            alt="Pi Sigma Epsilon logo"
          />
          <div className={css(styles.textContainer)}>
            <p className={css(styles.PSEText)}>Pi Sigma Epsilon</p>
            <p className={css(styles.chapterText)}>Zeta Chi Chapter</p>
          </div>
        </div>
        <div className={css(styles.dropdownUnitContainer)}>
          {dropdownUnits}
        </div>
        <div className={css(styles.hamburgerMenu)}>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#303030',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '75px',
    '@media (max-width: 768px)': {
      justifyContent: 'center'
    },
    '@media (max-width: 425px)': {
      justifyContent: 'left'
    }
  },

  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px',
    '@media (max-width: 768px)': {
      textAlign: 'center'
    }
  },

  logo: {
    height: '50px',
    width: '89px'
  },

  textContainer: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    paddingLeft: '20px'
  },

  PSEText: {
    fontSize: '1.25em',
    letterSpacing: '-0.025em',
    margin: 0,
    textTransform: 'uppercase'
  },

  chapterText: {
    fontSize: '1em',
    margin: 0
  },

  dropdownUnitContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    paddingRight: '10px',
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },

  hamburgerMenu: {
    '@media (min-width: 769px)': {
      display: 'none'
    }
  }
});

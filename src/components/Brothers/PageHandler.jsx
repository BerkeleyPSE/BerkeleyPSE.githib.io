// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Animations
import { animations } from '../../stylesheets/Animations.js';

// Local Helper Files  & Components
import { BROTHERS_PATH } from '../reusable_components/Navbar/navbar_constants.jsx';

export class PageHandler extends React.Component {
  getIndices = index => {
    let { brotherList } = this.props;
    var prevIndex = -1;
    var nextIndex = -1;
    const numBrothers = brotherList.length - 1;
    if (index === 0) {
      prevIndex = numBrothers;
    } else {
      prevIndex = index - 1;
    }

    if (index === numBrothers) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }

    return [brotherList[prevIndex], brotherList[nextIndex]];
  };

  render() {
    let { brotherInfo } = this.props;

    var bros = this.getIndices(this.props.index);
    var prevBro = '';
    var nextBro = '';
    if (!bros) {
      return null;
    } else {
      prevBro = bros[0];
      nextBro = bros[1];
    }

    return (
      <div className={css(styles.pageHandlerContainer, animations.fadeIn)}>
        <Link
          to={BROTHERS_PATH + '/' + prevBro}
          className={css(styles.prevContainer, styles.link)}
        >
          <i
            className={css(styles.leftIcon) + ' fa fa-chevron-left'}
            aria-hidden="true"
          />
          {brotherInfo[bros[0]].name}
        </Link>
        <Link
          to={BROTHERS_PATH + '/' + nextBro}
          className={css(styles.nextContainer, styles.link)}
        >
          {brotherInfo[bros[1]].name}
          <i
            className={css(styles.rightIcon) + ' fa fa-chevron-right'}
            aria-hidden="true"
          />
        </Link>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageHandlerContainer: {
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },

  prevContainer: {
    margin: '0 auto 0 10px'
  },

  nextContainer: {
    margin: '0 25px 0 auto'
  },

  link: {
    borderBottom: '3px solid #895FAD',
    color: '#303030',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.9em',
    fontWeight: 'bold',
    padding: '5px 2px',
    textDecoration: 'none',
    ':hover': {
      color: '#818181'
      // borderBottom: '3px solid #818181',
    }
  },

  leftIcon: {
    fontSize: '0.9em',
    padding: '0 5px 0 0'
  },

  rightIcon: {
    fontSize: '0.9em',
    padding: '0 0 0 5px'
  }
});

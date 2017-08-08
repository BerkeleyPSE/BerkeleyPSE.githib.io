// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Animations
import { animations } from '../../stylesheets/Animations.js';

// React Link
import { Link } from 'react-router-dom';

// Brotherhood Helper Files
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
            className={css(styles.prevButton) + ' fa fa-chevron-left'}
            aria-hidden="true"
          />
          {brotherInfo[bros[0]].name}
        </Link>
        <Link
          to={BROTHERS_PATH + '/' + nextBro}
          className={css(styles.nextContainer, styles.link)}
        >
          <i
            className={css(styles.nextButton) + ' fa fa-chevron-right'}
            aria-hidden="true"
          />
          {brotherInfo[bros[1]].name}
        </Link>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageHandlerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },

  prevContainer: {
    margin: '0 auto 0 0'
  },

  prevButton: {},

  nextContainer: {
    margin: '0 0 0 auto'
  },

  nextButton: {},

  link: {
    border: '1px solid black',
    color: 'black',
    padding: '5px 10px',
    textDecoration: 'none',
    ':hover': {
      color: 'green'
    }
  }
});

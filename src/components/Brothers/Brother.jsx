// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import queryString from 'query-string';

// Animations
import { animations } from '../../stylesheets/Animations.js';

// Brotherhood Helper Files
import { brotherInfo, brotherList } from './brotherhood_constants';

export default class Brother extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const brother = window.location.pathname.split('/')[2];
    const bro = brotherInfo[brother];
    // debugger
    const broIndex = brotherList.indexOf(brother);
    const prevBro = brotherList[broIndex - 1];
    const nextBro = brotherList[broIndex + 1];
    console.log(brotherList[broIndex + 1]);
    console.log(nextBro);
    console.log(brotherList[-1]);

    return (
      <div className={css(styles.brotherContainer, animations.fadeIn)}>
        <div className={css(styles.broHeader)}>
          <h1 className={css(styles.name)}>
            {bro.name}
          </h1>
          <h2 className={css(styles.position)}>
            {bro.position}
          </h2>
        </div>
        <div className={css(styles.imageContainer, animations.slideInLeft)}>
          <img
            className={css(styles.image)}
            src={'../' + bro.img}
            alt={bro.name}
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  brotherContainer: {},

  broHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    fontFamily: 'Lato, sans-serif',
    letterSpacing: '0.035em',
    padding: '10px 20px'
    // justifyContent: 'center',
  },

  name: {
    fontSize: '2em'
  },

  position: {
    fontSize: '1.25em',
    marginLeft: '30px',
    textTransform: 'uppercase'
  },

  imageContainer: {
    outline: '5px solid #895FAD'
    // outlineOffset: '15px',
  },

  image: {
    height: '522px',
    width: '350px'
    // height: '30%',
    // width: '30%',
  }
});

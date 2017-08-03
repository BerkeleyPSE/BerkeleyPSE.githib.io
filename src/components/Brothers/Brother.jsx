// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import queryString from 'query-string';

import { brotherInfo } from './brotherhood_constants';

export default class Brother extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const brother = window.location.pathname.split('/')[2];
    const bro = brotherInfo[brother];

    console.log(bro.name);

    return (
      <div className={css(styles.brotherContainer)}>
        <div className={css(styles.broHeader)}>
          <h1 className={css(styles.name)}>
            {bro.name}
          </h1>
          <h2 className={css(styles.position)}>
            {bro.position}
          </h2>
        </div>
        <div className={css(styles.imageContainer)}>
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

  image: {
    // border: '2px solid black',
    height: '522px',
    width: '350px'
  }
});

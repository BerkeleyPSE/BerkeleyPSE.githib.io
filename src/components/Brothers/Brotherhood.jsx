// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import { brotherList } from './brotherhood_constants';
import { BrotherImage } from './BrotherImage.jsx';

export default class Brotherhood extends React.Component {
  render() {
    const allBrothers = brotherList.map(brother => {
      return <BrotherImage brother={brother} key={brother} />;
    });

    return (
      <div className={css(styles.brotherhoodContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Brotherhood</h1>
        <div className={css(styles.allBrosContainer)}>
          {allBrothers}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  brotherhoodContainer: {},

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  allBrosContainer: {
    textAlign: 'center'
  }
});

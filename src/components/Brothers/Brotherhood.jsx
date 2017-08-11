// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Grid, Col, Row } from 'react-bootstrap';

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
        <h1 className={css(styles.header)}>Our Brotherhood</h1>
        <div className="all-brothers-container">
          {allBrothers}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  brotherhoodContainer: {
    textAlign: 'center'
  },

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500'
  }
});

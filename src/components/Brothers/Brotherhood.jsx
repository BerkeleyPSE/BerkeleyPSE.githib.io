// React
import React from 'react';
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
      <div className={css(styles.brotherContainer, animations.fadeIn)}>
        {allBrothers}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  brotherContainer: {
    textAlign: 'center'
  }
});

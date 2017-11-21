// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';

export default class ApplicationReview extends React.Component {
  render() {
    return (
      <div className={css(styles.reviewContainer, animations.fadeIn)}>
        Form Review Container
      </div>
    );
  }
}

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '15px 0'
  }
});

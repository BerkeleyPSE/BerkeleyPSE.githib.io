// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import { executiveList } from './brotherhood_constants';
import { BrotherImage } from './BrotherImage.jsx';

export default class Executives extends React.Component {
  render() {
    const executives = executiveList.map(brother => {
      return <BrotherImage brother={brother} key={brother} />;
    });

    return (
      <div className={css(styles.executiveContainer, animations.fadeIn)}>
        {executives}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  executiveContainer: {
    textAlign: 'center'
  }
});

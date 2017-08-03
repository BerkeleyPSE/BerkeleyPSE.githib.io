// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Link } from 'react-router-dom';

import { brotherList } from './brotherhood_constants';
import { BrotherImage } from './BrotherImage.jsx';

export default class Brotherhood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allBrothers = brotherList.map(brother => {
      return <BrotherImage brother={brother} />;
    });

    return (
      <div className={css(styles.brotherContainer)}>
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

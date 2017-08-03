// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Link } from 'react-router-dom';

import { brotherInfo } from './brotherhood_constants';
import { BROTHERS_PATH } from '../reusable_components/Navbar/navbar_constants.jsx';

export class BrotherImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { brother } = this.props;
    const bro = brotherInfo[brother];

    return (
      <Link to={BROTHERS_PATH + '/' + brother} className={css(styles.broLink)}>
        <div className={css(styles.broContainer)}>
          <img src={bro.img} className={css(styles.broImg)} alt={bro.name} />
          <p className={css(styles.broName)}>
            {bro.name}
          </p>
        </div>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  broLink: {
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',

    ':hover': {
      opacity: '0.8'
    }
  },

  broContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  broImg: {
    width: '100%',
    height: '100%'
  }
});

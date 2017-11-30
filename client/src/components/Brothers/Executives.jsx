// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import { vpList } from './brotherhood_constants';
import { BrotherImage } from './BrotherImage.jsx';

const Executives = props => {
  document.title = 'Executive Board - Pi Sigma Epsilon | Zeta Chi Chapter';

  const vps = vpList.map(brother => {
    return <BrotherImage brother={brother} key={brother} page="execs" />;
  });

  return (
    <div className={css(animations.fadeIn) + ' brotherhood-container'}>
      <div className={css(styles.landingContainer)}>
        <img
          src={'../images/executive_board.JPG'}
          className={css(styles.image)}
          alt={'Pi Sigma Epsilon executive board'}
        />
        <h1 className={css(styles.header)}>Executive Board</h1>
      </div>
      <div className={css(styles.container, animations.fadeIn)}>
        <BrotherImage brother={'kevin_phan'} key={'kevin_phan'} page="execs" />
        <br />
        <div className={css(styles.executiveContainer)}>{vps}</div>
      </div>
    </div>
  );
};

export default Executives;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },

  landingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px'
  },

  header: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center',

    position: 'absolute',
    width: '100%'
  },

  executiveContainer: {
    display: 'inline'
  },

  image: {
    maxWidth: '100%',
    position: 'relative'
  }
});

// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

export default class Error404 extends React.Component {
  componentDidMount() {
    this.error404 = setTimeout(
      function() {
        this.props.history.push('/');
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <div className={css(styles.errorContainer)}>
        <p className={css(styles.errorMsg)}>
          Sorry, that page does not exist. Enjoy our site!
        </p>
        <img
          src={'images/error404.jpg'}
          className={css(styles.img404)}
          alt={'Page not found!'}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0'
  },

  img404: {
    height: '500px',
    width: '333px'
  },

  errorMsg: {
    color: '#303030',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '2em',
    fontWeight: '500',
    textAlign: 'center',
    padding: '10px'
  }
});

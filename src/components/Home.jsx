// import React
import React from 'react';

// import inline stylesheets
import { StyleSheet, css } from 'aphrodite';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={css(styles.homeContainer)} />;
  }
}

const styles = StyleSheet.create({});

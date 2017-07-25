// React
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

// React Router
import { Link } from 'react-router-dom';

// import '../../stylesheets/Navbar.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={css(styles.mainContainer)}>
        <h3>
          {this.props.header}
        </h3>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

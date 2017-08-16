// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class HoverCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <Link
        className={css(styles.hoverCard)}
        to={this.props.link}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <h1 className={css(styles.header)}>
          {this.props.header}
        </h1>
        <hr className={css(styles.hr)} />
        <p className={css(styles.description)}>
          {this.props.description}
        </p>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  hoverCard: {
    backgroundColor: '#FFF',
    border: '3px solid #303030',
    color: '#303030',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    minHeight: '80px',
    minWidth: '210px',
    ':hover': {
      border: '3px solid #895FAD',
      backgroundColor: '#303030',
      color: '#FFF'
    }
  },

  header: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.5em',
    fontWeight: '300',
    margin: '0',
    padding: '10px 0'
  },

  hr: {
    border: '2px solid #895FAD',
    width: '90%',
    padding: '0',
    margin: '0'
  },

  description: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    fontWeight: '400',
    padding: '10px 0',
    margin: '0',
    textTransform: 'uppercase'
  }
});

// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class HoverCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <div
        className={css(
          styles.hoverCardContainer,
          this.state.hover && styles.hover
        )}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <h1 className={css(styles.header)}>
          {this.props.header}
        </h1>
        <p className={css(styles.description)}>
          {this.props.description}
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  hoverCardContainer: {},

  hover: {},

  header: {},

  description: {}
});

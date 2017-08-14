// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Recruitment extends React.Component {
  render() {
    return (
      <div className={css(styles.recruitmentContainer)}>
        <div className={css(styles.timelineContainer)}>
          {/* Timeline URL: https://docs.google.com/spreadsheets/d/1C54v0HU7JkbkaS4DSj8aFWsu6g9McOwI6AXb7jnraJY */}
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1C54v0HU7JkbkaS4DSj8aFWsu6g9McOwI6AXb7jnraJY&font=Default&lang=en&initial_zoom=2&height=500"
            width="100%"
            height="500"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameborder="0"
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

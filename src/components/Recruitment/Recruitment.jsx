// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import FlipCard from 'react-flipcard';

export default class Recruitment extends React.Component {
  render() {
    return (
      <div className="recruitment-container">
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
        <div className={css(styles.flipcardContainer)}>
          <Link to={'/brothers'}>
            <FlipCard
              disabled={true}
              flipped={false}
              className={css(styles.flipcard)}
            >
              <div className={css(styles.flipFront)}>Why Pi Sigma Epsilon?</div>
              <div className={css(styles.flipBack)}>
                Learn about what makes PSE the place to be.
              </div>
            </FlipCard>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  timelineContainer: {
    padding: '20px 0'
  },

  flipcardContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0'
  },

  flipcard: {
    backgroundColor: 'green'
  }
});

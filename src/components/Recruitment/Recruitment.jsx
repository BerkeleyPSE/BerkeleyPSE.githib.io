// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
// import FlipCard from 'react-flipcard';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import HoverCard from '../reusable_components/HoverCard.jsx';
import {
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH
} from '../Navbar/navbar_constants.jsx';

// constants
const hoverCardItems = [
  {
    header: 'Why PSE?',
    description: 'What sets us apart.',
    link: WHYPSE_PATH
  },
  {
    header: 'FAQs',
    description: 'What you should know.',
    link: FAQS_PATH
  },
  {
    header: 'Application',
    description: 'How to join us.',
    link: APPLICATION_PATH
  }
];

export default class Recruitment extends React.Component {
  render() {
    const hoverCards = hoverCardItems.map((item, index) => {
      return (
        <HoverCard
          key={index}
          link={item.link}
          header={item.header}
          description={item.description}
        />
      );
    });

    return (
      <div className={css(animations.fadeIn) + ' recruitment-container'}>
        <div className="timeline-container">
          {/* Timeline URL: https://docs.google.com/spreadsheets/d/1C54v0HU7JkbkaS4DSj8aFWsu6g9McOwI6AXb7jnraJY */}
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1C54v0HU7JkbkaS4DSj8aFWsu6g9McOwI6AXb7jnraJY&font=Default&lang=en&initial_zoom=2&height=100%"
            width="100%"
            height="650px"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameborder="0"
          />
        </div>
        <div className={css(styles.hoverCardContainer)}>
          {hoverCards}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  hoverCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
  }
});

// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { faq_constants } from './faq_constants.js';
import AccordionItem from '../reusable_components/AccordionItem.jsx';

export default class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
  }

  setActiveIndex = newIndex => {
    if (this.state.activeIndex === newIndex) {
      this.setState({ activeIndex: -1 });
    } else {
      this.setState({ activeIndex: newIndex });
    }
  };

  render() {
    const faqs = faq_constants.map((item, index) => {
      return (
        <AccordionItem
          key={index}
          index={index}
          isActive={this.state.activeIndex === index}
          question={item.question}
          answer={item.answer}
          setActiveIndex={this.setActiveIndex}
        />
      );
    });

    return (
      <div className="faqs-container">
        <h1 className={css(styles.header)}>Frequently Asked Questions</h1>
        <div className={css(styles.accordionContainer)}>
          {faqs}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  accordionContainer: {
    width: '100%',
    margin: 'auto',
    padding: '20px 0'
  }
});

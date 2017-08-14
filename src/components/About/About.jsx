// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class About extends React.Component {
  render() {
    return (
      <div className={css(styles.aboutUsContainer)}>
        <h1 className={css(styles.header)}>About Us</h1>
        <div className={css(styles.zetaChiContainer)}>
          <h1 className={css(styles.sectionHeader)}>The Zeta Chi Chapter</h1>
          <div className={css(styles.descriptionContainer)} />
        </div>
        <div className={css(styles.nationalContainer)}>
          <h1 className={css(styles.sectionHeader)}>Pi Sigma Epsilon</h1>
          <div className={css(styles.descriptionContainer)}>
            <p className={css(styles.description)}>
              In 1951, Lloyd L. Antle, an Ohio University graduate and Professor
              of Marketing at Georgia State University, conceived of the idea
              that the sales profession should have a professional fraternity of
              its own. After over a year of planning with the support of three
              of his colleagues, Pi Sigma Epsilon was established on May 14,
              1952.
              <br /> <br />
              Pi Sigma Epsilon (PSE) is the only national, co-ed, professional
              business fraternity in sales, marketing, and management. PSE
              offers practical sales and marketing experience to members through
              active involvement in sales and marketing projects, marketing
              research, professional programs, and social events.
              <br /> <br />
              The Zeta Chi chapter of PSE was started by Sabrina Ruiz in Feruary
              2013. She observed a lack of marketing, sales, and retail
              management courses and organizations on campus despite the numer
              of interested students and recruiters, and believed PSE could be
              the solution. To make this idea into a reality, she recruited
              Kelly Chao, Cynthia Huang, Lydia Kim, Peggy Lin, and Hiu Ngan to
              promote the chapter's founding.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  aboutUsContainer: {},

  zetaChiContainer: {},

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  sectionHeader: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '2em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  descriptionContainer: {
    width: '80%',
    margin: 'auto',
    textAlign: 'left'
  },

  description: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500'
  },

  nationalContainer: {}
});

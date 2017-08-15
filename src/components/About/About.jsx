// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files
import { animations } from '../../stylesheets/Animations.js';

export default class About extends React.Component {
  render() {
    return (
      <div className={css(animations.fadeIn) + ' about-container'}>
        <h1 className={css(styles.header)}>About Us</h1>
        <div className={css(styles.zetaChiContainer)}>
          <h2 className={css(styles.sectionHeader, styles.zcHeader)}>
            The Zeta Chi Chapter
          </h2>
          <div className={css(styles.descriptionContainer)}>
            <p className={css(styles.description)}>
              The Zeta Chi chapter of Pi Sigma Epsilon was founded in March
              2013. Then-campus junior Sabrina Ruiz observed a lack of marketing
              and retail management courses and organizations on Berkeley’s
              campus despite students and recruiters interested in the fields.
              She believed PSE could be the solution. To make this idea into a
              reality, Ruiz recruited Kelly Chao, Cynthia Huang, Lydia Kim,
              Peggy Lin, and Hiu Ngan to compose Zeta Chi’s founding Alpha
              class. These six officially chartered the chapter in August 2013.
              <br /> <br />
              Zeta Chi struggled to get off its feet in it’s first year. The
              founding class experienced growing pains with recruiting and
              training potential members. Very few members were initiated into
              the Beta and Gamma classes, necessitating a remote training of the
              prospective Delta class over the summer of 2014. There were talks
              about closing down the fraternity due to lack of interest and
              member retention.
              <br /> <br />
              Slowly but surely, Zeta Chi began to build itself on solid
              foundation. The Lin administration oversaw a variety of students
              recruited in the Epsilon, Zeta, and Eta classes, which injected
              energy and fresh perspectives into the fraternity. The Aminpour
              administration took advantage of the chapter’s newfound youthful
              passion to apply for and receive sponsorship from Berkeley’s Haas
              School of Business in Spring 2016. The Theta class experienced the
              first rigorous and wholly educational PMT process, only to
              continue to be iterated and improved upon for the Iota and Kappa
              classes.
              <br /> <br />
              Now in it’s fourth year and recruiting for it’s prospective Mu
              class, Zeta Chi boasts a diverse brotherhood of over 40 active
              members in the Phan administration.
            </p>
            <div className={css(styles.imageContainer)}>
              <p className={css(styles.caption)}>
                <strong>ALPHA CLASS</strong>
                <br />
                Lydia Kim, Cynthia Huang, Peggy Lin
                <br />
                Hiu Ngan, Sabrina Ruiz, Kelly Chao
              </p>
              <img
                src="/images/zc_founders.jpg"
                alt={'Zeta Chi founding class'}
                className={css(styles.image)}
              />
            </div>
          </div>
        </div>
        <div className={css(styles.nationalContainer)}>
          <h2 className={css(styles.sectionHeader, styles.nationalHeader)}>
            Pi Sigma Epsilon
          </h2>
          <div className={css(styles.descriptionContainer)}>
            <div className={css(styles.imageContainer)}>
              <p className={css(styles.caption)}>
                <strong>NATIONAL LOGO</strong>
              </p>
              <img
                src="/images/national_logo.jpg"
                alt={'Pi Sigma Epsilon national logo'}
                className={css(styles.image2)}
              />
            </div>
            <p className={css(styles.description)}>
              In 1951, Lloyd L. Antle, an Ohio University graduate and Professor
              of Marketing at Georgia State University, conceived of the idea
              that the sales profession should have a professional fraternity of
              its own. After over a year of planning with the support of three
              of his colleagues, Pi Sigma Epsilon (PSE) was established on May
              14, 1952. All four men were members of the Sales and Marketing
              Executives (SME) association of Atlanta, Georgia, which continues
              to be a sponsor of Pi Sigma Epsilon to this day.
              <br /> <br />
              Originally an all-male organization, which was characteristic of
              the sales profession at the time, PSE became co-ed in 1974 after
              an amendment to the national constitution. Today, women play key
              roles in all levels of the fraternity and in fact make up a slight
              majority of the membership in most chapters.
              <br /> <br />
              PSE does not use term "pledge" is not used, as it portrays a
              negative stereotype that goes against the ideals of the
              Fraternity. Hazing is strictly forbidden and all of those taking
              the steps to become full members are "prospective members" (PMs)
              until initiation.
              <br /> <br />
              Pi Sigma Epsilon is the only national, co-ed, professional
              business fraternity in sales, marketing, and management. PSE
              offers practical sales and marketing experience to members through
              active involvement in sales and marketing projects, marketing
              research, professional programs, and social events.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  zetaChiContainer: {
    backgroundColor: '#303030',
    color: '#FFF',
    padding: '40px'
  },

  zcHeader: {
    borderBottom: '3px solid #FFF'
  },

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
    fontFamily: 'Lato, sans-serif',
    fontSize: '2em',
    fontWeight: '500',
    margin: 'auto',
    padding: '30px 0',
    textAlign: 'center'
  },

  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
    textAlign: 'left',
    '@media (max-width: 1200px)': {
      flexDirection: 'column'
    }
  },

  description: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500',
    padding: '0 20px'
  },

  imageContainer: {
    padding: '0 10px'
  },

  caption: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    fontWeight: 'light',
    letterSpacing: '0.035em',
    textAlign: 'right'
  },

  image: {
    width: '640px',
    height: '427px',
    outline: '3px solid #895FAD',
    '@media (min-width: 325px)': {
      width: '325px',
      height: '217px'
    },
    '@media (min-width: 425px)': {
      width: '425px',
      height: '284px'
    },
    '@media (min-width: 768px)': {
      width: '640px',
      height: '427px'
    }
  },

  image2: {
    width: '400px',
    height: '507px',
    outline: '3px solid #895FAD',
    '@media (min-width: 325px)': {
      width: '325px',
      height: '412px'
    },
    '@media (min-width: 425px)': {
      width: '400px',
      height: '507px'
    }
  },

  nationalContainer: {
    padding: '40px'
  },

  nationalHeader: {
    borderBottom: '3px solid #303030'
  }
});

// import React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local Helper Files & Components
import { animations } from '../stylesheets/Animations.js';
import {
  ABOUT_PATH,
  CAREERS_PATH,
  RECRUITMENT_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH
} from './Navbar/navbar_constants.jsx';

const homeInfo = [
  {
    imgSrc: '/images/home/pi_sigma_epsilon.jpg',
    message: "UC Berkeley's Marketing & Business Fraternity",
    text: 'Apply Now',
    link: APPLICATION_PATH
  },
  {
    imgSrc: '/images/home/brotherhood.jpg',
    message: 'Who We Are',
    text: 'Meet the Chapter',
    link: BROTHERS_PATH
  },
  {
    imgSrc: '/images/home/meet_the_chapter.jpg',
    message: 'Where We Are',
    text: 'Join Us',
    link: RECRUITMENT_PATH
  },
  {
    imgSrc: '/images/home/pse_banquet.jpg',
    message: 'What We Came From',
    text: 'Our History',
    link: ABOUT_PATH
  },
  {
    imgSrc: '/images/home/alumni.JPG',
    message: "Where We're Going",
    text: 'Our Careers',
    link: CAREERS_PATH
  },
  {
    imgSrc: '/images/home/pi_sigma_epsilon_2.jpg',
    message: "UC Berkeley's Marketing & Business Fraternity",
    text: 'Apply Now',
    link: APPLICATION_PATH
  }
];

export default class Home extends React.Component {
  render() {
    document.title = 'Pi Sigma Epsilon | Zeta Chi Chapter';

    const slideItems = homeInfo.map((item, index) => {
      return (
        <div className={css(styles.slide)} key={index}>
          <img
            src={item.imgSrc}
            className={css(styles.image)}
            alt={item.message}
          />
          <div className={css(styles.overlayContainer)}>
            <h1 className={css(styles.header)}>
              {item.message}
            </h1>
            <Link className={css(styles.link)} to={item.link}>
              {item.text}
            </Link>
          </div>
        </div>
      );
    });

    return (
      <div className={css(styles.homeContainer, animations.fadeIn)}>
        <div className={css(styles.sliderContainer)}>
          <Slider
            accessibility={true}
            className={css(styles.innerSlider)}
            adaptiveHeight={false}
            arrows={false}
            autoplay={true}
            autoplaySpeed={4500}
            centerMode={false}
            draggable={false}
            dots={true}
            dotsClass={css(styles.dots) + ' slick-dots'}
            fade={true}
            focusOnSelect={true}
            infinite={true}
            initialSlide={0}
            lazyLoad={true}
            pauseOnHover={false}
            slidesToShow={1}
            slidesToScroll={1}
            swipe={true}
          >
            {slideItems}
          </Slider>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FFF'
  },

  sliderContainer: {
    margin: '0',
    padding: '0 0 45px 0'
  },

  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },

  innerSlider: {
    maxWidth: '100%',
    padding: '0 0 20px 0',
    margin: '0'
  },

  dots: {},

  overlayContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },

  header: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    fontSize: '2.5em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    textAlign: 'center',
    padding: '0 20px'
  },

  link: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '2px solid #FFF',
    color: '#FFF',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    fontWeight: 'bold',
    letterSpacing: '0.025em',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    ':hover': {
      backgroundColor: '#FFF',
      border: '2px solid #895FAD',
      color: '#895FAD'
    }
  }
});

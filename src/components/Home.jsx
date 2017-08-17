// import React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-responsive-carousel/lib/styles/main.css';

const homeInfo = [
  {
    imgSrc: '/images/home/alumni.JPG',
    message: 'Join Our Brotherhood',
    buttonText: 'Apply',
    buttonLink: '/app'
  },
  {
    imgSrc: '/images/home/alumni.JPG',
    message: 'Hahaha',
    buttonText: 'This is us',
    buttonLink: 'Gotta laugh'
  }
];

export default class Home extends React.Component {
  render() {
    const carouselItems = homeInfo.map((item, index) => {
      return (
        <div className={css(styles.imageContainer)} key={index}>
          <img src={item.imgSrc} className={css(styles.image)} />
        </div>
      );
    });

    return (
      <div className={css(styles.homeContainer)}>
        <Carousel
          axis={'horizontal'}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={true}
          infiniteLoop={true}
          id="carousel"
        >
          {carouselItems}
        </Carousel>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%'
  },

  imageContainer: {
    textDecoration: 'none',
    height: '100%'
  },

  image: {
    // width: '100%',
  }
});

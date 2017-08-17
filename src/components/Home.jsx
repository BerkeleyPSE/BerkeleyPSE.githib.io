// import React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Carousel } from 'react-responsive-carousel';

const homeInfo = [
  {
    imgSrc: '/images/home/brotherhood.jpg',
    message: 'Join Our Brotherhood',
    buttonText: 'Apply',
    buttonLink: '/app'
  },
  {
    imgSrc: '/images/home/funny.JPG',
    message: 'Hahaha',
    buttonText: 'This is us',
    buttonLink: 'Gotta laugh'
  }
];

export default class Home extends React.Component {
  render() {
    const carouselItems = homeInfo.map((item, index) => {
      return (
        <div>
          <img src={item.imgSrc} />
        </div>
      );
    });

    return (
      <div className={css(styles.homeContainer)}>
        <Carousel>
          {carouselItems}
        </Carousel>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

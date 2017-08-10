import { StyleSheet } from 'aphrodite';
import {
  fadeIn,
  fadeInDown,
  flipInX,
  slideInLeft,
  slideInRight,
  zoomIn
} from 'react-animations';

const animations = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s'
  },

  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s'
  },

  flipInX: {
    animationName: flipInX,
    animationDuration: '1s'
  },

  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: '0.35s'
  },

  slideInRight: {
    animationName: slideInRight,
    animationDuration: '0.35s'
  },

  zoomIn: {
    animationName: zoomIn,
    animationDuration: '1s'
  }
});

export { animations };

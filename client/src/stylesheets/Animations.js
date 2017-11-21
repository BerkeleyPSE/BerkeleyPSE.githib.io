import { StyleSheet } from 'aphrodite';
import {
  fadeIn,
  fadeInDown,
  fadeInUp,
  flipInX,
  slideInLeft,
  slideInRight,
  slideInDown,
  zoomIn
} from 'react-animations';

const animations = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '2s'
  },

  fadeInFast: {
    animationName: fadeIn,
    animationDuration: '0.5s'
  },

  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s'
  },

  fadeInUp: {
    animationName: fadeInUp,
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

  slideInDown: {
    animationName: slideInDown,
    animationDuration: '1s'
  },

  zoomIn: {
    animationName: zoomIn,
    animationDuration: '1s'
  }
});

export { animations };

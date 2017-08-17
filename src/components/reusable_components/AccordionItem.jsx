// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class AccordionItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false
  //   };
  // }

  // toggle = () => {
  //   this.setState({isOpen: !this.state.isOpen})
  // }

  // use this to only keep 1 accordion open at a time, set the active accordion id in the parent component
  // componentWillReceiveProps(nextProps) {

  // }

  render() {
    let { isActive, setActiveIndex, index } = this.props;

    return (
      <div className={css(styles.accordionItem)}>
        <div
          className={css(
            styles.headerContainer,
            isActive ? styles.openHC : styles.closedHC
          )}
          onClick={() => setActiveIndex(index)}
        >
          <h1 className={css(styles.header)}>
            {this.props.question}
          </h1>
          {isActive
            ? <i
                className={css(styles.chevron) + ' fa fa-chevron-up'}
                aria-hidden="true"
              />
            : <i
                className={css(styles.chevron) + ' fa fa-chevron-down'}
                aria-hidden="true"
              />}
        </div>
        <div
          className={css(
            styles.bodyContainer,
            isActive ? animations.fadeInFast : styles.hidden
          )}
        >
          <p className={css(styles.answer)}>
            {this.props.answer}
          </p>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  accordionItem: {
    margin: '5px auto',
    width: '100%',
    '@media(min-width: 768px)': {
      width: '80%'
    }
  },

  headerContainer: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 0'
  },

  openHC: {
    backgroundColor: '#895FAD',
    border: '2px solid #895FAD',
    color: '#FFF'
  },

  closedHC: {
    backgroundColor: '#FFF',
    border: '2px solid #303030',
    color: '#303030'
  },

  header: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500',
    letterSpacing: '0.035em',
    margin: '0 auto 0 20px'
  },

  chevron: {
    fontSize: '1em',
    margin: '0 20px 0 auto',
    padding: '0 10px'
  },

  bodyContainer: {
    backgroundColor: '#303030',
    borderTop: '5px solid #FFF'
  },

  hidden: {
    display: 'none'
  },

  answer: {
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em',
    lineHeight: '1.375em',
    letterSpacing: '0.025em',
    margin: '0',
    padding: '20px 60px'
  }
});

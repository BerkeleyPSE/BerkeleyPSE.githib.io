// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import { navbar_constants } from './navbar_constants.jsx';

const MENU_WIDTH = 275;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    const menuItems = navbar_constants.map(item => {
      return (
        <div
          className={css(styles.sectionContainer)}
          key={`ham_${item.header}`}
        >
          <div className={css(styles.headerContainer)}>
            <NavLink
              to={item.headerLink}
              className={css(styles.link, styles.headerLink)}
              activeClassName={css(styles.activeLink)}
              key={`ham_${item.header}`}
            >
              {item.header}
            </NavLink>
          </div>
          <div className={css(styles.pagesContainer)}>
            {item.pages &&
              item.pages.map(page => {
                return (
                  <div className={css(styles.pageContainer)}>
                    <NavLink
                      to={page.pageLink}
                      className={css(styles.link, styles.pageLink)}
                      activeClassName={css(styles.activeLink)}
                      key={`${item.header}_${page.page}`}
                    >
                      {page.page}
                    </NavLink>
                    <br />
                  </div>
                );
              })}
          </div>
        </div>
      );
    });

    return (
      <Menu
        className={css(styles.menu, animations.slideInLeft) + 'menu'}
        width={MENU_WIDTH}
        isOpen={this.state.isMenuOpen}
        onStateChange={() => this.toggle}
        styles={menuStyles}
        right
      >
        {menuItems}
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: '0.5em 0',
    width: '100%',
    textAlign: 'center'
  },

  headerContainer: {
    borderBottom: '2px solid #895FAD',
    padding: '0.25em 0'
  },

  pagesContainer: {
    padding: '0.375em 0',
    textAlign: 'right'
  },

  pageContainer: {
    padding: '0.25em 0'
  },

  headerLink: {
    fontSize: '1.25em',
    letterSpacing: '0.05em',
    textAlign: 'center',
    width: '100%'
  },

  pageLink: {
    fontSize: '1.075em',
    letterSpacing: '0.025em'
  },

  link: {
    color: '#FFF',
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
    textDecoration: 'none',
    textTransform: 'uppercase',
    ':hover': {
      color: '#895FAD'
    }
  },

  activeLink: {
    color: '#FFD700'
  }
});

const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '24px',
    right: '25px',
    top: '25px'
  },

  bmBurgerBars: {
    backgroundColor: '#895FAD'
  },

  bmCrossButton: {
    height: '30px',
    width: '30px'
  },

  bmCross: {
    backgroundColor: '#895FAD'
  },

  bmMenu: {
    background: '#303030',
    padding: '2.5em 2em 0',
    fontSize: '1em',
    color: '#FFF',
    width: `${MENU_WIDTH}px`,
    overflow: 'hidden'
  },

  bmItemList: {
    padding: '0.8em'
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: '0',
    left: '0'
  }
};

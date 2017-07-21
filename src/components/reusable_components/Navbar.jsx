// React
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

// React Router
import { Link } from 'react-router-dom';

// Semantic UI
import { Dropdown, Menu } from 'semantic-ui-react';

import '../../stylesheets/Navbar.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: '0'
    };
  }

  render() {
    return (
      <Menu
        horizontal
        activeIndex={this.state.activeIndex}
        className={css(styles.menu)}
      >
        <Menu.Item
          index={0}
          className={css(
            styles.menuItem,
            this.state.activeItem === 0 && styles.activeItem
          )}
        >
          <Link to="/" className={css(styles.link)}>
            Berkeley PSE
          </Link>
        </Menu.Item>

        <Menu.Menu position="right" className={css(styles.dropdown)}>
          <Dropdown item text="About">
            <Dropdown.Menu>
              <Dropdown.Item
                index={1}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 1 && styles.activeItem
                )}
              >
                <Link to="/about" className={css(styles.link)}>
                  About
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                index={2}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 2 && styles.activeItem
                )}
              >
                <Link to="/careers" className={css(styles.link)}>
                  Careers
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                index={3}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 3 && styles.activeItem
                )}
              >
                <Link to="/sponsor" className={css(styles.link)}>
                  Sponsor
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Recruitment" className={css(styles.dropdown)}>
            <Dropdown.Menu className={css(styles.dropdownMenu)}>
              <Dropdown.Item
                index={4}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 4 && styles.activeItem
                )}
              >
                <Link to="/recruitment" className={css(styles.link)}>
                  Recruitment
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                index={5}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 5 && styles.activeItem
                )}
              >
                <Link to="/why-pse" className={css(styles.link)}>
                  Why PSE?
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                index={6}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 6 && styles.activeItem
                )}
              >
                <Link to="/faqs" className={css(styles.link)}>
                  FAQs
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                index={7}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 7 && styles.activeItem
                )}
              >
                <Link to="/app" className={css(styles.link)}>
                  Application
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Brotherhood">
            <Dropdown.Menu className={css(styles.dropdownMenu)}>
              <Dropdown.Item
                index={8}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 8 && styles.activeItem
                )}
              >
                <Link to="/brothers" className={css(styles.link)}>
                  Brothers
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                index={9}
                className={css(
                  styles.menuItem,
                  this.state.activeItem === 9 && styles.activeItem
                )}
              >
                <Link to="/eboard" className={css(styles.link)}>
                  Executive Board
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    fontSize: '20px',
    border: 'none',
    textDecoration: 'none',
    color: 'black',
    backgroundColor: 'green'
  },

  link: {
    textDecoration: 'none',
    color: 'white'
  },

  dropdown: {
    border: 'none',
    boxShadow: 'none',
    color: 'white'
  },

  dropdownMenu: {
    border: 'none',
    boxShadow: 'none'
  },

  menu: {
    backgroundColor: '#818181',
    border: 'none',
    borderRadius: '0',
    boxShadow: 'none'
  }
});

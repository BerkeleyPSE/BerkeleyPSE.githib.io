// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// React Router
import { Link } from 'react-router-dom';

// NPM Modules
import DropdownMenu from 'react-dd-menu';
import '../../../stylesheets/react-dd.css';

export default class DropdownUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let menuOptions = {
      isOpen: this.state.isOpen,
      close: this.close,
      toggle: <button className={css(styles.hidden)} onClick={this.toggle} />,
      align: 'right',
      menuAlign: 'right'
    };

    var pageLinks = this.props.pages.map((page, index) => {
      return (
        <li className={css(styles.pageLi)} key={index}>
          <Link to={page.pageLink} className={css(styles.pageLink)}>
            {page.page}
          </Link>
        </li>
      );
    });

    return (
      <div
        className={css(styles.mainContainer)}
        onMouseEnter={() => this.setState({ isOpen: true })}
        onMouseLeave={() => this.setState({ isOpen: false })}
      >
        <Link to={this.props.headerLink} className={css(styles.headerLink)}>
          <h3 className={css(styles.header)}>
            {this.props.header}
          </h3>
        </Link>
        <DropdownMenu
          {...menuOptions}
          className={css(styles.dropdownContainer)}
        >
          {pageLinks}
        </DropdownMenu>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    padding: '0 15px'
  },

  hidden: {
    display: 'none'
  },

  headerLink: {
    color: '#FFF',
    height: 'auto',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '20px 10px',

    ':hover': {
      color: '#FFD700'
    }
  },

  header: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.85em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    margin: 0
  },

  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    position: 'relative',
    height: '100%'
  },

  pageLi: {
    padding: '0 20px 0 5px',
    backgroundColor: '#303030',

    ':hover': {
      color: '#FFD700'
    }
  },

  pageLink: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.85em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    padding: '10px 10px 10px 5px',
    textDecoration: 'none',
    textTransform: 'uppercase',

    ':hover': {
      color: '#FFD700'
    },

    ':active': {
      backgroundColor: '#303030',
      color: '#FFD700'
    }
  }
});

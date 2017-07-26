// React
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

// React Router
import { Link } from 'react-router-dom';

// NPM Modules
import DropdownMenu from 'react-dd-menu';
import '../../stylesheets/react-dd.css';

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

  // <div className={css(styles.mainContainer)}>
  //   <Link className={css(styles.headerLink)} to={this.props.headerLink}>
  //     <h3 className={css(styles.header)}>
  //       {this.props.header}
  //     </h3>
  //   </Link>
  // </div>

  render() {
    let menuOptions = {
      isOpen: this.state.isOpen,
      close: this.close,
      toggle: <button className={css(styles.hidden)} onClick={this.toggle} />,
      align: 'left'
    };

    var pageLinks = this.props.pages.map((page, index) => {
      return (
        <Link to={page.pageLink} className={css(styles.pageLink)} key={index}>
          <li>
            {page.page}
          </li>
        </Link>
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
    height: 'auto',
    padding: '0 20px'
  },

  hidden: {
    display: 'none'
  },

  headerLink: {
    color: '#303030',
    height: 'auto',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '20px 10px'
  },

  header: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.85em',
    fontWeight: '700',
    letterSpacing: '0.025em',
    margin: 0
  },

  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px'
  },

  pageLink: {
    color: '#303030',
    fontSize: '0.85em',
    fontWeight: '500',
    padding: '10px 0',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }
});

// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { NavLink } from "react-router-dom";
import DropdownMenu from "react-dd-menu";
import "../../stylesheets/react-dd.css";
import { navbar_map } from "./navbar_constants.jsx";

export default class DropdownUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      parentLink: this.props.headerLink
    };
  }

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  checkActive = (match, location) => {
    const parentLink = navbar_map[location.pathname];
    return parentLink === this.state.parentLink;
  };

  render() {
    let menuOptions = {
      isOpen: this.state.isOpen,
      close: this.close,
      toggle: <button className={css(styles.hidden)} onClick={this.toggle} />,
      align: "right",
      menuAlign: "right"
    };

    var pageLinks = this.props.pages.map(page => {
      return (
        <li className={css(styles.pageLi)} key={page.page}>
          <NavLink
            to={page.pageLink}
            className={css(styles.pageLink)}
            activeClassName={css(styles.activeLink)}
          >
            {page.page}
          </NavLink>
        </li>
      );
    });

    return (
      <div
        className={css(styles.mainContainer)}
        onMouseEnter={() => this.setState({ isOpen: true })}
        onMouseLeave={() => this.setState({ isOpen: false })}
      >
        <NavLink
          to={this.props.headerLink}
          className={css(styles.headerLink)}
          activeClassName={css(styles.activeHeaderLink)}
          isActive={this.checkActive}
        >
          <h3 className={css(styles.header)}>{this.props.header}</h3>
        </NavLink>
        <DropdownMenu
          {...menuOptions}
          className={css(styles.dropdownContainer)}
          enterTimeout={400}
          leaveTimeout={400}
        >
          {pageLinks}
        </DropdownMenu>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    padding: "0 5px"
  },

  hidden: {
    display: "none"
  },

  headerLink: {
    borderBottom: "2px solid #303030",
    color: "#FFF",
    height: "auto",
    textDecoration: "none",
    textTransform: "uppercase",
    padding: "5px 10px",
    ":hover": {
      color: "#FFD700"
    }
  },

  header: {
    fontFamily: "Lato, sans-serif",
    fontSize: "0.85em",
    fontWeight: "500",
    letterSpacing: "0.025em",
    margin: 0
  },

  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    position: "relative",
    height: "100%"
  },

  pageLi: {
    padding: "0 20px 0 5px",
    backgroundColor: "#303030",
    ":hover": {
      color: "#FFD700"
    }
  },

  pageLink: {
    color: "#FFF",
    fontFamily: "Lato, sans-serif",
    fontSize: "0.85em",
    fontWeight: "500",
    letterSpacing: "0.025em",
    padding: "10px 10px 10px 5px",
    textDecoration: "none",
    textTransform: "uppercase",
    ":hover": {
      color: "#FFD700"
    },
    ":active": {
      backgroundColor: "#303030",
      color: "#FFD700"
    }
  },

  activeHeaderLink: {
    borderBottom: "2px solid #FFD700"
  },

  activeLink: {
    color: "#FFD700"
  }
});

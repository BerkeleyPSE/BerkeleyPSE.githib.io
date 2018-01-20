import React from "react";

// node modules
import PropTypes from "prop-types";

// components
import { ColumnContainer } from "./components/ContainerStyles";
import { Image } from "./components/ImageStyles";
import { ParaText } from "./components/TextStyles";

export default class Error404 extends React.Component {
  componentDidMount() {
    switch (this.props.location.pathname) {
      case "/apply":
        this.props.history.replace("/app");
        break;
      default:
        this.error404 = setTimeout(
          function() {
            this.props.history.replace("/");
          }.bind(this),
          3000
        );
        break;
    }
  }

  render() {
    document.title = "Error :( - Pi Sigma Epsilon | Zeta Chi Chapter";

    return (
      <ErrorContainer>
        <ParaText>Sorry, that page does not exist. Enjoy our site!</ParaText>
        <Image
          src="images/error404.jpg"
          alt="Page not found!"
          border
          height="500px"
          width="333px"
        />
      </ErrorContainer>
    );
  }
}

const ErrorContainer = ColumnContainer.extend`
  padding: 1.25rem 0;
`;

// PropTypes

Error404.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

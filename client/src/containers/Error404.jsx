import React from "react";

// components
import { ColumnContainer } from "./components/ContainerStyles";
import { Image } from "./components/ImageStyles";
import { ParaText } from "./components/TextStyles";

export default class Error404 extends React.Component {
  componentDidMount() {
    this.error404 = setTimeout(
      function() {
        this.props.history.push("/");
      }.bind(this),
      3000
    );
  }

  render() {
    document.title = "Error :( - Pi Sigma Epsilon | Zeta Chi Chapter";

    return (
      <ErrorContainer>
        <ParaText>Sorry, that page does not exist. Enjoy our site!</ParaText>
        <Image
          src="images/error404.jpg"
          alt="Page not found!"
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

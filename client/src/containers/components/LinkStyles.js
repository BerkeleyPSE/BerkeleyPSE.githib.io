import styled from "styled-components";
import { Link } from "react-router-dom";

const IntLink = styled(Link)`
  color: #895fad;
  letter-spacing: 0.025rem;

  &:hover {
    color: #ffd700;
  }
`;

const ExtLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer"
})`
  color: #ffd700;
  text-decoration: none;

  &:hover {
    color: #895fad;
  }
`;

const IntButtonLink = IntLink.extend`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  z-index: 10;

  &:hover {
    background-color: #fff;
    border: 2px solid #895fad;
    color: #895fad;
  }
`;

const ExtButtonLink = ExtLink.extend`
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #ffd700;
  color: #ffd700;
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    border: 2px solid #895fad;
    color: #895fad;
  }
`;

export { IntLink, ExtLink, IntButtonLink, ExtButtonLink };

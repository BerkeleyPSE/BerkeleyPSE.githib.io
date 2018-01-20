import styled from "styled-components";

const Image = styled.img`
  border: ${props => (props.border ? "3px solid #895fad" : "none")};
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};
`;

export { Image };

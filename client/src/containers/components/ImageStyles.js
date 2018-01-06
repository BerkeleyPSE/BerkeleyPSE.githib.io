import styled from "styled-components";

const Image = styled.img`
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};
`;

export { Image };

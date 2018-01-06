import styled from "styled-components";

const ParaText = styled.p`
  color: ${props => (props.alt ? "#FFF" : "#333")};
  font-size: 1.125rem;
  margin: 0.25rem 0;
`;

export { ParaText };

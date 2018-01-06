import styled from "styled-components";

const ColumnContainer = styled.div`
  background-color: ${props => props.bgColor || "inherit"};
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RowContainer = styled.div`
  background-color: ${props => props.bgColor || "inherit"};
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export { ColumnContainer, RowContainer };

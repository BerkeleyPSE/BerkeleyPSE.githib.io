import React from "react";

// node modules
import styled from "styled-components";

// components
import { RowContainer } from "../components/ContainerStyles";

// constants
const INFO_LIST = [
  "year",
  "hometown",
  "class",
  "major",
  "minor",
  "career_interests",
  "previous_positions"
];

const INFO_MAP = {
  year: "Year",
  hometown: "Hometown",
  class: "Class",
  major: "Major",
  minor: "Minor",
  career_interests: "Career Interests",
  previous_positions: "Previous Positions"
};

const BrotherTable = props => {
  return (
    <TableContainer>
      {INFO_LIST.map(item => {
        if (props.bro[item]) {
          return (
            <Row key={`${props.bro.name}_${item}`}>
              <Title>{INFO_MAP[item]}</Title>
              <Value>{props.bro[item]}</Value>
            </Row>
          );
        } else {
          return null;
        }
      })}
    </TableContainer>
  );
};

export default BrotherTable;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const Row = RowContainer.extend`
  flex-wrap: nowrap;
  border-bottom: 1px solid #333;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const Title = styled.p`
  color: #895fad;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  margin: 0;
  padding: 0 0.625rem;
  text-align: left;
  text-transform: uppercase;
`;

const Value = styled.p`
  color: #818181;
  font-size: 1rem;
  margin: 0;
  padding: 0 0.625rem;
  text-align: right;
`;

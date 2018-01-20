import React from "react";

// node modules
import styled from "styled-components";

const CareersTable = props => {
  console.log(props);
  const columnHeaders = (
    <Row>
      {Object.values(props.columns).map((col, index) => {
        return (
          <ColumnHeader key={`${props.id}_col_${index}`}>{col}</ColumnHeader>
        );
      })}
    </Row>
  );

  const tableRows = props.data.map((person, index) => {
    return (
      <Row id={`${props.id}_row_${index}`} index={index}>
        {Object.keys(props.columns).map((col, index) => {
          return (
            <Cell key={`${props.id}_${person.name}_${col}`}>
              {person[col] || ""}
            </Cell>
          );
        })}
      </Row>
    );
  });

  return (
    <Table>
      <tbody>
        {columnHeaders}
        {tableRows}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  border: none;
  border-top: 1px solid #eee;
  width: 100%;
`;

const ColumnHeader = styled.th`
  border: none;
  border-bottom: 3px solid #895fad;
  color: #333;
  font-family: Lato, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  margin: 0;
  padding: 0.25rem 0;
  text-transform: uppercase;
`;

const Row = styled.tr`
  background-color: ${props => props.index % 2 === 0 && "#EEE"};
  margin: 0;
  overflow: scroll;
`;

const Cell = styled.td`
  font-size: 0.9rem;
  margin: 0;
  padding: 0.25rem;
  min-width: 150px;
`;

export default CareersTable;

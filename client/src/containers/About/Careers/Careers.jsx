import React from "react";

// node modules
import styled from "styled-components";

// components
import { PageHeader, SectionHeader } from "../../components/HeaderStyles";
import CareersTable from "./CareersTable";
import { FULLTIME_COLUMNS, FULLTIME_CAREERS } from "./fulltime_constants";

const Careers = props => {
  document.title = "Careers - Pi Sigma Epsilon | Zeta Chi Chapter";
  return (
    <div id="careers-container">
      <PageHeader>Careers</PageHeader>
      <TableContainer>
        <SectionHeader alt>Full-Time</SectionHeader>
        <CareersTable
          id="fulltime-table"
          columns={FULLTIME_COLUMNS}
          data={FULLTIME_CAREERS}
        />
      </TableContainer>
    </div>
  );
};

export default Careers;

const TableContainer = styled.div`
  margin: 0 0 2rem 0;
  padding: 0;
  overflow-x: scroll;
`;

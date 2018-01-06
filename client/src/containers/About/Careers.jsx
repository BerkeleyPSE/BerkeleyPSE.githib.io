// React
import React from "react";

// node modules
import styled from "styled-components";
import ReactTable from "react-table";
import "react-table/react-table.css";

// components
import { PageHeader, SectionHeader } from "../components/HeaderStyles";
import { fulltime_columns, fulltime_careers } from "./fulltime_constants";

const Careers = props => {
  document.title = "Careers - Pi Sigma Epsilon | Zeta Chi Chapter";
  return (
    <CareersContainer>
      <PageHeader>Careers</PageHeader>
      <FullTimeContainer>
        <SectionHeader alt>Full-Time</SectionHeader>
        <TableContainer>
          <ReactTable
            className="-striped"
            columns={fulltime_columns}
            data={fulltime_careers}
            showPagination={false}
            resizable={false}
            filterable={false}
            filterMethod={this.filterTable}
            pageSize={fulltime_careers.length}
            defaultSorted={[{ id: "name", desc: false }]}
          />
        </TableContainer>
      </FullTimeContainer>
    </CareersContainer>
  );
};

export default Careers;

const CareersContainer = styled.div``;

const FullTimeContainer = styled.div`
  padding: 0 0 40px;
`;

const TableContainer = styled.div`
  margin: 0;
  padding: 0;
`;

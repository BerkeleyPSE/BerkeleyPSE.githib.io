import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  table: {
    border: "none"
  },

  columnName: {
    color: "#303030",
    fontFamily: "Lato, sans-serif",
    fontSize: "0.9em",
    fontWeight: "bold",
    letterSpacing: "0.025em",
    textTransform: "uppercase"
  },

  cell: {
    display: "flex",
    alignItems: "center",
    color: "#818181",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    fontWeight: "400",
    overflowX: "auto",
    overflowY: "hidden"
  },

  centered: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  }
});

const intern_columns = [
  {
    Header: "Name",
    accessor: "name",
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 150,
    maxWidth: 200
  },

  {
    Header: "Year",
    accessor: "summer_year",
    className: css(styles.table, styles.cell, styles.centered),
    headerClassName: css(styles.columnName),
    minWidth: 100,
    maxWidth: 150
  },

  {
    Header: "Industry",
    accessor: "industry",
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 175,
    maxWidth: 250
  },

  {
    Header: "Company",
    accessor: "company",
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 225,
    maxWidth: 275
  },

  {
    Header: "Position",
    accessor: "position",
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 225,
    maxWidth: 275
  },

  {
    Header: "Location",
    accessor: "location",
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 150,
    maxWidth: 225
  }
];

const internships = [
  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  },

  {
    name: "Rahul",
    summer_year: "2016",
    industry: "Human Resources & Staffing",
    company: "Stepping Stone Inc",
    position: "Business Development",
    location: "San Francisco, CA"
  }
];

export { intern_columns, internships };

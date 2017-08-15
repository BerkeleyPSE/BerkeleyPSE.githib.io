import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    border: 'none'
  },

  columnName: {
    color: '#303030',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.9em',
    fontWeight: 'bold',
    letterSpacing: '0.025em',
    textTransform: 'uppercase'
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    color: '#818181',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.9em',
    fontWeight: '400',
    overflowX: 'auto',
    overflowY: 'hidden',
    padding: '7px 15px'
  },

  centered: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },

  name: {
    color: '#895FAD',
    fontWeight: 'bold'
  }
});

const fulltime_columns = [
  {
    Header: 'Name',
    accessor: 'name',
    className: css(styles.table, styles.cell, styles.name),
    headerClassName: css(styles.columnName),
    minWidth: 175
    // maxWidth: 200
    // maxWidth: 250,
  },

  {
    Header: 'Year',
    accessor: 'grad_year',
    className: css(styles.table, styles.cell, styles.centered),
    headerClassName: css(styles.columnName),
    minWidth: 100,
    maxWidth: 150,
    show: false
  },

  {
    Header: 'Industry',
    accessor: 'industry',
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 200
    // maxWidth: 250
  },

  {
    Header: 'Company',
    accessor: 'company',
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 250
    // maxWidth: 275
    // maxWidth: 300
  },

  {
    Header: 'Position',
    accessor: 'position',
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 250
    // maxWidth: 275
    // maxWidth: 325
  },

  {
    Header: 'Location',
    accessor: 'location',
    className: css(styles.table, styles.cell),
    headerClassName: css(styles.columnName),
    minWidth: 175
    // maxWidth: 225
    // maxWidth: 275
  }
];

const fulltime_careers = [
  // 7 items
  {
    name: 'Sabrina Ruiz',
    grad_year: '2014',
    industry: 'Marketing',
    company: 'Pacific Arts Movement',
    position: 'Marketing Coordinator',
    location: 'San Diego, CA'
  },
  {
    name: 'Cynthia Huang',
    grad_year: '2016',
    industry: 'Marketing',
    company: 'Benefit Cosmetics',
    position: 'Marketing Coordinator',
    location: 'San Francisco, CA'
  },
  {
    name: 'Peggy Lin',
    grad_year: '2016',
    industry: 'Marketing',
    company: 'Smule',
    position: 'User Acquisition Manager',
    location: 'San Francisco, CA'
  },

  {
    name: 'Sara Lim',
    grad_year: '2016',
    industry: 'Marketing',
    company: 'CJ Affiliate',
    position: 'Account Coordinator',
    location: 'San Francisco, CA'
  },
  {
    name: 'Eva Chen',
    grad_year: '2017',
    industry: 'Sales',
    company: 'Oracle',
    position: 'Cloud Applications Consultant',
    location: 'San Francisco, CA'
  },
  {
    name: 'Shreya Jerath',
    grad_year: '2017',
    industry: 'Business Analytics',
    company: 'DigitasLBi',
    position: 'Analyst',
    location: 'San Francisco, CA'
  },
  {
    name: 'Reann Pham',
    grad_year: '2017',
    industry: 'Business Analytics',
    company: 'PricewaterhouseCoopers',
    position: 'Data Analyst',
    location: 'San Francisco, CA'
  },
  {
    name: 'Dorene Zhou',
    grad_year: '2017',
    industry: 'Consulting',
    company: 'Infosys Consulting',
    position: 'Analyst',
    location: 'San Francisco, CA'
  },
  {
    name: 'Jane Suk',
    grad_year: '2017',
    industry: 'Consulting',
    company: 'ZS Associates',
    position: 'Analyst',
    location: 'San Francisco, CA'
  },
  {
    name: 'Melody Chu',
    grad_year: '2017',
    industry: 'Consulting',
    company: 'Triage Consulting',
    position: 'Analyst',
    location: 'San Francisco, CA'
  },
  {
    name: 'Lydia Kim',
    grad_year: '2016',
    industry: 'Finance',
    company: 'McKinsey & Company',
    position: 'Associate Analyst',
    location: 'Chicago, IL'
  },
  {
    name: 'Hiu Ngan',
    grad_year: '2016',
    industry: 'Finance',
    company: 'Bank of America Merrill Lynch',
    position: 'Analyst',
    location: 'San Francisco, CA'
  },
  {
    name: 'Farhan Lokman',
    grad_year: '2016',
    industry: 'Finance',
    company: 'Bank Negara Malaysia',
    position: 'Associate Supervisor',
    location: 'Kuala Lumpur, Malaysia'
  },
  {
    name: 'Anh Thai',
    grad_year: '2015',
    industry: 'Technology',
    company: 'Darktrace',
    position: 'Cybersecurity Technologist',
    location: 'San Francisco, CA'
  },
  {
    name: 'Nathan Aminpour',
    grad_year: '2017',
    industry: 'Technology',
    company: 'Driver',
    position: 'Product Operations Associate',
    location: 'San Francisco, CA'
  },
  {
    name: 'Judy Fang',
    grad_year: '2015',
    industry: 'Business Analytics',
    company: 'Medallia',
    position: 'Analyst',
    location: 'Palo Alto, CA'
  },
  {
    name: 'Kent Chen',
    grad_year: '2016',
    industry: 'Business Analytics',
    company: 'SoCalGas',
    position: 'Business Analyst',
    location: 'Los Angeles, CA'
  },
  {
    name: 'Kelly Chao',
    grad_year: '2015',
    industry: 'Human Resources',
    company: 'Target',
    position: 'Executive Team Leader',
    location: 'San Francisco, CA'
  },
  {
    name: 'David Javidzad',
    grad_year: '2017',
    industry: 'Graduate School',
    company: 'USC Gould School of Law',
    position: 'Law Student',
    location: 'Los Angeles, CA'
  },
  {
    name: 'Anne-Ting Chen',
    grad_year: '2017',
    industry: 'Consulting',
    company: 'PricewaterhouseCoopers',
    position: 'Analyst',
    location: 'Tokyo, Japan'
  },
  {
    name: 'Lily Li',
    grad_year: '2017',
    industry: '',
    company: '',
    position: '',
    location: 'San Francisco, CA'
  },
  {
    name: 'Young Hoon Kim',
    grad_year: '2017',
    industry: '',
    company: '',
    position: '',
    location: 'San Francisco, CA'
  },
  {
    name: 'Lily Muñoz',
    grad_year: '2014',
    industry: 'Sales',
    company: 'Oracle',
    position: 'SMB Application Sales Executive',
    location: 'Redwood City, CA'
  },
  {
    name: 'Jina Yoo',
    grad_year: '2014',
    industry: 'Human Resources',
    company: 'Slack',
    position: 'Technical Recruiter',
    location: 'San Francisco, CA'
  },
  {
    name: 'Sarah Virani',
    grad_year: '2015',
    industry: 'Business Analytics',
    company: 'Adobe',
    position: 'Financial Analyst',
    location: 'San Francisco, CA'
  }
];

export { fulltime_columns, fulltime_careers };

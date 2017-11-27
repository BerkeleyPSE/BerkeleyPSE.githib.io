// React
import React from 'react';

// NPM Components
import { StyleSheet, css } from 'aphrodite';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Local Helper Files
import { animations } from '../../stylesheets/Animations.js';
import { fulltime_columns, fulltime_careers } from './fulltime_constants';
// import { intern_columns, internships } from './intern_constants';

const Careers = props => {
  document.title = 'Careers - Pi Sigma Epsilon | Zeta Chi Chapter';
  return (
    <div className={css(animations.fadeIn) + ' careers-container'}>
      <h1 className={css(styles.header)}>Careers</h1>
      <div className={css(styles.fulltimeContainer)}>
        <h2 className={css(styles.sectionHeader)}>Full-Time</h2>
        <div className={css(styles.table)}>
          <ReactTable
            className="-striped"
            columns={fulltime_columns}
            data={fulltime_careers}
            showPagination={false}
            resizable={false}
            filterable={false}
            filterMethod={this.filterTable}
            pageSize={fulltime_careers.length}
            defaultSorted={[{ id: 'name', desc: false }]}
          />
        </div>
      </div>
      {/* // TODO: GET ACTIVES' INTERNSHIP INFO
      <div className={css(styles.internContainer)}>
        <h2 className={css(styles.sectionHeader)}>Internships</h2>
        <div className={css(styles.table)}>
          <ReactTable
            className="-striped"
            columns={intern_columns}
            data={internships}
            showPagination={false}
            resizable={false}
            filterable={false}
            pageSize={internships.length}
            defaultSorted={[{ id: 'name', desc: false }]}
          />
        </div>
      </div>
      */}
    </div>
  );
};

export default Careers;

const styles = StyleSheet.create({
  fulltimeContainer: {
    padding: '0 0 40px'
  },

  internContainer: {
    padding: '40px 0'
  },

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  sectionHeader: {
    color: '#303030',
    fontFamily: 'Lato, sans-serif',
    fontSize: '2em',
    fontWeight: '500',
    margin: '0',
    padding: '0 30px 20px',
    textAlign: 'left',
    '@media(max-width: 768px)': {
      textAlign: 'center',
      padding: '30px 0'
    }
  },

  table: {
    margin: '0',
    padding: '0'
  }
});

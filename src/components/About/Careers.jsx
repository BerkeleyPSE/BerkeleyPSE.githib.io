// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// NPM Components
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// Local Helper Files
import { animations } from '../../stylesheets/Animations.js';
import { fulltime_columns, fulltime_careers } from './fulltime_constants';
import { intern_columns, internships } from './intern_constants';

export default class Careers extends React.Component {
  render() {
    return (
      <div className={css(styles.careersContainer, animations.fadeIn)}>
        <div className={css(styles.fulltimeContainer)}>
          <h2 className={css(styles.header)}>Full-Time</h2>
          <div className={css(styles.table)}>
            <ReactTable
              columns={fulltime_columns}
              data={fulltime_careers}
              showPagination={false}
              resizable={false}
              pageSize={fulltime_careers.length}
            />
          </div>
        </div>
        <div className={css(styles.internContainer)}>
          <h2 className={css(styles.header)}>Internships</h2>
          <div className={css(styles.table)}>
            <ReactTable
              columns={intern_columns}
              data={internships}
              showPagination={false}
              resizable={false}
              pageSize={internships.length}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  careersContainer: {
    padding: '40px'
  },

  fulltimeContainer: {
    padding: '20px'
  },

  internContainer: {
    padding: '20px'
  },

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500'
  },

  table: {}
});

const tableStyles = StyleSheet.create({});

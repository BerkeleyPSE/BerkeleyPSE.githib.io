// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { fulltime_columns, fulltime_careers } from './fulltime_constants';
import { intern_columns, internships } from './intern_constants';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Careers extends React.Component {
  render() {
    return (
      <div className={css(styles.careersContainer)}>
        <div className={css(styles.fulltimeContainer)}>
          <h2 className={css(styles.header)}>Full-Time</h2>
          <div className={css(styles.table)}>
            <ReactTable
              columns={fulltime_columns}
              data={fulltime_careers}
              showPagination={false}
              resizable={false}
              page={1}
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
              page={1}
              pageSize={internships.length}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

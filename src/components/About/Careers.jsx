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
          <h2 className={css(styles.header)}>Internships</h2>
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
  }
}

const styles = StyleSheet.create({
  careersContainer: {
    padding: '40px 0'
  },

  fulltimeContainer: {
    padding: '20px 0'
  },

  internContainer: {
    padding: '20px 0'
  },

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '10px 30px',
    '@media (max-width: 900px)': {
      padding: 'none',
      textAlign: 'center'
    }
  },

  table: {
    margin: '0',
    padding: '0'
  }
});

const tableStyles = StyleSheet.create({});

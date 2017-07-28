// React
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import { brotherList, brotherInfo } from './brotherhood_constants';

export default class Brother extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allBrothers = brotherList.map(brother => {
      var bro = brotherInfo[brother];
      return (
        <li>
          <img src={bro.img} />
        </li>
      );
    });

    return (
      <ul>
        {allBrothers}
      </ul>
    );
  }
}

const styles = StyleSheet.create({});

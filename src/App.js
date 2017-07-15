import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Root extends Component {
  render() {
    var Routes = null;

    return (
      <Router style={{ height: '100%' }}>
        <div style={{ height: '100%' }}>
          <Route component={Routes} />
        </div>
      </Router>
    );
  }
}

export default connect()(Root);

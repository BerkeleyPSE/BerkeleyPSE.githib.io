import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    var Routes = null;

    return (
      <Router style={{ height: '100%' }}>
        <div style={{ height: '100%' }}>
          Hello
          <Route component={Routes} />
        </div>
      </Router>
    );
  }
}

export default App;

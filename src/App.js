import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from './components/routes';

class App extends Component {
  render() {
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

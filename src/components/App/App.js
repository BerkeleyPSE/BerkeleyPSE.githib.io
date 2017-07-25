// import React
import React, { Component } from 'react';

// import routers
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

// import local components
import Routes from '../router/routes';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router style={{ height: '100%' }}>
        <div style={{ height: '100%' }}>
          <ScrollToTop>
            <Route component={Routes} />
          </ScrollToTop>
        </div>
      </Router>
    );
  }
}

export default App;

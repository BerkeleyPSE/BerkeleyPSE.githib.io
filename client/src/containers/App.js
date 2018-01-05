// import React
import React, { Component } from "react";

// import routers
import { BrowserRouter as Router, Route } from "react-router-dom";

// import local components
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Routes} />
      </Router>
    );
  }
}

export default App;

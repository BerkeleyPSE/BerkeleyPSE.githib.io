import React from "react";

// node modules
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Routes} />
      </Router>
    );
  }
}

export default App;

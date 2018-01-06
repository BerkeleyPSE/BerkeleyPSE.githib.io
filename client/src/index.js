// React
import React from "react";
import ReactDOM from "react-dom";

// React Redux & Router
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";
import reduxThunk from "redux-thunk";

// Local Components
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import rootReducer from "./reducers/index.js";
import "./index.css";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
let history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

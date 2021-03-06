import React from "react";
import ReactDOM from "react-dom";

// node modules
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";
import reduxThunk from "redux-thunk";

// components
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import ScrollToTop from "./containers/ScrollToTop";
import rootReducer from "./reducers/index.js";
import "./index.css";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
let history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

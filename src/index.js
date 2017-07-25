// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Redux & Router
import { Provider } from 'react-redux';
import { Router } from 'react-router';

// Local Components
import { configure, history } from './store/configure-store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import './index.css';

const store = configure();

console.log(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });
  window.store = store;
}

registerServiceWorker();

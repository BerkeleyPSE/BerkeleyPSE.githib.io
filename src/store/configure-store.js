// import a bunch of Middleware
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';

// import the local reducer
import rootReducer from '../reducers';

export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

/*
configure the logger middleware
(this is what you'll see when you 'Inspect' the console)
*/
const logger = createLogger({
  level: 'info',
  collapsed: true
});

/*
only show the logger output in the console if the app
is in development, NOT production
*/
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware)(createStore)
);

export function configure(initialState) {
  // create the redux store and apply middleware to it
  var configStore = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(function _() {
      configStore.replaceReducer(rootReducer);
    });
  }

  return configStore;
}

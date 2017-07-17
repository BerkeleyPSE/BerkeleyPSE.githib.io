import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import MainReducer from './main-reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  main: MainReducer
});

export default rootReducer;

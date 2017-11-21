import { combineReducers } from 'redux';
import MainReducer from './main-reducer';

const rootReducer = combineReducers({
  main: MainReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MainReducer from './main-reducer';

const rootReducer = combineReducers({
  main: MainReducer,
  form: formReducer
});

export default rootReducer;

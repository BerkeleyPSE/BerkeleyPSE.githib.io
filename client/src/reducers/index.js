// node modules
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// local
import AppReducer from "./app-reducer";
import DataReducer from "./data-reducer";

const rootReducer = combineReducers({
  app: AppReducer,
  form: formReducer,
  data: DataReducer
});

export default rootReducer;

import { DataConstants } from "../actions/data-actions";

const defaultState = {
  brothers: [],
  executives: [],
  brothersList: [],
  executivesList: [],
  fulltimes: [],
  internships: []
};

const DataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DataConstants.GET_BROTHERS:
    case DataConstants.GET_FULLTIMES:
    case DataConstants.GET_INTERNSHIPS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default DataReducer;

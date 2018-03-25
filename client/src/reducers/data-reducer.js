import { DataConstants } from "../actions/data-actions";

const defaultState = {
  brothers: [],
  executives: [],
  brothersList: [],
  executivesList: [],
  activeBrother: {},
  prevBro: {},
  nextBro: {},
  fulltimes: [],
  internships: []
};

const DataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DataConstants.GET_BROTHERS:
    case DataConstants.GET_ACTIVE_BROTHER:
    case DataConstants.GET_PREV_BROTHER:
    case DataConstants.GET_NEXT_BROTHER:
    case DataConstants.GET_FULLTIMES:
    case DataConstants.GET_INTERNSHIPS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default DataReducer;

import { AppConstants } from '../actions/app-actions';

const defaultState = {
  appSubmitSuccess: undefined
};

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AppConstants.SUBMIT_APP:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AppReducer;

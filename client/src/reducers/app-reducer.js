import { AppConstants } from '../actions/app-actions';

const defaultState = {
  appSubmitSuccess: undefined,
  formSubmitSuccess: undefined
};

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AppConstants.SUBMIT_APP:
    case AppConstants.SUBMIT_FORM:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default AppReducer;

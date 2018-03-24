// node modules
import axios from "axios";

// local
import API from "./api";

export const AppConstants = {
  SUBMIT_APP: "SUBMIT_APP",
  SUBMIT_FORM: "SUBMIT_FORM"
};

export const AppActions = {
  submitApplication: values => async dispatch => {
    const res = await axios.post(API.CREATE_APP, values);
    return dispatch({
      type: AppConstants.SUBMIT_APP,
      appSubmitSuccess: res.data
    });
  },

  submitForm: values => async dispatch => {
    const res = await axios.post(API.CREATE_REGFORM, values);
    return dispatch({
      type: AppConstants.SUBMIT_FORM,
      formSubmitSuccess: res.data
    });
  }
};

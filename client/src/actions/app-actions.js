import axios from "axios";

export const AppConstants = {
  SUBMIT_APP: "SUBMIT_APP",
  SUBMIT_FORM: "SUBMIT_FORM"
};

export const AppActions = {
  submitApplication: values => async dispatch => {
    const res = await axios.post("/api/applications", values);
    return dispatch({
      type: AppConstants.SUBMIT_APP,
      appSubmitSuccess: res.data
    });
  },

  submitForm: values => async dispatch => {
    const res = await axios.post("/api/regforms", values);
    return dispatch({
      type: AppConstants.SUBMIT_FORM,
      formSubmitSuccess: res.data
    });
  }
};

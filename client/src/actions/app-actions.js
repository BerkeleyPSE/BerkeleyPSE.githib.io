import axios from 'axios';

export const AppConstants = {
  SUBMIT_APP: 'SUBMIT_APP'
};

export const AppActions = {
  submitApplication: values => async dispatch => {
    const res = await axios.post('/api/apps', values);
    return dispatch({
      type: AppConstants.SUBMIT_APP,
      submitAppSuccess: res.data
    });
  }
};

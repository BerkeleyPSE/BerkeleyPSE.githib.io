// node modules
import axios from "axios";

// local
import API from "./api";

export const DataConstants = {
  GET_BROTHERS: "GET_BROTHERS",
  GET_ACTIVE_BROTHER: "GET_ACTIVE_BROTHER",
  GET_PREV_BROTHER: "GET_PREV_BROTHER",
  GET_NEXT_BROTHER: "GET_NEXT_BROTHER",
  GET_FULLTIMES: "GET_FULLTIMES",
  GET_INTERNSHIPS: "GET_INTERNSHIPS"
};

export const DataActions = {
  getBrothers: () => async dispatch => {
    const res = await axios.get(API.GET_BROTHERS, {});
    dispatch({
      type: DataConstants.GET_BROTHERS,
      brothers: res.data.brothers,
      brothersList: res.data.brothersList,
      executivesList: res.data.executivesList
    });
  },

  getActiveBrother: key => async dispatch => {
    const params = { key };
    const res = await axios.get(API.GET_ACTIVE_BROTHER, { params });
    dispatch({
      type: DataConstants.GET_ACTIVE_BROTHER,
      activeBrother: res.data
    });
    return res.data;
  },

  getPrevBro: key => async dispatch => {
    const params = { key };
    const res = await axios.get(API.GET_BROTHER_INFO, { params });
    dispatch({
      type: DataConstants.GET_PREV_BROTHER,
      prevBro: res.data
    });
  },

  getNextBro: key => async dispatch => {
    const params = { key };
    const res = await axios.get(API.GET_BROTHER_INFO, { params });
    dispatch({
      type: DataConstants.GET_NEXT_BROTHER,
      nextBro: res.data
    });
  },

  getFulltimes: () => async dispatch => {
    const res = await axios.get(API.GET_FULLTIMES, {});
    dispatch({
      type: DataConstants.GET_FULLTIMES,
      fulltimes: res.data
    });
  },

  getInternships: () => async dispatch => {
    const res = await axios.get(API.GET_INTERNSHIPS, {});
    dispatch({
      type: DataConstants.GET_INTERNSHIPS,
      internships: res.data
    });
  }
};

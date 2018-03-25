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
      brothers: restructureData(res.data.brothers),
      executives: restructureData(res.data.executives),
      brothersList: res.data.brothersList,
      executivesList: res.data.executivesList
    });
  },

  getFulltimes: () => async dispatch => {
    const res = await axios.get(API.GET_FULLTIMES, {});
    dispatch({
      type: DataConstants.GET_FULLTIMES,
      fulltimes: res.data
    });
    debugger;
    return res.data;
  },

  getInternships: () => async dispatch => {
    const res = await axios.get(API.GET_INTERNSHIPS, {});
    dispatch({
      type: DataConstants.GET_INTERNSHIPS,
      internships: res.data
    });
    return res.data;
  }
};

function restructureData(data) {
  let res = {};
  data.forEach(d => (res[d.key] = d));
  return res;
}

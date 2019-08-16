import axios from "axios";

export const getData = () => {
  return dispatch => {
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get("https:rickandmortyapi.com/api/character")
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.response });
      });
  };
};

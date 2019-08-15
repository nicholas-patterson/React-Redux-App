import axios from "axios";

const API_KEY = "137c7ca49af365102690e25ac22d6569";

export const getData = term => {
  return dispatch => {
    dispatch({ type: "FETCH_WEATHER_START" });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}&units=imperial`
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "FETCH_WEATHER_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: "FEATCH_WEATHER_FAILURE", payload: err.response });
      });
  };
};

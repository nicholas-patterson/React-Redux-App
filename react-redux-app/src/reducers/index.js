const initialState = {
  isLoading: false,
  error: "",
  weather: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        weather: action.payload
      };
    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

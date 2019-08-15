const initialState = {
  characters: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: "",
        characters: action.payload
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

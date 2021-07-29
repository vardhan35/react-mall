import {
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./../ActionTypes";

function fetchReducer(state, action) {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        loading: true,
        data: [],
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default fetchReducer;

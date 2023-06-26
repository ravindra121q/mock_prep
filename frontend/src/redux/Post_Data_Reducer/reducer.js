import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./actionTypes";

const INITIAL_STATE = {
  data: [],
};

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case POST_DATA_REQUEST:
      return { ...state };
    case POST_DATA_SUCCESS:
      return { ...state, data: [...state.data, payload] };
    case POST_DATA_FAILURE:
      return { ...state };
    default:
      return state;
  }
};



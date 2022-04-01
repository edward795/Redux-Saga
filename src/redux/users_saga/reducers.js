import {
  FETCH_USERS_FAILURE_SAGA,
  FETCH_USERS_REQUEST_SAGA,
  FETCH_USERS_SUCCESS_SAGA,
} from "./types";

const initialState = {
  loading: false,
  users_saga: [],
  error: [],
};
export const userReducerviaSaga = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST_SAGA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS_SAGA:
      return {
        ...state,
        loading: false,
        users_saga: action.payload,
        error: [],
      };
    case FETCH_USERS_FAILURE_SAGA:
      return {
        ...state,
        loading: false,
        error: action.payload,
        users_saga: [],
      };
    default:
      return state;
  }
};

export default userReducerviaSaga;

import {
  FETCH_USERS_FAILURE_SAGA,
  FETCH_USERS_REQUEST_SAGA,
  FETCH_USERS_SUCCESS_SAGA,
} from "./types";

//action creators
export const fetchUsersRequestSaga = () => {
  return {
    type: FETCH_USERS_REQUEST_SAGA,
  };
};

export const fetchUsersSuccessSaga = (users_saga) => {
  return {
    type: FETCH_USERS_SUCCESS_SAGA,
    payload: users_saga,
  };
};

export const fetchUsersFailureSaga = (error) => {
  return {
    type: FETCH_USERS_FAILURE_SAGA,
    payload: error,
  };
};

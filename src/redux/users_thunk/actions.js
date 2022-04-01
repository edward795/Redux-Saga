import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./types";
import axios from "axios";

//action creators
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//redux-thunk axios request
export const fetchUsersData = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data;
        dispatch(fetchUsersSuccess(users));
        console.log(users);
      })
      .catch((error) => {
        let errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

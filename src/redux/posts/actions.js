import {
  FETCH_POST_REQUEST,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
} from "./types";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostsSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
};

export const fetchPostsError = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

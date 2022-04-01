import {
  FETCH_POST_REQUEST,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
} from "./types";

const initialstate = {
  loading: false,
  count: 0,
  error: "",
  posts: [],
};

export const postsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
        count: state.count + 1,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        post: {},
      };

    default:
      return state;
  }
};

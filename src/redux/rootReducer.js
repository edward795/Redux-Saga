import { combineReducers } from "redux";
import userReducer from "./users_thunk/reducers";
import userReducerviaSaga from "./users_saga/reducers";
import { postsReducer } from "./posts/reducers";

const rootReducer = combineReducers({
  userList: userReducer,
  userList_Saga: userReducerviaSaga,
  posts: postsReducer,
});

export default rootReducer;

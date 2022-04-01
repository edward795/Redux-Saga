import { takeEvery } from "@redux-saga/core/effects";
import fetchUsersSaga from "./fetchUsersSaga";
import { FETCH_USERS_REQUEST_SAGA } from "../redux/users_saga/types";
import { FETCH_POST_REQUEST } from "../redux/posts/types";
import fetchPostSaga from "./fetchPostsSaga";

//root saga - basically acts as the watcher saga
export default function* RootSaga() {
  yield takeEvery(FETCH_USERS_REQUEST_SAGA, fetchUsersSaga);
  yield takeEvery(FETCH_POST_REQUEST, fetchPostSaga);
}

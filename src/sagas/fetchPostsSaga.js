import { select, call, put } from "redux-saga/effects";
import { fetchPostsSuccess, fetchPostsError } from "../redux/posts/actions";
import { fetchPostsApi } from "../api";

const getPost = (state) => state.posts.count;

export default function* fetchPostSaga() {
  try {
    const postId = yield select(getPost);
    const postdata = yield call(fetchPostsApi, postId);
    yield put(fetchPostsSuccess(postdata));
  } catch (error) {
    yield put(fetchPostsError(error.toString()));
  }
}

import { call, put } from "redux-saga/effects";
import { fetchUsersApi } from "../api";
import {
  fetchUsersFailureSaga,
  fetchUsersSuccessSaga,
} from "../redux/users_saga/actions";

//fetch users worker saga
export default function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccessSaga(users));
  } catch (error) {
    yield put(fetchUsersFailureSaga(error.toString()));
  }
}

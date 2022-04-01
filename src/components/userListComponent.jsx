import React from "react";
import { fetchUsersData } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "./loader";
import { connect } from "react-redux";
import { fetchUsersRequestSaga } from "../redux/users_saga/actions";

const UserListComponent = (props) => {
  const { fetchUserRequestSaga } = props;

  const users = useSelector((state) => state.userList.users);
  const users_saga = useSelector((state) => state.userList_Saga.users_saga);
  const loading = useSelector((state) => state.userList.loading);
  const sagaLoading = useSelector((state) => state.userList_Saga.loading);
  const sagaError = useSelector((state) => state.userList_Saga.error);
  const Error = useSelector((state) => state.userList.error);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Users List </h2>
      <hr></hr>
      <p>
        Using <b>Redux Thunk</b>
      </p>
      <hr></hr>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(fetchUsersData())}
        >
          fetch users
        </button>
        {loading ? <Loader /> : null}
        {users && users.length > 0 ? (
          <div>
            {users.map((user, index) => (
              <li key={index}>{user.name}</li>
            ))}
          </div>
        ) : null}
        {Error ? <p>{Error}</p> : null}
      </div>
      <div>
        <hr></hr>
        <p>
          Using <b>Redux Saga</b>
        </p>
        <hr></hr>
        <button
          className="btn btn-success"
          onClick={() => fetchUserRequestSaga()}
        >
          Fetch Users
        </button>
        {sagaLoading ? <Loader /> : null}
        {users_saga && users_saga.length > 0 ? (
          <div>
            {users_saga.map((user, index) => (
              <li key={index}>{user.name}</li>
            ))}
          </div>
        ) : null}

        {sagaError ? <p>{sagaError}</p> : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRequestSaga: () => dispatch(fetchUsersRequestSaga()),
  };
};

export default connect(null, mapDispatchToProps)(UserListComponent);

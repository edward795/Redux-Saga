import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

//importing root saga
import RootSaga from "../sagas/rootSaga";

//creating saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

//running root saga
sagaMiddleware.run(RootSaga);

export default store;

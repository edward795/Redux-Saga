import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserListComponent from "./components/userListComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Posts } from "./components/Posts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserListComponent />
        <Posts />
      </div>
      ;
    </Provider>
  );
}

export default App;

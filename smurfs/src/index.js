import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/";
import SmurfForm from "./components/Smurfs/SmurfForm";
import Navbar from "./components/Navbar";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route exact path="/newsmurf" component={SmurfForm} />
      <Route exact path="/smurf/:smurfId" component={SmurfForm} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

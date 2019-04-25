import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/LoginPage";
import Landing from "./pages/Landing/Landing";
import { AUTH_USER } from "./actions/types";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";

import { store } from "./store";
const token = localStorage.getItem("token");

if (token) {
  const decoded = jwt_decode(token);

  store.dispatch({ type: AUTH_USER, payload: decoded });
}

class InitRouter extends React.Component {
  render() {
    if (this.props.authenticated) {
      return (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={App} />
          </Switch>
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      );
    }
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(InitRouter);

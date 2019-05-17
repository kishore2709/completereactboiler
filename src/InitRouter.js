import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/LoginPage";
import Landing from "./pages/Landing/Landing";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { authUser, signoutUser } from "./actions/actionsLogin";

class InitRouter extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.props.signoutUser();
        window.location.href = "./signin";
      }
      this.props.authUser(decoded);
    }
  }
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

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  authUser: decoded => dispatch(authUser(decoded)),
  signoutUser: () => dispatch(signoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitRouter);

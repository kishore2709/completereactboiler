import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/LoginPage";
import Landing from "./pages/Landing/Landing";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { authUser } from "./actions/actionsLogin";

import { store } from "./store";

  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwt_decode(token);
  
    store.dispatch(authUser(decoded));
  }


class InitRouter extends React.Component {

  componentDidMount() {
   // const token = localStorage.getItem("token");
    //if (!this.props.user && localStorage.getItem("token")) {
     // this.props.getAuthenticatedUser(token);
    //}
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

const  mapStateToProps = state =>({
  authenticated: state.auth.authenticated
});
/*
const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(checkToken())
});
*/
export default connect(
  mapStateToProps,
 // mapDispatchToProps,
  )(InitRouter);

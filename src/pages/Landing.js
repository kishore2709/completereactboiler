import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//import { AUTH_USER } from "../actions/types";
import { publicRoutes} from "../routes/index";
//import jwt_decode from "jwt-decode";
//import { PrivateRoute } from "../components/auth/PrivateRoute";
import theme from "../theme";
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppRoute from "../routes/AppRoute";
//import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap with material-ui
//injectTapEventPlugin()
/*
const token = localStorage.getItem("token");


window.addEventListener("beforeunload", ev => {
  localStorage.removeItem("token");
  ev.preventDefault();
  return (ev.returnValue = "Are you sure you want to close?");
});

if (token) {
  const decoded = jwt_decode(token);

  store.dispatch({ type: AUTH_USER, payload: decoded });
}
*/
class Landing extends Component {
  
  render() {
    return (
     
       
            <MuiThemeProvider theme={theme}>
              <div
                style={{
                  minHeight: "100vh",
                  overflow: " hidden",
                  display: "block",
                  position: " relative",
                  paddingBottom: "100px"
                }}
              >
                <div
                  style={{
                    // marginTop: "80px",
                    marginBottom: "260px"
                  }}
                >
              <Switch>
                  {publicRoutes.map(route => (
                    <AppRoute
                      exact
                      path={route.path}
                      component={route.component}
                      layout={route.layout}
                      key={route.path}
                    />
                  ))}
                  </Switch>
                </div>
              </div>
            </MuiThemeProvider>
        
    );
  }
}

export default Landing;

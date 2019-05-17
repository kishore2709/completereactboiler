import React from "react";
import { Switch } from "react-router-dom";
import { publicRoutes} from "../../routes/index";
import { PrivateRoute } from "../../routes/PrivateRoute";
import theme from "../../theme";
import { MuiThemeProvider } from '@material-ui/core/styles';
const Landing = () => {
  
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
                    <PrivateRoute
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

export default Landing;

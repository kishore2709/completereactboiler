import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { renderTextField } from "../../../utilities/form_helpers";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { signinUser } from "../../../actions/actionsLogin";
import PropTypes from "prop-types";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops: </strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }
  // componentWillUnmount() {
  //   if (this.props.errorMessage) {
  //     this.props.authError(null);
  //   }
  // }

  displayRedirectMessages() {
    const location = this.props.location;
    return (
      location.state && (
        <div className="alert alert-danger">{location.state.message}</div>
      )
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const loginCredentials = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signinUser(loginCredentials);
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getRedirectPath() {
    const locationState = this.props.location.state;
    if (locationState && locationState.from.pathname) {
      return locationState.from.pathname; // redirects to referring url
    } else {
      return "/dashboard";
    }
  }

  render() {
    return this.props.authenticated ? (
      <Redirect
        to={{
          pathname: "/dashboard",
          state: {
            from: this.props.location
          }
        }}
      />
    ) : (
      <div>
        {this.displayRedirectMessages()}
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "25vh" }}
        >
          {this.renderAlert()}
          {/* 1. Bind in render - creates new function everytime component renders
         <form onSubmit={this.handleSubmit.bind(this)}>
         2. Use arrow function in render - creates new function everytime component renders
          <form onSubmit={()=> this.handleSubmit()}>
          3. Bind in constructor - better performance than 1 & 2

         */}
          <form onSubmit={this.handleSubmit}>
            <Field
              name="email"
              component={renderTextField}
              type="text"
              placeholder="Username"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />

            <Field
              name="password"
              component={renderTextField}
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

Signin.propTypes = {
  signinUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    errorMessage: state.auth.error
  };
}

Signin = connect(
  mapStateToProps,
  { signinUser }
)(Signin);

Signin = reduxForm({
  form: "signin"
})(Signin);

export default Signin;

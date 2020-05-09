import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  render() {
    return (
      <>
        {!this.props.loggedIn ? (
          <Redirect to="/login" />
        ) : (
          <Route
            exact
            path={this.props.path}
            render={() => this.props.children}
          />
        )}
      </>
    );
  }
}

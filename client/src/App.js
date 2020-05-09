import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import PrivateRoute from './PrivateRoute';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: '',
      id: '',
      name: '',
      role: ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login(email, password) {
    axios
      .post('/api/v1/users/login', {
        email,
        password
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            loggedIn: true,
            email: res.data.data.user.email,
            id: res.data.data.user.id,
            name: res.data.data.user.name,
            role: res.data.data.user.role
          });
        }
      });
  }
  logout() {
    this.setState({
      loggedIn: false,
      email: '',
      id: '',
      name: '',
      role: ''
    });
  }
  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/login"
              render={routeProps => (
                <Login {...routeProps} login={this.login} />
              )}
            />
            <Route
              exact
              path="/logout"
              render={() => (
                <div className="container text-center mt-5">
                  <h1 className="h3 mb-3 font-weight-normal">
                    You have been logged out.
                  </h1>
                </div>
              )}
            />
            <PrivateRoute path="/" loggedIn={this.state.loggedIn}>
              <HomePage />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    );
  }
}

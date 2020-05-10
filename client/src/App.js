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
      id: ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login(email, password) {
    try {
      axios
        .post(
          `${process.env.REACT_APP_API_PATH}/api/v1/users/login`,
          {
            email,
            password
          },
          {
            withCredentials: true
          }
        )
        .then(res => {
          if (res.status === 200) {
            this.setState({
              loggedIn: true,
              id: res.data.data.user.id
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    try {
      axios
        .get(`${process.env.REACT_APP_API_PATH}/node/api/v1/users/logout`, {
          withCredentials: true
        })
        .then(res => {
          if (res.status === 200) {
            this.setState({
              loggedIn: false,
              id: ''
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/login"
              render={routeProps => (
                <Login
                  {...routeProps}
                  login={this.login}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <PrivateRoute path="/" loggedIn={this.state.loggedIn}>
              <HomePage userId={this.state.id} />
            </PrivateRoute>
          </Switch>
        </div>
      </div>
    );
  }
}

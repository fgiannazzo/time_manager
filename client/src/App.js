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
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/login"
              render={routeProps => (
                <Login {...routeProps} login={this.login} />
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

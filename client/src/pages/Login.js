import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', loading: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      email: this.state.email,
      password: this.state.password,
      loading: true
    });
    this.props.login(this.state.email, this.state.password);
    setTimeout(() => {
      this.props.history.push('/');
    }, 1000);
  }
  render() {
    return (
      <div className="Login container text-center">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-lg btn-info btn-block mt-3" type="submit">
            {!this.state.loading ? (
              <span>Sign In</span>
            ) : (
              <span className="Spinner spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </span>
            )}
          </button>
          <Link to="/signup">
            <p className="Signup mt-3 mb-3">Signup</p>
          </Link>
          <p className="mt-5 mb-3 text-muted">Reset Password</p>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Signup.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    };
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
      confirmPassword: this.state.confirmPassword,
      loading: true
    });
    this.props.signup(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    );
    setTimeout(() => {
      if (this.props.loggedIn) {
        this.props.history.push('/');
      } else {
        setTimeout(() => {
          if (!this.props.loggedIn) {
            alert('Timed out!');
            this.setState({
              loading: false
            });
          }
        }, 5000);
      }
    }, 1000);
  }
  render() {
    return (
      <div className="Login container text-center">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Name
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            placeholder="Name"
            required
            autoFocus
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
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
          <label htmlFor="inputPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <button className="btn btn-lg btn-info btn-block mt-3" type="submit">
            {!this.state.loading ? (
              <span>Sign Up</span>
            ) : (
              <span className="Spinner spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </span>
            )}
          </button>
        </form>
      </div>
    );
  }
}

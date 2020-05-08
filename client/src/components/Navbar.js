import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light Navbar">
          <Link to="/" className="navbar-brand">
            <img
              className="Navbar-logo"
              src="img/eventek_logo.svg"
              alt="logo"
            />
            <span className="Navbar-title">Time Manager</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/features" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/pricing" className="nav-link">
                  Settings
                </NavLink>
              </li>
            </ul>
            <form className="form-inline ">
              <button className="form-control mr-sm-2 btn btn-outline-info my-2 my-sm-0">
                Login
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

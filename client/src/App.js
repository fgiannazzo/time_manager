import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <HomePage />
        </div>
      </div>
    );
  }
}

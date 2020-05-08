import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePageCard.css';

export default class HomePageCard extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="HomePage-card card">
          <div className="card-body">
            <h2 className="card-title">Card</h2>
            <h4 className="card-subtitle text-muted">
              This is a card with some content
            </h4>
          </div>
          <div className="card-body">
            <Link to="/card1" className="btn btn-info">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

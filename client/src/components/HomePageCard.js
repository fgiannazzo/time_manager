import React, { Component } from 'react';
import './HomePageCard.css';

export default class HomePageCard extends Component {
  static defaultProps = {
    size: 'col-md-6 col-lg-4'
  };
  render() {
    return (
      <div className={this.props.size}>
        <div className="HomePage-card card">
          <div className="card-header">{this.props.title}</div>
          <div className="card-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

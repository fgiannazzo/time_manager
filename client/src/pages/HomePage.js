import React, { Component } from 'react';
import HomePageCard from '../components/HomePageCard';

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage ">
        <h4 className="text-center my-4">Dashboard</h4>
        <div className="row">
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
        </div>
      </div>
    );
  }
}

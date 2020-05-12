import React, { Component } from 'react';
import DashboardCard from '../components/DashboardCard';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row my-4">
        <DashboardCard>
          <p>This is a graph</p>
        </DashboardCard>
        <DashboardCard>
          <p>This is a graph</p>
        </DashboardCard>
        <DashboardCard>
          <p>This is a graph</p>
        </DashboardCard>
      </div>
    );
  }
}

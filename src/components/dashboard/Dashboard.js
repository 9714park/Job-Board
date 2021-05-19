import { Fragment } from 'react';
import './Dashboard.css';
import DashboardJobs from './DashboardJobs';
import DashboardPositions from './DashboardPositions';
import DashboardStatus from './DashboardStatus';

function Dashboard() {
  return (
    <Fragment>
      <DashboardStatus />
      <DashboardJobs />
      <DashboardPositions />
    </Fragment>
  );
}

export default Dashboard;

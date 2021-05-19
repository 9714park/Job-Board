import { Fragment } from 'react';
import './Dashboard.css';
import DashboardJobs from './DashboardJobs';
import DashboardStatus from './DashboardStatus';

function Dashboard() {
  return (
    <Fragment>
      <DashboardStatus />
      <DashboardJobs />
    </Fragment>
  );
}

export default Dashboard;

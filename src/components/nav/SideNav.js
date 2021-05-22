import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  const [homeActive, setHomeActive] = useState(false);
  const [jobsActive, setJobsActive] = useState(false);
  const [applicationActive, setApplicationActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const homeNavigated = () => {
    setJobsActive(false);
    setApplicationActive(false);
    setProfileActive(false);
    setHomeActive(true);
  };
  const jobNavigated = () => {
    setJobsActive(true);
    setApplicationActive(false);
    setProfileActive(false);
    setHomeActive(false);
  };
  const applicationNavigated = () => {
    setJobsActive(false);
    setApplicationActive(true);
    setProfileActive(false);
    setHomeActive(false);
  };
  const profileNavigated = () => {
    setJobsActive(false);
    setApplicationActive(false);
    setProfileActive(true);
    setHomeActive(false);
  };

  return (
    <div className='side-nav'>
      <h2>Jboard</h2>
      <ul className='side-nav__items'>
        <li className={`nav-item ${homeActive ? 'active' : ''}`}>
          <Link to='/' onClick={homeNavigated}>
            <i className='bx bx-home-alt'></i>
            <span className='nav-text'>Home</span>
          </Link>
        </li>
        <li className={`nav-item ${jobsActive ? 'active' : ''}`}>
          <Link to='/jobs' onClick={jobNavigated}>
            <i className='bx bx-search-alt'></i>
            <span className='nav-text'>Search Jobs</span>
          </Link>
        </li>
        <li className={`nav-item ${applicationActive ? 'active' : ''}`}>
          <Link to='/application' onClick={applicationNavigated}>
            <i className='bx bx-paper-plane'></i>
            <span className='nav-text'>Applications</span>
          </Link>
        </li>
        <li className={`nav-item ${profileActive ? 'active' : ''}`}>
          <Link to='/profile' onClick={profileNavigated}>
            <i className='bx bx-user-circle'></i>
            <span className='nav-text'>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

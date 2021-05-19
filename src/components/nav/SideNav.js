import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
  return (
    <div className='side-nav'>
      <h2>Jboard</h2>
      <ul className='side-nav__items'>
        <li className='nav-item'>
          <Link to='/home'>
            <i className='bx bx-home-alt'></i>
            <span className='nav-text'>Home</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/home'>
            <i className='bx bx-search-alt'></i>
            <span className='nav-text'>Search Jobs</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/home'>
            <i className='bx bx-paper-plane'></i>
            <span className='nav-text'>Applications</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/home'>
            <i className='bx bx-user-circle'></i>
            <span className='nav-text'>Profile</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/home'>
            <i className='bx bx-message-detail'></i>
            <span className='nav-text'>Messages</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

import React from 'react';
import { Link } from 'react-router-dom';
import CardSlider from '../ui/CardSlider';

function DashboardJobs() {
  return (
    <div className='col-xl-12'>
      <div className='d-sm-flex align-items-center mb-sm-3 mt-sm-2 mt-2  mb-2'>
        <h4 className='fs-20 text-black mr-auto mb-sm-0 mb-2'>Recomended Jobs</h4>
      </div>
      <div className='testimonial-one owl-carousel'>
        <CardSlider />
      </div>
      <Link to='/companies' className='btn btn-outline-primary rounded mb-sm-0 mt-2 ml-3'>
        View More
      </Link>
    </div>
  );
}

export default DashboardJobs;

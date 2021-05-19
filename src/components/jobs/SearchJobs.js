import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import './SearchJobs.css';

function SearchJobs() {
  const dummyJobList = [
    {
      title: 'Senior UX Designer',
      salary: 124000,
      type: 'Full-Time',
      location: 'Toronto, ON',
      datePosted: new Date('2021-05-07'),
      saved: false,
      fill: ['#D3D3D3', '#3144F3', '#8FD7FF'],
    },
    {
      title: 'UX Designer',
      salary: 44000,
      type: 'Internship',
      location: 'London, ON',
      datePosted: new Date('2021-04-07'),
      saved: false,
      fill: ['#D3D3D3', '#23FFD7', '#2BC155'],
    },
    {
      title: 'Marketing Manager',
      salary: 64000,
      type: 'Full-Time',
      location: 'London, ON',
      datePosted: new Date('2021-04-27'),
      saved: false,
      fill: ['#D3D3D3', '#F35F31', '#2E2E2E'],
    },
    {
      title: 'Product Manager',
      salary: 54000,
      type: 'Full-Time',
      location: 'Hamilton, ON',
      datePosted: new Date('2021-01-07'),
      saved: false,
      fill: ['#D3D3D3', '#FFCF23', '#2E2E2E'],
    },
    {
      title: 'Senior Engineer',
      salary: 165000,
      type: 'Full-Time',
      location: 'Mississauga, ON',
      datePosted: new Date('2021-03-07'),
      saved: false,
      fill: ['#FBA556', '#3144F3', '#2E2E2E'],
    },
    {
      title: 'Web Developer',
      salary: 42000,
      type: 'Part-Time',
      location: 'Ottawa, ON',
      datePosted: new Date('2021-03-07'),
      saved: false,
      fill: ['#FBA556', '#FFCF23', '#EFF331'],
    },
    {
      title: 'Web Developer',
      salary: 65000,
      type: 'Contract',
      location: 'Toronto, ON',
      datePosted: new Date('2021-03-07'),
      saved: false,
      fill: ['#D3D3D3', '#3144F3', '#8FD7FF'],
    },
    {
      title: 'Backend Engineer',
      salary: 112000,
      type: 'Full-Time',
      location: 'Toronto, ON',
      datePosted: new Date('2021-05-17'),
      saved: false,
      fill: ['#D3D3D3', '#23FFD7', '#2BC155'],
    },
    {
      title: 'Quality Assurance Tester',
      salary: 42000,
      type: 'Part-Time',
      location: 'Ottawa, ON',
      datePosted: new Date('2021-05-10'),
      saved: false,
      fill: ['#D3D3D3', '#FFCF23', '#2E2E2E'],
    },
  ];
  const [jobList, setJobList] = useState(dummyJobList);

  const filterJobListByLocation = (location) => {
    const filteredJobList = jobList.filter((job) => job.location.includes(location));
    setJobList(filteredJobList);
  };

  const filterJobListBySalary = (salary) => {
    const filteredJobList = jobList.filter((job) => job.salary >= salary);
    setJobList(filteredJobList);
  };

  const filterJobListByType = (type) => {
    const filteredJobList = jobList.filter((job) => job.type.includes(type));
    setJobList(filteredJobList);
  };

  const filterJobList = (filterObj) => {
    const { location, salary, type } = filterObj;
    let filteredJobList = dummyJobList;

    if (location.active) {
      filteredJobList = filteredJobList.filter((job) => {
        return job.location.includes(location.filter);
      });
    }
    if (salary.active) {
      filteredJobList = filteredJobList.filter((job) => job.salary >= salary.filter);
    }

    if (type.active) {
      filteredJobList = filteredJobList.filter((job) => job.type.includes(type.filter));
    }

    setJobList(filteredJobList);
  };

  return (
    <Fragment>
      <div className='d-flex align-items-center flex-wrap search-job bg-white rounded py-3 px-md-3 px-0 mb-4'>
        <div className='col-lg-11 d-md-flex'>
          <input
            className='form-control input-rounded mr-auto mb-md-0 mb-3'
            type='text'
            placeholder='Search by Title, Company or any jobs keyword...'
          />
        </div>
        <Link to='/search-job' className='btn btn-primary rounded px-4'>
          FIND
        </Link>
      </div>

      <div className='d-flex flex-wrap mb-4 align-items-center search-filter'>
        <div className='mr-auto mb-2 pr-2'>
          <h6 className='text-black fs-16 font-w600 mb-1'>Showing 246 Jobs Results</h6>
          <span className='fs-14'>Based your preferences</span>
        </div>
        <SearchFilter onFilter={filterJobList} />
      </div>
      <div className='row'>
        <div className='col-xl-12'>
          {jobList.map((job) => {
            return (
              <div className='d-flex flex-wrap search-row bg-white py-3 mb-3 rounded justify-content-between align-items-center'>
                <div className='d-flex col-xl-4 col-xxl-3 col-lg-4 col-sm-6 align-items-center'>
                  <svg
                    className='mr-3'
                    width={80}
                    height={80}
                    viewBox='0 0 80 80'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z'
                      fill={job.fill[0]}
                    />
                    <path
                      d='M0 11.6364C0 5.20978 5.20978 0 11.6364 0H68.3636C74.7902 0 80 5.20978 80 11.6364V68.3636C80 74.7902 74.7902 80 68.3636 80H11.6364C5.20978 80 0 74.7902 0 68.3636V11.6364Z'
                      fill={job.fill[1]}
                    />
                    <path
                      d='M20.6216 20.6219C23.142 18.1015 26.1342 16.1022 29.4273 14.7381C32.7205 13.374 36.25 12.672 39.8145 12.672C43.3789 12.672 46.9085 13.374 50.2016 14.7381C53.4947 16.1022 56.4869 18.1015 59.0074 20.6219C61.5278 23.1424 63.5271 26.1346 64.8912 29.4277C66.2552 32.7208 66.9573 36.2504 66.9573 39.8148C66.9573 43.3793 66.2552 46.9088 64.8912 50.202C63.5271 53.4951 61.5278 56.4873 59.0074 59.0077L49.4109 49.4113C50.6711 48.1511 51.6708 46.6549 52.3528 45.0084C53.0348 43.3618 53.3859 41.5971 53.3859 39.8148C53.3859 38.0326 53.0348 36.2678 52.3528 34.6213C51.6708 32.9747 50.6711 31.4786 49.4109 30.2184C48.1507 28.9582 46.6546 27.9585 45.008 27.2765C43.3615 26.5944 41.5967 26.2434 39.8145 26.2434C38.0322 26.2434 36.2675 26.5944 34.6209 27.2765C32.9743 27.9585 31.4782 28.9582 30.218 30.2184L20.6216 20.6219Z'
                      fill='white'
                    />
                    <path
                      d='M59.0073 59.0077C53.917 64.098 47.0131 66.9576 39.8144 66.9576C32.6157 66.9576 25.7118 64.098 20.6215 59.0077C15.5312 53.9174 12.6715 47.0135 12.6715 39.8148C12.6715 32.6161 15.5312 25.7122 20.6215 20.6219L30.2179 30.2183C27.6728 32.7635 26.243 36.2154 26.243 39.8148C26.243 43.4142 27.6728 46.8661 30.2179 49.4112C32.7631 51.9564 36.215 53.3862 39.8144 53.3862C43.4138 53.3862 46.8657 51.9564 49.4108 49.4112L59.0073 59.0077Z'
                      fill={job.fill[2]}
                    />
                  </svg>
                  <div>
                    <h2 className='title'>
                      <Link to='/profile' className='text-black'>
                        {job.title}
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className='d-flex col-xl-2 col-lg-4 col-sm-6 align-items-center'>
                  <svg
                    className='mr-3 ml-lg-0 ml-sm-auto ml-0 mt-sm-0 mt-3'
                    width={54}
                    height={54}
                    viewBox='0 0 54 54'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect width={54} height={54} rx={15} fill='#2BC155' />
                    <g clipPath='url(#clip6)'>
                      <path
                        d='M27.0001 19.84C23.5987 19.84 20.6536 22.2024 19.9157 25.5229L17.4992 36.397C17.4815 36.4768 17.4725 36.5583 17.4725 36.64C17.4725 37.2585 17.974 37.76 18.5925 37.76H35.4077C35.4894 37.76 35.5709 37.751 35.6507 37.7333C36.2545 37.5991 36.6352 37.0008 36.501 36.397L34.0846 25.5229C33.3467 22.2024 30.4016 19.84 27.0001 19.84ZM27.0001 17.6C31.4515 17.6 35.3056 20.6916 36.2712 25.037L38.6877 35.9111C39.0902 37.7226 37.9481 39.5174 36.1366 39.92C35.8973 39.9731 35.6529 40 35.4077 40H18.5925C16.7369 40 15.2325 38.4956 15.2325 36.64C15.2325 36.3948 15.2594 36.1504 15.3126 35.9111L17.729 25.037C18.6947 20.6916 22.5488 17.6 27.0001 17.6Z'
                        fill='white'
                      />
                      <path
                        d='M29.2402 24.32C29.8588 24.32 30.3602 24.8214 30.3602 25.44C30.3602 26.0585 29.8588 26.56 29.2402 26.56H26.4402C26.1309 26.56 25.8802 26.8107 25.8802 27.12C25.8802 27.4292 26.1309 27.68 26.4402 27.68H27.5602C29.1066 27.68 30.3602 28.9336 30.3602 30.48C30.3602 32.0264 29.1066 33.28 27.5602 33.28H24.7602C24.1416 33.28 23.6402 32.7785 23.6402 32.16C23.6402 31.5414 24.1416 31.04 24.7602 31.04H27.5602C27.8695 31.04 28.1202 30.7892 28.1202 30.48C28.1202 30.1707 27.8695 29.92 27.5602 29.92H26.4402C24.8938 29.92 23.6402 28.6664 23.6402 27.12C23.6402 25.5736 24.8938 24.32 26.4402 24.32H29.2402Z'
                        fill='white'
                      />
                      <path
                        d='M25.8802 23.2C25.8802 22.5814 26.3817 22.08 27.0002 22.08C27.6188 22.08 28.1203 22.5814 28.1203 23.2V25.44C28.1203 26.0586 27.6188 26.56 27.0002 26.56C26.3817 26.56 25.8802 26.0586 25.8802 25.44V23.2Z'
                        fill='white'
                      />
                      <path
                        d='M28.1203 34.4C28.1203 35.0186 27.6188 35.52 27.0002 35.52C26.3817 35.52 25.8802 35.0186 25.8802 34.4V32.16C25.8802 31.5414 26.3817 31.04 27.0002 31.04C27.6188 31.04 28.1203 31.5414 28.1203 32.16V34.4Z'
                        fill='white'
                      />
                      <path
                        d='M25.8001 18.304C26.0298 18.8784 25.7504 19.5302 25.1761 19.7599C24.6018 19.9896 23.95 19.7103 23.7203 19.136L21.4803 13.536C21.1163 12.626 22.0141 11.7204 22.9272 12.0766C23.7659 12.4037 24.391 12.56 24.7602 12.56C24.8521 12.56 24.9283 12.5404 25.0946 12.4697C25.1387 12.4509 25.1906 12.428 25.3122 12.3742C25.8915 12.1203 26.3491 12 27.0002 12C27.6497 12 28.1146 12.1206 28.6957 12.3721C28.8432 12.4366 28.9021 12.4623 28.9542 12.4838C29.0978 12.5429 29.1669 12.56 29.2402 12.56C29.5878 12.56 30.2185 12.4023 31.0812 12.0735C31.9932 11.7258 32.8825 12.6298 32.5201 13.536L30.2801 19.136C30.0503 19.7103 29.3985 19.9896 28.8242 19.7599C28.2499 19.5302 27.9705 18.8784 28.2003 18.304L29.6096 14.7807C29.4808 14.7936 29.3578 14.8 29.2402 14.8C28.8314 14.8 28.4927 14.7162 28.1013 14.5551C28.0241 14.5232 27.9394 14.4863 27.8064 14.4279C27.4822 14.2877 27.2985 14.24 27.0002 14.24C26.7048 14.24 26.5313 14.2856 26.2114 14.4258C26.1015 14.4745 26.0319 14.5052 25.9706 14.5313C25.5512 14.7095 25.2002 14.8 24.7602 14.8C24.6419 14.8 24.5189 14.7939 24.3911 14.7816L25.8001 18.304Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip6'>
                        <rect
                          width={28}
                          height={28}
                          fill='white'
                          transform='translate(13 12)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <h4 className='sub-title text-black'>
                      {job.salary.toLocaleString()}
                    </h4>
                    <span>Annual Salary Est.</span>
                  </div>
                </div>
                <div className='d-flex col-xl-2 col-lg-4 col-sm-6 mt-lg-0 mt-3 align-items-center'>
                  <svg
                    className='mr-3'
                    width={54}
                    height={54}
                    viewBox='0 0 54 54'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect width={54} height={54} rx={15} fill='#FBA556' />
                    <path
                      d='M27 15C21.934 15 17.8125 19.1215 17.8125 24.1875C17.8125 25.8091 18.2409 27.4034 19.0515 28.7979C19.2404 29.123 19.4516 29.4398 19.6793 29.7396L26.6008 39H27.3991L34.3207 29.7397C34.5483 29.4398 34.7595 29.1231 34.9485 28.7979C35.7591 27.4034 36.1875 25.8091 36.1875 24.1875C36.1875 19.1215 32.066 15 27 15ZM27 27.2344C25.32 27.2344 23.9531 25.8675 23.9531 24.1875C23.9531 22.5075 25.32 21.1406 27 21.1406C28.68 21.1406 30.0469 22.5075 30.0469 24.1875C30.0469 25.8675 28.68 27.2344 27 27.2344Z'
                      fill='white'
                    />
                  </svg>
                  <div>
                    <h4 className='sub-title text-black'>{job.location}</h4>
                    <span>Location</span>
                  </div>
                </div>

                <div className='d-flex col-xl-2 col-lg-4 col-sm-6 mt-lg-0 mt-3 align-items-center '>
                  <div>
                    <h4 className='sub-title text-black'>{job.type}</h4>
                    <span>{job.datePosted.toDateString()}</span>
                  </div>
                </div>
                <div className='col-xl-2 col-xxl-3 text-xl-right text-lg-left text-sm-right col-lg-12 col-sm-6 mt-xl-0 mt-3 actions'>
                  <Link
                    to='/profile'
                    className='btn btn-sm btn-outline-primary rounded mr-2 p-2'>
                    Apply Now
                  </Link>
                  <label className='like-btn mb-2 mt-3 mt-sm-0'>
                    <svg
                      className='bookmark__disabled active'
                      xmlns='http://www.w3.org/2000/svg'
                      width='34'
                      height='34'
                      viewBox='0 0 24 24'
                      style={{ fill: '#36599D' }}>
                      <path d='M18,2H6C4.897,2,4,2.897,4,4v5.276V10v12l8-4.572L20,22V10V9.276V4C20,2.897,19.103,2,18,2z M18,18.553l-6-3.428l-6,3.428 V10V9.276V4h12v5.276V10V18.553z'></path>
                    </svg>

                    <svg
                      className='bookmark__enabled'
                      xmlns='http://www.w3.org/2000/svg'
                      width='34'
                      height='34'
                      viewBox='0 0 24 24'
                      style={{ fill: '#36599D' }}>
                      <path d='M19,10.132v-1v-5c0-1.103-0.897-2-2-2H7c-1.103,0-2,0.897-2,2v5v1V22l7-4.666L19,22V10.132z'></path>
                    </svg>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default SearchJobs;

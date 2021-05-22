import React, { Fragment, useEffect, useRef, useState, createRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import ApplicationContext from '../ctx/application-context';

import './Application.css';

function Application() {
  const applicationCtx = useContext(ApplicationContext);

  const [data, setData] = useState(document.querySelectorAll('#application tbody tr'));
  const sort = 7;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove('d-none');
      } else {
        data[i].classList.add('d-none');
      }
    }
  };

  // use effect
  useEffect(() => {
    setData(document.querySelectorAll('#application tbody tr'));
  }, [test]);

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };

  let checkboxRefList = [];

  const handleAllCheckbox = (event) => {
    checkboxRefList.forEach((ref) => {
      event.target.checked ? (ref.current.checked = true) : (ref.current.checked = false);
    });
  };

  const returnStatusButton = (application) => {
    if (application.status == 'Candidate') {
      return (
        <a className='btn rounded btn-info mr-3 ' href='#'>
          Candidate
        </a>
      );
    } else if (application.status == 'On-Hold') {
      return (
        <a className='btn rounded btn-warning mr-3 ' href='#'>
          On-Hold
        </a>
      );
    } else if (application.status == 'Pending') {
      return (
        <a className='btn rounded btn-secondary mr-3' href='#'>
          Pending
        </a>
      );
    } else if (application.status == 'Rejected') {
      return (
        <a className='btn rounded btn-danger mr-3' href='#'>
          Rejected
        </a>
      );
    } else {
      return (
        <a className='btn rounded btn-success mr-3 ' href='#'>
          Accepted
        </a>
      );
    }
  };

  return (
    <Fragment>
      <div className='row application'>
        <div className='col-xl-12'>
          <div className='table-responsive'>
            <div id='application' className='dataTables_wrapper no-footer'>
              <table
                className='table display mb-4 dataTablesCard table-responsive-xl card-table dataTable no-footer'
                id='example5'>
                <thead>
                  <tr role='row'>
                    <th className='application_sorting_asc'>
                      <div className='checkbox mr-0 align-self-center'>
                        <div className='custom-control custom-checkbox '>
                          <input
                            type='checkbox'
                            className='custom-control-input'
                            id='checkAll'
                            required
                            onClick={(event) => handleAllCheckbox(event)}
                          />
                          <label className='custom-control-label' htmlFor='checkAll' />
                        </div>
                      </div>
                    </th>
                    <th className='sorting'>ID</th>
                    <th className='sorting'>Date Applied</th>
                    <th className='sorting'>Company</th>
                    <th className='sorting'>Type</th>
                    <th className='sorting'>Contact</th>
                    <th className='sorting'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applicationCtx.map((application, idx) => {
                    const newCheckboxRef = createRef();
                    checkboxRefList.push(newCheckboxRef);

                    return (
                      <tr role='row' className='odd' key={application.id}>
                        <td className='application_sorting_1'>
                          <div className='checkbox mr-0 align-self-center'>
                            <div className='custom-control custom-checkbox '>
                              <input
                                type='checkbox'
                                className='custom-control-input'
                                id={`check${idx}`}
                                ref={newCheckboxRef}
                                required
                              />
                              <label className='custom-control-label' htmlFor={`check${idx}`} />
                            </div>
                          </div>
                        </td>
                        <td>{application.id}</td>
                        <td>{application.date}</td>
                        <td>
                          <div className='media align-items-center'>
                            <svg
                              className='mr-3'
                              width={50}
                              height={50}
                              viewBox='0 0 50 50'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                                fill='#D3D3D3'
                              />
                              <path
                                d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                                fill='#40C7CF'
                              />
                              <path
                                d='M12.8885 12.8887C14.4638 11.3134 16.3339 10.0638 18.3921 9.21129C20.4503 8.35875 22.6563 7.91996 24.884 7.91996C27.1118 7.91996 29.3178 8.35875 31.376 9.21129C33.4342 10.0638 35.3043 11.3134 36.8796 12.8887C38.4549 14.464 39.7045 16.3341 40.557 18.3923C41.4095 20.4505 41.8483 22.6565 41.8483 24.8842C41.8483 27.112 41.4095 29.318 40.557 31.3762C39.7045 33.4344 38.4549 35.3045 36.8796 36.8798L30.8818 30.882C31.6695 30.0944 32.2942 29.1593 32.7205 28.1302C33.1468 27.1011 33.3662 25.9981 33.3662 24.8842C33.3662 23.7704 33.1468 22.6674 32.7205 21.6383C32.2942 20.6092 31.6695 19.6741 30.8818 18.8865C30.0942 18.0988 29.1591 17.474 28.13 17.0478C27.1009 16.6215 25.9979 16.4021 24.884 16.4021C23.7701 16.4021 22.6672 16.6215 21.6381 17.0478C20.609 17.474 19.6739 18.0988 18.8863 18.8865L12.8885 12.8887Z'
                                fill='#8FD7FF'
                              />
                              <path
                                d='M12.8885 36.8798C9.70705 33.6984 7.91975 29.3835 7.91975 24.8843C7.91975 20.385 9.70705 16.0701 12.8885 12.8887C16.0699 9.70727 20.3848 7.91997 24.884 7.91996C29.3832 7.91996 33.6982 9.70726 36.8796 12.8887L30.8818 18.8865C29.2911 17.2958 27.1336 16.4021 24.884 16.4021C22.6344 16.4021 20.477 17.2958 18.8863 18.8865C17.2955 20.4772 16.4019 22.6346 16.4019 24.8843C16.4019 27.1339 17.2955 29.2913 18.8863 30.882L12.8885 36.8798Z'
                                fill='white'
                              />
                            </svg>
                            <div className='media-body text-nowrap'>
                              <h6 className='text-black font-w600 fs-16 mb-0'>{application.position}</h6>
                            </div>
                          </div>
                        </td>
                        <td>{application.type}</td>
                        <td>
                          <div className='d-flex  '>
                            <a className='contact-icon mr-3' href='mailto:test@test.com'>
                              <i className='fa fa-envelope' aria-hidden='true'></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex'>{returnStatusButton(application)}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className='d-sm-flex text-center justify-content-between align-items-center footer'>
                <div className='dataTables_info' id='example5_info'>
                  Showing {activePag.current * sort + 1} to{' '}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{' '}
                  of {data.length} entries
                </div>

                <div className='dataTables_paginate paging_simple_numbers' id='example5_paginate'>
                  <Link
                    to='/application'
                    className='paginate_button previous disabled'
                    onClick={() => activePag.current > 0 && onClick(activePag.current - 1)}>
                    Previous
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to='/application'
                        className={`paginate_button  ${activePag.current === i ? 'current' : ''} `}
                        onClick={() => onClick(i)}>
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    to='/application'
                    className='paginate_button next'
                    onClick={() =>
                      activePag.current + 1 < paggination.length && onClick(activePag.current + 1)
                    }>
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Application;

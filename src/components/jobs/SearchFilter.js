import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Dropdown } from 'react-bootstrap';

function SearchFilter(props) {
  /* Use State */
  const [locationFilterStatus, setLocationFilterStatus] = useState({
    name: '',
    active: false,
    filter: '',
  });

  const [salaryFilterStatus, setSalaryFilterStatus] = useState({
    name: '',
    active: false,
    filter: 0,
  });

  const [typeFilterStatus, setTypeFilterStatus] = useState({
    name: '',
    active: false,
    filter: '',
  });

  /* Use Effect */
  useEffect(() => {
    filterObjRef.current = { ...filterObjRef.current, location: locationFilterStatus };
    props.onFilter(filterObjRef.current);
  }, [locationFilterStatus]);

  useEffect(() => {
    filterObjRef.current = { ...filterObjRef.current, salary: salaryFilterStatus };
    props.onFilter(filterObjRef.current);
  }, [salaryFilterStatus]);

  useEffect(() => {
    filterObjRef.current = { ...filterObjRef.current, type: typeFilterStatus };
    props.onFilter(filterObjRef.current);
  }, [typeFilterStatus]);

  /* Use Ref */
  let filterObjRef = useRef({
    location: locationFilterStatus,
    salary: salaryFilterStatus,
    type: typeFilterStatus,
  });

  /* Filter Handlers */
  const onLocationFilterSelected = (locationName) => {
    if (locationName == '') {
      setLocationFilterStatus({
        name: '',
        active: false,
        filter: '',
      });
      return;
    }
    setLocationFilterStatus({
      name: locationName,
      active: true,
      filter: locationName,
    });
  };

  const onSalaryFilterSelected = (salary) => {
    if (salary == 0) {
      setSalaryFilterStatus({
        name: '',
        active: false,
        filter: 0,
      });
      return;
    }

    setSalaryFilterStatus({
      name: salary.toLocaleString(),
      active: true,
      filter: salary,
    });
  };

  const onTypeFilterSelected = (type) => {
    if (type == '') {
      setTypeFilterStatus({
        name: '',
        active: false,
        filter: '',
      });
    } else {
      setTypeFilterStatus({
        name: type,
        active: true,
        filter: type,
      });
    }
  };
  return (
    <Fragment>
      <Dropdown className='dropdown custom-dropdown mb-0 mr-3 mt-3 mt-sm-0 mb-2'>
        <Dropdown.Toggle
          className='btn border border-primary text-black rounded i-false'
          role='button'
          data-toggle='dropdown'
          aria-expanded='false'
          variant=''>
          <svg
            className='mr-2 scale5'
            width={14}
            height={14}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z'
              fill='#36599D'
            />
            <path
              d='M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z'
              fill='#36599D'
            />
            <path
              d='M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z'
              fill='#36599D'
            />
            <path
              d='M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z'
              fill='#36599D'
            />
          </svg>
          {locationFilterStatus.active ? locationFilterStatus.name : 'LOCATION'}
          <i className='las la-angle-down scale5 text-primary ml-3' />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
          <Dropdown.Item
            className='dropdown-item'
            onClick={onLocationFilterSelected.bind(this, 'Toronto')}>
            Toronto
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onLocationFilterSelected.bind(this, 'Hamilton')}>
            Hamilton
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onLocationFilterSelected.bind(this, 'London')}>
            London
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onLocationFilterSelected.bind(this, 'Mississauga')}>
            Mississauga
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onLocationFilterSelected.bind(this, 'Ottawa')}>
            Ottawa
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item text-danger '
            onClick={onLocationFilterSelected.bind(this, '')}>
            RESET
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='dropdown custom-dropdown mb-0 mr-3 mt-3 mt-sm-0 mb-2'>
        <Dropdown.Toggle
          className='btn border border-primary text-black rounded i-false'
          role='button'
          data-toggle='dropdown'
          aria-expanded='false'
          variant=''>
          <svg
            className='mr-2 scale5'
            width={14}
            height={14}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z'
              fill='#36599D'
            />
            <path
              d='M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z'
              fill='#36599D'
            />
            <path
              d='M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z'
              fill='#36599D'
            />
            <path
              d='M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z'
              fill='#36599D'
            />
          </svg>
          {salaryFilterStatus.active
            ? '$' + salaryFilterStatus.name + '+'
            : 'SALARY EST.'}
          <i className='las la-angle-down scale5 text-primary ml-3' />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
          <Dropdown.Item
            className='dropdown-item'
            onClick={onSalaryFilterSelected.bind(this, 50000)}>
            $50,000+
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onSalaryFilterSelected.bind(this, 70000)}>
            $70,000+
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onSalaryFilterSelected.bind(this, 90000)}>
            $90,000+
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onSalaryFilterSelected.bind(this, 120000)}>
            $120,000+
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onSalaryFilterSelected.bind(this, 150000)}>
            $150,000+
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item text-danger '
            onClick={onSalaryFilterSelected.bind(this, 0)}>
            RESET
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='dropdown custom-dropdown mb-0 mr-3 mt-3 mt-sm-0 mb-2'>
        <Dropdown.Toggle
          className='btn border border-primary text-black rounded i-false'
          role='button'
          data-toggle='dropdown'
          aria-expanded='false'
          variant=''>
          <svg
            className='mr-2 scale5'
            width={14}
            height={14}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z'
              fill='#36599D'
            />
            <path
              d='M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z'
              fill='#36599D'
            />
            <path
              d='M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z'
              fill='#36599D'
            />
            <path
              d='M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z'
              fill='#36599D'
            />
          </svg>
          {typeFilterStatus.active ? typeFilterStatus.name : 'JOB TYPE'}
          <i className='las la-angle-down scale5 text-primary ml-3' />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onTypeFilterSelected.bind(this, 'Part-Time')}>
            Part-Time
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onTypeFilterSelected.bind(this, 'Full-Time')}>
            Full-Time
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onTypeFilterSelected.bind(this, 'Contract')}>
            Contract
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item '
            onClick={onTypeFilterSelected.bind(this, 'Internship')}>
            Internship
          </Dropdown.Item>
          <Dropdown.Item
            className='dropdown-item text-danger '
            onClick={onTypeFilterSelected.bind(this, '')}>
            RESET
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='dropdown custom-dropdown mb-0 mr-3 mt-3 mt-sm-0 mb-2'>
        <Dropdown.Toggle
          className='btn border border-primary text-black rounded i-false'
          role='button'
          data-toggle='dropdown'
          aria-expanded='false'
          variant=''>
          <svg
            className='mr-2 scale5'
            width={14}
            height={14}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z'
              fill='#36599D'
            />
            <path
              d='M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z'
              fill='#36599D'
            />
            <path
              d='M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z'
              fill='#36599D'
            />
            <path
              d='M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z'
              fill='#36599D'
            />
          </svg>
          SORT
          <i className='las la-angle-down scale5 text-primary ml-3' />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
          <Dropdown.Item className='dropdown-item'>Newest</Dropdown.Item>
          <Dropdown.Item className='dropdown-item '>Salary</Dropdown.Item>
          <Dropdown.Item className='dropdown-item '>Title</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
}

export default SearchFilter;

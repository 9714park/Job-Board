import React, { Fragment, useRef, useState, useContext } from 'react';
import avatar1 from '../../images/default-profile.jpg';
import ProfileContext from '../ctx/profile-context';
import AlertModal from '../ui/AlertModal';

function Profile() {
  const porfileCtx = useContext(ProfileContext);

  const [firstName, setFirstName] = useState(porfileCtx.firstName);
  const [middleName, setMiddleName] = useState(porfileCtx.middleName);
  const [lastName, setLastName] = useState(porfileCtx.lastName);
  const [password, setPassword] = useState(porfileCtx.password);
  const [rePassword, setRePassword] = useState(porfileCtx.rePassword);
  const [phone, setPhone] = useState(porfileCtx.phone);
  const [email, setEmail] = useState(porfileCtx.email);
  const [address, setAddress] = useState(porfileCtx.address);
  const [city, setCity] = useState(porfileCtx.city);
  const [country, setCountry] = useState(porfileCtx.country);

  const formInputState = [
    firstName,
    middleName,
    lastName,
    password,
    rePassword,
    phone,
    email,
    address,
    city,
    country,
  ];

  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (message) => {
    setModalMessage(message);
    setShow(true);
  };

  const submitHandler = () => {
    let formValid = true;
    let passwordValid = true;

    formInputState.forEach((input) => {
      if (input === '') {
        formValid = false;
      }
    });

    if (password !== rePassword) {
      passwordValid = false;
    }

    if (formValid && passwordValid) {
      porfileCtx.firstName = firstName;
      porfileCtx.middleName = middleName;
      porfileCtx.lastName = lastName;
      porfileCtx.password = password;
      porfileCtx.rePassword = rePassword;
      porfileCtx.phone = phone;
      porfileCtx.email = email;
      porfileCtx.address = address;
      porfileCtx.city = city;
      porfileCtx.country = country;
      handleShow('Profile edited successfully');
    } else {
      handleShow('Please fill out every information');
    }
  };

  const firstNameInputHandler = (event) => {
    setFirstName(event.target.value);
  };

  const middleNameInputHandler = (event) => {
    setMiddleName(event.target.value);
  };

  const lastNameInputHandler = (event) => {
    setLastName(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const rePasswordInputHandler = (event) => {
    setRePassword(event.target.value);
  };

  const phoneInputHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };
  const addressInputHandler = (event) => {
    setAddress(event.target.value);
  };
  const cityInputHandler = (event) => {
    setCity(event.target.value);
  };
  const countryInputHandler = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <Fragment>
        <AlertModal show={show} onHide={handleClose} message={modalMessage} />
        <div className='row'>
          <div className='col-xl-3 col-xxl-4'>
            <div className='row'>
              <div className='col-xl-12 col-lg-6'>
                <div className='card  flex-lg-column flex-md-row '>
                  <div className='card-body card-body  text-center border-bottom profile-bx'>
                    <div className='profile-image mb-4'>
                      <img src={avatar1} className='rounded-circle' />
                    </div>
                    <h4 className='fs-22 text-black mb-1'>{porfileCtx.getFullName()}</h4>
                  </div>
                  <div className='card-body  border-left'>
                    <div className='d-flex mb-3 align-items-center justify-content-center'>
                      <a className='contact-icon mr-3' href='#'>
                        <i className='fa fa-phone' aria-hidden='true' />
                      </a>
                      <span className='text-black'>{porfileCtx.phone}</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                      <a className='contact-icon mr-3' href='#'>
                        <i className='las la-envelope' />
                      </a>
                      <span className='text-black'>{porfileCtx.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-12 col-lg-6'>
                <div className='card'>
                  <div className='card-header border-0 pb-0'>
                    <h4 className='fs-20 text-black'>Portofolios</h4>
                  </div>
                  <div className='card-body'>
                    <div className='d-flex mb-3 align-items-center bg-light rounded'>
                      <svg
                        className='mr-3 min-w50'
                        width={50}
                        height={50}
                        viewBox='0 0 49 49'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <rect width={49} height={49} rx={18} fill='#3D6AD6' />
                        <path
                          d='M22.7047 25.2398C22.6293 25.2398 21.0484 25.2403 20.3193 25.2396C19.9439 25.2394 19.81 25.1045 19.81 24.7267C19.8095 23.7564 19.8093 22.7861 19.81 21.8158C19.8103 21.4428 19.9519 21.3005 20.3224 21.3002C21.0515 21.2998 22.6238 21.3 22.7047 21.3C22.7047 21.2335 22.7044 19.8326 22.7047 19.1875C22.7051 18.2338 22.8753 17.3208 23.3599 16.4849C23.8559 15.6293 24.5779 15.0432 25.5031 14.7043C26.0956 14.4871 26.7107 14.4005 27.3395 14.4C28.1263 14.3995 28.913 14.4002 29.6999 14.4017C30.0381 14.4022 30.1881 14.5517 30.1888 14.8922C30.1903 15.805 30.1903 16.7177 30.1888 17.6302C30.1883 17.9743 30.0446 18.1126 29.6987 18.1164C29.0539 18.1234 28.4085 18.119 27.7643 18.145C27.1137 18.145 26.7715 18.4627 26.7715 19.1362C26.7559 19.8485 26.765 20.5615 26.765 21.2998C26.8259 21.2998 28.6775 21.2995 29.543 21.2998C29.9361 21.2998 30.0705 21.4349 30.0705 21.8302C30.0705 22.7952 30.0703 23.7605 30.0695 24.7255C30.0693 25.115 29.9431 25.2394 29.5475 25.2396C28.6821 25.2401 26.8377 25.2398 26.7571 25.2398V33.0506C26.7571 33.467 26.626 33.5998 26.2151 33.5998C25.2134 33.5998 24.2114 33.6 23.2096 33.5998C22.8465 33.5998 22.7049 33.4586 22.7049 33.0955C22.7047 30.5518 22.7047 25.3291 22.7047 25.2398Z'
                          fill='white'
                        />
                      </svg>
                      <span className='font-w500'>/johnDoe.facebook.com</span>
                    </div>
                    <div className='d-flex mb-3 align-items-center bg-light rounded'>
                      <svg
                        className='mr-3 min-w50'
                        width={50}
                        height={50}
                        viewBox='0 0 50 50'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <rect width={50} height={50} rx={18} fill='#0073B1' />
                        <path
                          d='M34.5948 33.6V33.5993H34.5996V26.5577C34.5996 23.113 33.858 20.4593 29.8308 20.4593C27.8948 20.4593 26.5956 21.5218 26.0652 22.5288H26.0093V20.7809H22.1909V33.5993H26.167V27.252C26.167 25.5809 26.4838 23.9647 28.5533 23.9647C30.5926 23.9647 30.6228 25.872 30.6228 27.359V33.6H34.5948Z'
                          fill='white'
                        />
                        <path d='M15.7168 20.7816H19.6977V33.6H15.7168V20.7816Z' fill='white' />
                        <path
                          d='M17.7056 14.4C16.4326 14.4 15.3999 15.4327 15.3999 16.7057C15.3999 17.9786 16.4326 19.0329 17.7056 19.0329C18.9785 19.0329 20.0113 17.9786 20.0113 16.7057C20.0103 15.4327 18.9776 14.4 17.7056 14.4Z'
                          fill='white'
                        />
                      </svg>
                      <span className='font-w500'>/johnDoe.linkedIn.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-9 col-xxl-8'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='card profile-card'>
                  <div className='card-header flex-wrap border-0 pb-0'>
                    <div className='d-sm-flex d-block justify-content-end'>
                      <h3 className='fs-24 text-black font-w600 mr-auto mb-4 mt-3 pr-3'>My Profile</h3>
                      <a
                        className='btn btn-primary rounded mb-4 mr-3 mt-3  '
                        href='#'
                        onClick={submitHandler}>
                        Save Changes
                      </a>
                    </div>
                  </div>
                  <div className='card-body'>
                    <form>
                      <div className='mb-sm-5 mb-2'>
                        <div className='title mb-4'>
                          <span className='fs-18 text-black font-w600'>GENERAL</span>
                        </div>
                        <div className='row'>
                          <div className='col-xl-4 col-sm-6'>
                            <div className='form-group'>
                              <label>First Name</label>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Enter first name'
                                onChange={firstNameInputHandler}
                                value={firstName}
                              />
                            </div>
                          </div>
                          <div className='col-xl-4 col-sm-6'>
                            <div className='form-group'>
                              <label>Middle Name</label>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Enter middle name'
                                onChange={middleNameInputHandler}
                                value={middleName}
                              />
                            </div>
                          </div>
                          <div className='col-xl-4 col-sm-6'>
                            <div className='form-group'>
                              <label>Last Name</label>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Enter last name'
                                onChange={lastNameInputHandler}
                                value={lastName}
                              />
                            </div>
                          </div>
                          <div className='col-xl-6 col-sm-6'>
                            <div className='form-group'>
                              <label>Password</label>
                              <input
                                type='password'
                                className='form-control'
                                placeholder='Enter password'
                                onChange={passwordInputHandler}
                                value={password}
                              />
                            </div>
                          </div>
                          <div className='col-xl-6 col-sm-6'>
                            <div className='form-group'>
                              <label>Re-Type Password</label>
                              <input
                                type='password'
                                className='form-control'
                                placeholder='Enter password'
                                onChange={rePasswordInputHandler}
                                value={rePassword}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mb-sm-5 mb-2'>
                        <div className='title mb-4'>
                          <span className='fs-18 text-black font-w600'>CONTACT</span>
                        </div>
                        <div className='row'>
                          <div className='col-xl-6 col-sm-6'>
                            <div className='form-group'>
                              <label>Phone</label>
                              <div className='input-group input-icon mb-3'>
                                <div className='input-group-prepend'>
                                  <span className='input-group-text' id='basic-addon1'>
                                    <i className='fa fa-phone' aria-hidden='true' />
                                  </span>
                                </div>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Phone no.'
                                  onChange={phoneInputHandler}
                                  value={phone}
                                />
                              </div>
                            </div>
                          </div>

                          <div className='col-xl-6 col-sm-6'>
                            <div className='form-group'>
                              <label>Email</label>
                              <div className='input-group input-icon mb-3'>
                                <div className='input-group-prepend'>
                                  <span className='input-group-text' id='basic-addon3'>
                                    <i className='fa fa-envelope' />
                                  </span>
                                </div>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Enter email'
                                  onChange={emailInputHandler}
                                  value={email}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-4 col-sm-6'>
                            <div className='form-group'>
                              <label>Address</label>
                              <div className='input-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Enter address'
                                  onChange={addressInputHandler}
                                  value={address}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-4 col-sm-6'>
                            <div className='form-group'>
                              <label>City</label>
                              <div className='input-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Enter city'
                                  onChange={cityInputHandler}
                                  value={city}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-4 col-sm-6'>
                            <div className='form-group'>
                              <label>Country</label>
                              <div className='input-group'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Enter country'
                                  onChange={countryInputHandler}
                                  value={country}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='mb-sm-5 mb-2'>
                        <div className='row'>
                          <div className='col-xl-12'>
                            <div className='form-group'>
                              <label>About Me</label>
                              <textarea
                                className='form-control'
                                rows={6}
                                defaultValue={
                                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta su\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Profile;

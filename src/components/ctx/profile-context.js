import React from 'react';

const ProfileContext = React.createContext({
  firstName: 'John',
  middleName: 'Bob',
  lastName: 'Doe',
  password: '1234',
  rePassword: '1234',
  phone: '+1 999 2222',
  email: 'test@test.com',
  address: '123 Main St',
  city: 'Toronto',
  country: 'Canada',
});

export default ProfileContext;

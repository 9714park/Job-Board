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
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta su\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
});

export default ProfileContext;

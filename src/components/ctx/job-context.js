import { createContext } from 'react';

const JobContext = createContext({
  jobTitle: '',
  jobSalary: '',
  jobPosition: '',
  jobLocation: '',
});

export default JobContext;

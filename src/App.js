import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SearchJobs from './components/jobs/SearchJobs';
import Application from './components/application/Application';
import Profile from './components/profile/Profile';
import ProfileContext from './components/ctx/profile-context';

function App() {
  return (
    <ProfileContext.Provider
      value={{
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
        getFullName: function () {
          return `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
      }}>
      <Router>
        <div className='App'>
          <Nav />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Dashboard />
              </Route>
              <Route exact path='/jobs'>
                <SearchJobs />
              </Route>
              <Route exact path='/application'>
                <Application />
              </Route>
              <Route exact path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ProfileContext.Provider>
  );
}

export default App;

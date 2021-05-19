import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import JobContext from './components/ctx/job-context';
import SearchJobs from './components/jobs/SearchJobs';

function App() {
  let path = window.location.pathname;
  path = path.split('/');
  path = path[path.length - 1];

  const routes = [{ url: '/', component: Dashboard }];

  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <div className='content'>
            <JobContext.Provider>
              <Route exact path='/'>
                <Dashboard />
              </Route>
              <Route exact path='/jobs'>
                <SearchJobs />
              </Route>
            </JobContext.Provider>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

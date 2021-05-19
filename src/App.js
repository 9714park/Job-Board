import './App.css';
import Nav from './components/nav/Nav';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

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
            <Route exact path='/' component={Dashboard} />
            <Route path='/shop' component={Shop} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

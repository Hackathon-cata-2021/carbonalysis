import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormPages from '../form-pages/FormPages';
import Emissions from '../form-pages/Emissions';
import Homepage from '../homepage/homepage';
import Login from '../login/login';
import Register from '../register/register'
import Dashboard from '../dashboard/dashboard'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/carbon-footprint" component={FormPages} />
            <Route exact path="/carbon-emissions" component={Emissions} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

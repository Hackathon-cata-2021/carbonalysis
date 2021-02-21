import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormPages from '../form-pages/FormPages';
import Emissions from '../form-pages/Emissions';
import Homepage from '../homepage/Homepage';
import Login from '../userEntryForms/Login';
import Register from '../userEntryForms/Register';
import Dashboard from '../dashboard/Dashboard';
import Navbar from '../navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <div className="App-container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/carbon-footprint" component={FormPages} />
            <Route exact path="/carbon-emissions" component={Emissions} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;

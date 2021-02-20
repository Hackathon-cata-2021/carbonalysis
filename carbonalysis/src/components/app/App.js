import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormPages from '../form-pages/FormPages';
import Emissions from '../form-pages/Emissions';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
            <Route
              exact
              path="/carbon-footprint"
              component={FormPages}
            />
            <Route
              exact
              path="/carbon-emissions"
              component={Emissions}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

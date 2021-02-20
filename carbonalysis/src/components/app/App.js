import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormPages from '../form-pages/FormPages';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Router>
          <Switch>
            <FormPages />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Wash from './pages/Wash';



function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
            <Wash />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;

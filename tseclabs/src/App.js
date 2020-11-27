import logo from './tseclabs.png';
import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/labs">
            <h1> This will go to labs</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

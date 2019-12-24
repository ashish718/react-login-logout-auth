import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from "./component/Welcome"
import Dashboard from "./component/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

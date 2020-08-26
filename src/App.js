import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Home from "./components/Home"
import About from "./components/About"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/about" component ={About}/>
        </Switch>
        
      </div>
    </Router>
   
    
  );
}

export default App;

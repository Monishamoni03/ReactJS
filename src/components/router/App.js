import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import App from './App'; 
import Home from './components/Home'; 
import About from './components/About';  
import Contact from './components/Contact';  
  
  const routing = (  
  <Router>  
    <div className = 'App'>  
      <h1>React Router!</h1>  
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to = "/about">About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to = "/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path = "/" component = {Home} />  
      <Route path = "/about" component = {About} />  
      <Route path = "/contact" component = {Contact} />  
    </div>  
  </Router>  
);
ReactDOM.render(routing, document.getElementById('root'));   

export default App;
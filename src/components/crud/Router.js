import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const routing = (
    <Router>   
        <div>   
            <ul>
                <li><Link to = "/">HOME</Link></li>
            </ul>
            <ul>
                <li><Link to = "/about">ABOUT</Link></li>
            </ul>
            <ul>
                <li><Link to = "/contact">CONTACT</Link></li>
            </ul>
            <h1>CRUD operation</h1>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/" component = {About} />
            <Route exact path = "/" component = {Contact} />
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
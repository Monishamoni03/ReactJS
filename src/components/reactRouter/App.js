import './App.css';
import Home from './components/Home'; 
import About from './components/About';  
import Product from './components/Product'; 
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <Router>
    <h1>ROUTER</h1>
    <nav>
       <Link to = "/">Home</Link>
       <Link to = "/about">About</Link>
       <Link to = "/product">Product</Link>
    </nav>
    <Routes>
      <Route path = "/:name" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/product" element = {<Product />} />
      <Route path = "*" element = {<ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App;

// import React from 'react';
// //import ReactDOM from 'react-dom';
// import { Route, Routes, NavLink, BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home'; 
// import About from './components/About';  
// import Product from './components/Product';  

// function App() {  
//   return (
//   <Router>  
//     <nav>
//       <NavLink to = "/">Home</NavLink>
//       <NavLink to = "/about">About</NavLink>
//       <NavLink to = "/product">Product</NavLink>
//     </nav>
//     <Routes>
//       <Route exact path = "/" component = {<Home />} />  
//       <Route path = "/About" component = {<About />} />  
//       <Route path = "/Product" component = {<Product />} />  
//     </Routes> 
//   </Router>  
//   );
// }
// // ReactDOM.render(routing, document.getElementById('root'));   

// export default App;

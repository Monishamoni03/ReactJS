import React, { Component } from 'react'; 
import './App.css';
import Hoc from './Hoc';  
  
class higherOrderComponent extends Component {  
  render() {  
    return (  
      <div>  
         Higher Order Component
      </div>  
    )  
  }  
}  
//App = Hoc(App);  
export default higherOrderComponent;
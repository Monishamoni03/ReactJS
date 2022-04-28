import React from 'react'  
import ReactDOM from 'react-dom'  
  
function Portals() {  
    return ReactDOM.createPortal(  
      //child
    <div className='App'>   
      <h1>Portals</h1> 
      </div>,   
      document.getElementById('new-root-portal')  //container->DOM element
    )  
}  

export default Portals;  
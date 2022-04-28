//without jsx
/*
import React from 'react';
import ReactDOM from 'react-dom';
function App(){
  const ele=React.createElement('h1',{},"Helloo world");
  return(
    ReactDOM.render(ele,document.getElementById('root'))
  );
}

export default App;*/

//with jsx

import React from 'react';
import ReactDOM from 'react-dom';
var styling={                 //style purpose
  textAlign:'center'
}
function jsx(){
  const ele=<div style={styling}>
    <h1>Welcome</h1>
    <p>Thank you</p>
  </div>
  return(
    ReactDOM.render(ele,document.getElementById('root'))
  );
}

export default jsx;
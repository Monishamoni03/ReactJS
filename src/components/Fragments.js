import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Fragments extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>FRAGMENTS</h1>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<fragments />,document.getElementById('root'));

export default Fragments;
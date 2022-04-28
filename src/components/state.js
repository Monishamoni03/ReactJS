import React from 'react';
import ReactDOM from 'react-dom';
class state extends React.Component{
  constructor(){
    super();
    this.state={message:"REACT STATE"}
  }
  render(){
    return <h1>{this.state.message}</h1>
  }
}
ReactDOM.render(<state />,document.getElementById('root'));
export default state;
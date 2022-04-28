import React from 'react';
import ReactDOM from 'react-dom';
class props extends React.Component{
  render(){
    return <h1 style={{color:"green",textAlign:"center"}}>Welcome to the{this.props.name}</h1>
  }
}

export default props;
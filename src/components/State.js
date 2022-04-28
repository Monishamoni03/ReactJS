import React from 'react';
import ReactDOM from 'react-dom';

class State extends React.Component {
  constructor() {
    super();
    this.state = {message:"REACT STATE"}
  }

  render() { 
    return <h1>{this.state.message}</h1>
  }
}

ReactDOM.render(<state />,document.getElementById('root'));

export default State;
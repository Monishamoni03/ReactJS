import React from 'react';
import ReactDOM from 'react-dom';
class HandlingEvents extends React.Component{
  constructor(){
    super()
    this.state={
      info:"Welcome"
    }
  }
  clickEvent=()=>{
    this.setState({
      info:"Thank you"
    })
  }
  render()
  {
    return(
      <div>
       <h1>{this.state.info}</h1>
       <button onClick={this.clickEvent}>Click here</button>
       
      </div>
    )
    } 
}
ReactDOM.render(<handlingEvents />,document.getElementById('root'));
export default HandlingEvents;
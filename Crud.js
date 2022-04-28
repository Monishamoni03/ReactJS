import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title :'CRUD form',
      input : []  //empty data array
    }
  }

  submit = function(e) {
    e.preventDefault();
    var input = this.state.input;
    var name = this.refs.name.value;
    var age = this.refs.age.value;

    var addInput = {
      "name" : name,
      "age" : age
    }
    input.push(addInput);

    this.setState({
      input : input
    })

    this.ref.newForm.reset();
  }

  render() {
    var input = this.state.input;
    return (
      <div className='App'>
      <h1>{this.state.title}</h1>
      <form ref = "newForm" className = 'App'>
        <label>Username</label>
        <input type = 'text' ref = 'name' placeholder = 'Enter your name' />
        <label>Age</label>
        <input type = 'number' ref = 'age' placeholder = 'Enter your age' />
        <button onClick = {e => this.submit(e)}>Submit</button>
      </form>
      <table>
        <tr>
          <th>Username</th>
          <th>Age</th>
        </tr>
        {
        input.map( (data,i) =>
        <tr key={1}>
          <td>{data.name}</td>
          <td>{data.age}</td>
          </tr>)
        }
      </table>
      </div>
    )
  }
}

export default Crud;

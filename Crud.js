import React from 'react';

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title :'CRUD Form',
      input : [],  //empty data array
      act : 0,  //initial value ; wrapping up the code
      index : ''
    }
  }

  submit = function(e) {
    e.preventDefault();
    var input = this.state.input;
    var name = this.refs.Name.value;
    var age = this.refs.Age.value;

    if(this.state.act === 0){   //new record
      var addInput = {
        "name" : name,
        "age" : age
      }
      input.push(addInput)
    }else {
      var index = this.state.index;
      input[index].name = name;
      input[index].age = age;
    }

    //updating the state with new item
    this.setState({
      input : input,
      act : 0
    })

    this.refs.newForm.reset();   //data will be reset while entering input
  }

  handleEdit = (i) => {
    var input = this.state.input[i];   //gives particular record to edit
    this.refs.Name.value = input.name;
    this.refs.Age.value = input.age;

    this.setState({
      input : input,     //new updated data
      act :1,
      index : i
    })
  }

  handleRemove = (i) => {
    var input = this.state.input;
    input.splice(i,1);   //particular index will be deleted
    this.setState({      
      input : input     //new updated data
    })
  }

  render() {

    var input = this.state.input;
    return (
      <div className = 'App'>
      <h1>{this.state.title}</h1>
      
      <form ref = "newForm" className = 'App'>
        <label>Username</label>
        <input type = 'text' ref = 'Name' placeholder = 'Enter your name' className='fields'/>
        <label>Age</label>
        <input type = 'number' ref = 'Age' placeholder = 'Enter your age' className='fields' />
        <button onClick = {e => this.submit(e)} className = "button">Submit</button>
      </form>

      <table className='table'>
        <tr>
          <th>Username</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        {
        input.map( (data,i) =>
        <tr key = {1}>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td><button onClick={() => this.handleEdit(i)} className = "button">Edit</button></td>
          <td><button onClick={() => this.handleRemove(i)} className = "button">Remove</button></td>
          </tr>)
        }
      </table>
      </div>
    )
  }
}

export default Crud;


//App.css

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

.App {
  margin: 0 auto;
  width : 50%;
  background-color: lightgrey;
  border-radius: 5px;
  padding: 20px;
}

.fields {
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  display: block;
  border: 1px solid rgb(109, 99, 119);
}

.button {
  width: 100%;
  background-color: azure;
  color: #282c34;
  padding: 15px 20px;
  margin: 1px 0;
  border: none;
  cursor: pointer;
}

.table {
  background-color: lightslategray;
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


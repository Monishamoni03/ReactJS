import React, {Component} from "react";
import Crud from "./components/Crud";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Crud />
      </div>
    )
  }
}

export default App;
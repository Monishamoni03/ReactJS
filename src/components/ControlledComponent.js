import React from "react";

class ControlledComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name : "",
            age : ""
        }
    }
    submit() {
        console.log(this.state)
    }
    render() {
        return (
            <div className = "App">
                <h1>Controlled Component</h1>
                <input type = "text" placeholder = "Enter your name"
                  onChange={(e) => {this.setState({ name : e.target.value}) }} /> <br /><br />
                <input type = "number" placeholder = "Enter your age"
                  onChange={(e) => {this.setState({ age : e.target.value}) }} /> <br /><br />
                <button onClick={() => {this.submit()}}>Submit</button>
            </div>
        );
    }
}

export default ControlledComponent;
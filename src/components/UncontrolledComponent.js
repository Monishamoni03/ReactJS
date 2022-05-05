import React from "react";

class UncontrolledComponent extends React.Component {    //using ref
    constructor() {
        super()
        this.name = React.createRef();
        this.age = React.createRef();
    }
    submit(e) {
        e.preventDefault()   //it will not reload
        console.log(this.name.current.value,this.age.current.value)
        
    }
    render() {
        return (
            <div className = "App">
                <h1>Uncontrolled Component</h1>
                <form onSubmit = {(e) => {this.submit(e)}}>
                    <input type = "text" placeholder = "Enter your name" ref = {this.name} /> <br /><br />
                    <input type = "number" placeholder = "Enter your age" ref = {this.age} /> <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledComponent;
import React, {Component} from 'react';  
      
class HigherOrderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {                 //defining the handler
        this.setState(backState => {           //setState->previous state
            return {count: backState.count + 1}
        })
    }

    render() {
        const {count} = this.state;
        return <button onClick={this.increaseCount}>Click the button: {count} </button>
    }
}

export default HigherOrderComponent;
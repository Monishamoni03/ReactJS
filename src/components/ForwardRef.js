import React, { Component } from 'react';
import Counter from './Counter.js';
import './App.css';

class ForwardRef extends Component {
  constructor(props) {
    super(props)
    this.forwardRef = React.createRef()
  }
  render() {
    return (
     <>
       <Counter ref = {this.forwardRef} />
       <button onClick={() => { console.log(this.forwardRef) }}>
         Ref
        </button>
     </>
    )
  }
}

export default ForwardRef;

//context,consumer files
import React from "react";

const ContextName = React.createContext('message');

const ProviderValue = ContextName.Provider;
const ConsumerValue = ContextName.Consumer;

export {ProviderValue,ConsumerValue};

//App.js

import React, { Component } from 'react';
import ContextName from './ContextName';
import { ProviderValue } from './Context.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ProviderValue value="Hello team">     {/* providing value*/}
         <ContextName />  
        </ProviderValue>                     
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import ControlledComponent from './components/ControlledComponent.js';
//import HelloWorld from './components/HelloWorld.js';
//import Portals from './components/Portals.js';
//import HigherOrderComponent from './components/HigherOrderComponent';
//import UncontrolledComponent from './components/UncontrolledComponent.js';


class App extends Component {
    render() {
        return(
            <div className='App'>
                 {/* <HelloWorld /> */}
                 {/* <Portals /> */}
                 {/* <HigherOrderComponent /> */}
                 {/* <UncontrolledComponent /> */}
                 <ControlledComponent />
            </div>
        );
    }
}

export default App;

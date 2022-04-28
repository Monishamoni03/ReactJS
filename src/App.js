import React, { Component } from 'react';
//import HelloWorld from './components/HelloWorld.js';
import Portals from './components/Portals.js';
import HigherOrderComponent from './components/HigherOrderComponent';


class App extends Component {
    render() {
        return(
            <div className='App'>
                 {/* <HelloWorld /> */}
                 {/* <Portals /> */}
                 <HigherOrderComponent />
            </div>
        );
    }
}

export default App;
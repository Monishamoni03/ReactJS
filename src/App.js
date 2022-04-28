import React, { Component } from 'react';
//import HelloWorld from './components/HelloWorld.js';
import Portals from './components/Portals.js';

class App extends Component {
    render() {
        return(
            <div className='App'>
                 {/* <HelloWorld /> */}
                 <Portals />
            </div>
        );
    }
}

export default App;
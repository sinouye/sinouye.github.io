import React, {Component} from 'react';
import './app.css'

import Navigation from './nav/navigation'
import Routes from './nav/routes'

class App extends Component {
  render() {
    return(
      <div className="app">
        <Navigation />
        <Routes />
      </div>  
    );
  }
}

export default App;
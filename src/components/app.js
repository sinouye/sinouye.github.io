import React, {Component} from 'react';
import './app.css'

import ScrollToTop from './nav/scroll_to_top'
import Navigation from './nav/navigation'
import Routes from './nav/routes'

class App extends Component {
  render() {
    return(
      <div className="app">
        <ScrollToTop/>
        <Navigation />
        <Routes />
      </div>  
    );
  }
}

export default App;
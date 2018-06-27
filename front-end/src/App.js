import React, { Component } from 'react';
import HomePage from './Pages/HomePage';
import NavBar from './Pages/NavBar';
import Configure from './Pages/Configure';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' render={() => <HomePage />} />
          <Route path='/configure' render={() => <Configure /> }/>
        </div>
      </Router>
    );
  }
}

export default App;

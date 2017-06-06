import React, { Component } from 'react';
import './App.css';
import Clients from './clients/clients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clients />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
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

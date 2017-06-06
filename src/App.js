import React, { Component } from 'react';
import './App.css';
import Clients from './clients/clients';
import config from './config'
import firebase from 'firebase';
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clients />
        {config.apiKey}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shirtdesigner from './client/components/views/shirtDesigner/shirtdesigner';

class App extends Component {
  render() {
    return (
      <div className="App">
        T-Shirt Designer
        <Shirtdesigner />
      </div>
    );
  }
}

export default App;

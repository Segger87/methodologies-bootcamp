import React, { Component } from 'react';
import './styles/App.css';
import Shirtdesigner from './components/views/shirtDesigner/shirtdesigner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shirtdesigner />
      </div>
    );
  }
}

export default App;

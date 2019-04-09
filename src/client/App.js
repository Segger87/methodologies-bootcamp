import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/shared/Header";
import HomePage from './components/shared/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;

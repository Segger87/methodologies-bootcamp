import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/shared/Header";
import HomePage from './components/shared/HomePage';
import Footer from "./components/shared/Footer";
import PromotionMessage from "./components/shared/PromotionMessage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PromotionMessage />
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;

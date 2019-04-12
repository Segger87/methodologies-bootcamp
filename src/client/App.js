import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/shared/Header";
import HomePage from './components/shared/HomePage';
import Footer from "./components/shared/Footer";
import PromotionMessage from "./components/shared/PromotionMessage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shirtdesigner from './components/views/shirtDesigner/shirtdesigner';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PromotionMessage />
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/design' exact component={Shirtdesigner} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

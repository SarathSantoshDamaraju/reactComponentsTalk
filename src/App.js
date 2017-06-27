import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={this.props.url} alt="loaded image"/>
      </div>
    );
  }
}

export default App;

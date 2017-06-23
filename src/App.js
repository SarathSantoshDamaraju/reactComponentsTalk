import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      show : false
    }
  }
  render() {
    return (
      <div className="App">
      <img src={this.props.url} />
      </div>
    );
  }
}

export default App;

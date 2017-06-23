import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data : ''
    }
  }
  getValue(params){
    this.setState({
      data: params
    });
    }
  render() {
    return (
      <div className="App">
      {this.state.data !== '' ? <p>{this.state.data}</p> : null}
      </div>
    );
  }
}

export default App;

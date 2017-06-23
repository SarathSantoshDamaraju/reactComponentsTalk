import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      name : "",
      send: false
    }
  this.sendName = this.sendName.bind(this);
  this.getName = this.getName.bind(this);
}

   getName(event) {
    this.setState({
      name : event.target.value
    });
   }

    sendName(event) {
      event.preventDefault();
    this.setState({
      send : true
    });
   }

   render(){
     return(
       <form onSubmit={this.sendName}>
       <input onChange={this.getName} placeholder="what is your name ?"/>
       <input type="submit"/>
       {this.state.send ? <App url={this.state.name}/> : null }
      </form>
     );
   }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

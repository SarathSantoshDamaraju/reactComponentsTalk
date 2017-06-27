import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      url : "",
      send: false
    }
  this.sendUrl = this.sendUrl.bind(this);
  this.getUrl = this.getUrl.bind(this);
}

   getUrl(event) {
    this.setState({
      url : event.target.value
    });
   }

    sendUrl(event) {
      event.preventDefault();
    this.setState({
      send : true
    });
   }

   render(){
     return(
       <form onSubmit={this.sendUrl}>
       <input onChange={this.getUrl} placeholder="Enter any Image URL"/>
       <input type="submit"/>
       {this.state.send ? <App url={this.state.url}/> : null }
      </form>
     );
   }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
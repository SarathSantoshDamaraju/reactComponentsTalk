import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Index extends React.Component {
constructor() {
  super();
  this.state = {
    content : ''
  }
}

getData(event){
   this.setState({
            content: event.target.value
        });
}


render() {
  return(
    <div onChange={this.getData.bind(this)}>
    <App />
    <p>Parent Component</p>
    <p>{this.state.content}</p>
    </div>
  );
} 
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

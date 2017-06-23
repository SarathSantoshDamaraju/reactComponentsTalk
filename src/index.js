import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      url : ''
    }
  }

showData(params){
this.setState({url : params});
}

 render(){
   return (
     <div>
     <App callBack={this.showData.bind(this)} />
     {this.state.url !== '' ? <img src={this.state.url} /> : <p>No Image Loaded</p>}
     </div>
   );
 }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

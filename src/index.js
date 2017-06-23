import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Index extends React.Component {

   render(){
     return(
      <App ref={(foo) => { this.foo = foo; } } />
     );
   }

    componentDidMount() {
    var x = this.foo.getValue("bello");
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

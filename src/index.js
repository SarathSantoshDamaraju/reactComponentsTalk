import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';
import Child2 from './Child2';
import './index.css';

class Index extends React.Component {
constructor(){
  super();
  this.state= {
    data : ""
  }
}

formChild1(params) {
  this.setState({
    data : params
  })
}

render() {
  return(
    <div>
      <p>Parent</p>
    <Child callback={this.formChild1.bind(this)} />
    <Child2 data={this.state.data} />
    </div>
  );
}
 
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

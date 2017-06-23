import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            data :  ''
        }
        this.getData = this.getData.bind(this);
        this.returnData = this.returnData.bind(this);
    }

getData(event) {
    this.setState({
        data: event.target.value
    })
}

returnData(event) {
    event.preventDefault();
    this.props.callBack(this.state.data);
}

render() {
    return(
        <form onSubmit={this.returnData}>
        <input type="text" onChange={this.getData} placeholder="Enter Image URL" />
        <input type="Submit" value="Show Image"/>
        </form>
    );
}

}


App.protoTypes = {
callBack : PropTypes.func,
}
export default App;

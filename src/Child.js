import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Child1 extends Component {

getContent(event) {
this.props.callback(event.target.value);
}

    render() {
        return (
            <div>
                <p>Child One</p>
            <input type="text" onChange={this.getContent.bind(this)} placeholder="Type Something in Child One"/>
            </div>
        );
    }
}


Child1.protoTypes = {
callback : PropTypes.func,
}
export default Child1;

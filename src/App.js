import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state ={ 
            content: false
        }
    }

    getData(event){
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return(
            <div>
                <p>Child Component</p>
            <input type="text" placeholder="some txt" onChange={this.getData.bind(this)}/>
            </div>
        );
    }
}

export default App;

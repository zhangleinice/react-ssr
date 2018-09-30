import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        alert('click event triggered!')
    }
    render() {
        return (
            <div>
                <h2>welcome to react in the server</h2>
                <div>isn't this cool? yes, it's</div>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        );
    }
}

export default App;
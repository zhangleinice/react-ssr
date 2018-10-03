import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
    }
    handleClick() {
      alert('click event triggered!')
    }
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React in the Server</h2>
          </div>
          <p className="App-intro">Isn't this cool? Yes, it's</p>
          <button onClick={e => this.handleClick()}> 请点击按钮 </button>  
        </div>
      );
    }
  }

export default App;
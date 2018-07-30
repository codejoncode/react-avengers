import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {name: "Jonathan Holloway", avengers: ['Iron-man', 'Black Widow', 'Hawkeye', 'Hulk', 'Thorn']}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: {this.state.name} </h1>
        </header>
        {this.state.avengers.map(avenger => <div key={avenger}> {avenger}</div>)}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  goo = () => 'Dar';

  render() {
    const name = 'John';
    const foo = () => 'Bar';

    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()}</h1>
        <p>{2 + 2}</p>
        <p>{foo()}</p>
        <p>{this.goo()}</p>
      </div>
    );
  }
}

export default App;

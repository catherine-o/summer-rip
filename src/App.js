import React, { Component } from 'react';
import Container from './components/Container'
import './App.css';

class App extends Component {
  state = {
    deaths: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      // .then(result => console.log(result))
      .then(result => this.setState({deaths: result["deaths"]}))
  }

  render(){
    return (
      <div className="App">
        <Container deaths={this.state.deaths} />
      </div>
    )
  }
}

export default App;

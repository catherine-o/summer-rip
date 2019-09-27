import React, { Component } from 'react';
import Container from './components/Container'
import NewForm from './components/NewForm'
import './App.css';

class App extends Component {
  state = {
    deaths: [],
    selectedCard: ''
  }

  componentDidMount() {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(deaths => this.setState({ deaths }))
  }

  addDeath = (inputs) => {
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs)
    }).then(res => res.json())
    .then(death => this.setState({deaths: [...this.state.deaths, death]}))
  }

  updateSelected = (death) => {
    this.setState({ selectedCard: death })
  }

  render(){
    return (
      <div className="App">
        <header>Summer.RIP</header><br/>
        <NewForm addDeath={this.addDeath}/> <br/>
        <Container deaths={this.state.deaths} updateSelected={this.updateSelected} />
      </div>
    )
  }
}

export default App;

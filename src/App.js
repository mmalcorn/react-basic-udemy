import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      {
        name: 'Meredith',
        age: '30',
        affirmation: '',
        id: 'dh8383'
      },
      {
        name: 'Alex',
        age: '34',
        affirmation: '',
        id: 'skl389',
      },
      {
        name: 'Alp',
        age: '31',
        affirmation: '',
        id: 'sksj73'
      }
    ],
    otherState: 'Testing this other piece of state should remain unchanged',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  changedHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex((p) => p.id === id)

    const person = {
      ...this.state.persons[personsIndex]
    }

    if (event.target.name === "name") {
      person.name = event.target.value
    }
    else if (event.target.name === "affirmation") {
      person.affirmation = event.target.value
    } 

    const persons = [...this.state.persons]
    persons[personsIndex] = person;
    
    this.setState({persons: persons})
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons

    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null
    let button;

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid white',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer'
    }

    if (this.state.showPersons) { 
      persons = ( 
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} affirmation={person.affirmation} key={person.id} changed={(event) => this.changedHandler(event, person.id)} />
          })}
        </div>
      )

      button = (
        <button onClick={this.toggleHandler} style={style}>Hide affirmations</button>
      )

      style.backgroundColor = 'red';
    }

    else {
      button = ( 
      <button 
        style={style}
        onClick={this.toggleHandler}
      >Show affirmations</button> 
      )
    }

    // Conditional rendering of classes
    const classes = []
    if(this.state.persons.length <= 2) {
      classes.push('red')
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          {button}
          {persons}
        </div>
    );
  }
}

export default App;

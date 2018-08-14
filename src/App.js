import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid white',
      padding: '8px',
      font: 'inherit',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue'
      }
    }

    if (this.state.showPersons) { 
      persons = ( 
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} affirmation={person.affirmation} key={person.id} changed={(event) => this.changedHandler(event, person.id)} />
          })}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon'
      }
    }

    const classes = []

    if(this.state.persons.length <= 2) {
      classes.push('red')
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold')
    }

    console.log('classes', classes)

    return (
      <StyleRoot>
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
          style={style}
          onClick={this.toggleHandler}
          >Show affirmations</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

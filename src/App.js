import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = ({
    persons: [
      { name: 'Milon', age: 21 },
      { name: 'Nazmul', age: 21 },
      { name: 'fakrul', age: 23  },
    ],
    otherState: 'Some other state'
  });


  switchNameHandler = (newName) => {
    //DON'T DO THIS this.state.persons[0].name = 'Milon Mahato';
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Nazmul Hassan', age: 21 },
        { name: 'Fakrul Islam', age: 23  },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Milon Mahato', age: 21 },
        { name: event.target.value, age: 21 },
        { name: 'Fakrul Islam', age: 23  },
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <h1>Hello</h1>

        <button style={style} onClick = {() => this.switchNameHandler('Milon Mahato')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Milon The Boss')}
          changed={this.nameChangedHandler}>
            I'm a big guy
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />

      </div>

    );
  }
};

export default App;
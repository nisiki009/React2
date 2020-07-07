import { css } from 'glamor'

import Form from '/components/Form'
import Notes from '/components/Notes'


import React from 'react';
import logo from './logo.svg';
import './App.css';

state = { notes: [], filter: 'none' }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

createNote = async note => {
  const notes = [note, ...this.state.notes]
  const newNotes = this.state.notes
  this.setState({ notes })
}

updateNote = async note => {
  const updatedNote = {
    ...note,
    status: note.status === 'new' ? 'completed' : 'new'
  }
  const index = this.state.notes.findIndex(i => i.id === note.id)
  const notes = [...this.state.notes]
  notes[index] = updatedNote
  this.setState({ notes })
}

deleteNote = async note => {
  const input = { id: note.id }
  const notes = this.state.notes.filter(n => n.id !== note.id)
  this.setState({ notes })
}

updateFilter = filter => this.setState({ filter })



render() {
  let { notes, filter } = this.state
  if (filter === 'completed') {
    notes = notes.filter(n => n.status === 'completed')
  }
  if (filter === 'new') {
    notes = notes.filter(n => n.status === 'new')
  }
  return (
    <div {...css(styles.container)}>
      <p {...css(styles.title)}>Notes</p>
      <Form
        createNote={this.createNote}
      />
      <Notes
        notes={notes}
        deleteNote={this.deleteNote}
        updateNote={this.updateNote}
      />
      <div {...css(styles.bottomMenu)}>
        <p
          onClick={() => this.updateFilter('none')}
          {...css([ styles.menuItem, getStyle('none', filter)])}
        >All</p>
        <p
          onClick={() => this.updateFilter('completed')}
          {...css([styles.menuItem, getStyle('completed', filter)])}
        >Completed</p>
        <p
          onClick={() => this.updateFilter('new')}
          {...css([styles.menuItem, getStyle('new', filter)])}
        >Pending</p>
      </div>
    </div>
  );
}

export default App;

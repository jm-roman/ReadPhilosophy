// loop through notes and populate notes page
import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: [],
      allPrompts: [],
    };

    this.getNotes = this.getNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    fetch('http://localhost:3000/notes')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addNotes(res))
      .catch((err) => console.log('Notes getNotes on notes ERROR: ', err));
    fetch('http://localhost:3000/prompts')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addPrompts(res))
      .catch((err) => console.log('Notes getNotes on prompts ERROR: ', err));
  }

  addNotes(notes) {
    const allNotes = notes;
    this.setState({ allNotes });
  }

  addPrompts(prompts) {
    const allPrompts = prompts;
    this.setState({ allPrompts });
  }

  render() {
    const allNotes = this.state.allNotes;
    const allPrompts = this.state.allPrompts;
    const notesArray = [];

    if (allPrompts.length > 0 && allNotes.length > 0) {
      for (let i = 0; i < allPrompts.length; i++) {
        notesArray.push(
          <Note
            prompt={allPrompts[i].prompt}
            promptNum={allPrompts[i].promptNum}
            note={allNotes[i].note}
            key={i}
            id={i}
          />
        );
      }
    }

    return (
      <>
        <header>
          <h1 id='notes-title'>Notes</h1>
        </header>
        <div id='note-box'>{notesArray}</div>
        <div id='button-box'>
          <button id='back-to-reader'>
            <a href='/reader'>Back to Reader</a>
          </button>
        </div>
      </>
    );
  }
}

export default Notes;

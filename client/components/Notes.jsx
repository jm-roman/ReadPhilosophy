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
      .catch((err) =>
        console.log('App.componentDidMount: get Notes: ERROR: ', err)
      );
    fetch('http://localhost:3000/prompts')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addPrompt(res))
      .catch((err) => console.log('getPage ERROR: ', err));
  }

  addNotes(notes) {
    const allNotes = notes;
    console.log('this is currentNotes', allNotes);
    this.setState({ allNotes });
  }

  addPrompts(prompts) {
    const allPrompts = prompts;
    this.setState({ allPrompts });
  }

  render() {
    const noteProps = {};
    const notesArray = this.state.currentNotes;
    for (const note of notesArray) {
      console.log(note.note);
      notesArray.push(<Note />);
    }
    return (
      <>
        <header>
          <h1 id='notes-title'>Notes</h1>
        </header>
        <div id='note-box'>
          {notesArray}
          <button id='back-to-reader'>
            <a href='/reader'>Back to Reader</a>
          </button>
        </div>
      </>
    );
  }
}

export default Notes;

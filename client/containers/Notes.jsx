// loop through notes and populate notes page
import React, { useState, useEffect } from 'react';
import Note from '../components/Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [prompts, setPrompts] = useState([]);

  const getNotes = async () => {
    const notes = await (await fetch('http://localhost:3000/notes')).json();
    const prompts = await (await fetch('http://localhost:3000/prompts')).json();
    setNotes(notes);
    setPrompts(prompts);
  };

  useEffect(() => {
    getNotes();
  }, []);

  // does not put notes in appropriate order from prompts, this is a DB issue
  const noteMaker = () => {
    const notesArray = [];
    if (prompts.length > 0 && prompts.length > 0) {
      for (let i = 0; i < prompts.length; i++) {
        notesArray.push(
          <Note
            prompt={prompts[i].prompt}
            promptNum={prompts[i].promptNum}
            note={notes[i].note}
            key={i}
            id={i}
          />
        );
      }
    }
    return notesArray;
  };

  return (
    <>
      <header>
        <h1 id='notes-title'>Notes</h1>
      </header>
      <div id='note-box'>{noteMaker()}</div>
      <div id='button-box'>
        <button id='back-to-reader'>
          <a href='/reader'>Back to Reader</a>
        </button>
      </div>
    </>
  );
};

export default Notes;

import React from 'react';

const Note = (props) => {
  return (
    <div id={'note-' + note.noteNum}>
      <div>§{note.noteNum}</div>
      <div></div>
    </div>
  );
};

export default Note;

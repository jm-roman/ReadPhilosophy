import React from 'react';

const Note = (props) => {
  console.log(props);

  const deleteNote = (note) => {};

  return (
    <div id={'note-' + props.id} className='note'>
      <div className='note-number'>
        <b>§{props.promptNum}.</b>
      </div>
      <div className='note-prompt'>{props.prompt}</div>
      <div className='note-note'>{props.note}</div>
    </div>
  );
};

export default Note;

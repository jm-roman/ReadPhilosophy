import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  const { id, promptNum, prompt, note } = props;
  const deleteNote = (note) => {};
  return (
    <div id={'note-' + id} className='note'>
      <div className='note-number'>
        <b>§{promptNum}.</b>
      </div>
      <div className='note-prompt'>{prompt}</div>
      <div className='note-note'>{note}</div>
      <DeleteIcon />
    </div>
  );
};

export default Note;

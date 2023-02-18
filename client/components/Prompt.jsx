import React from 'react';

const Prompt = (props) => {
  // creat note save function

  return (
    <div id='prompt-box'>
      <div id='prompt'> {props.currentPrompt} </div>
      <form id='note-form'>
        <input type='text' id='answer' name='answer' />
        <button type='button' id='submit' name='Save'>
          Save Answer
        </button>
      </form>
    </div>
  );
  // get prompt text from prompt json
  // build out div
};

export default Prompt;

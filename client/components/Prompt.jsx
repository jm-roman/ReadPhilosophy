import React from 'react';

const Prompt = (props) => {
  return (
    <div id='prompt-box'>
      <div id='prompt'> {props.currentPrompt} </div>
      <form>
        <input type='text' id='answer' name='answer' value='Answer here' />
      </form>
    </div>
  );
  // get prompt text from prompt json
  // build out div
};

export default Prompt;

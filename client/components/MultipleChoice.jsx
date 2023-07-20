import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const MultipleChoice = ({currentPrompt}) => {
  const options = [
    'Biology, Anthropology, and Sociology',
    'Astronomy, Chemistry, and Geology',
    'Physics, Ethics, and Logic',
    'Psychology, Philosophy, and Theology',
  ];
  return (
    <div id='prompt-box'>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>
          {currentPrompt}
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel value='A' control={<Radio />} label={options[0]} />
          <FormControlLabel value='B' control={<Radio />} label={options[1]} />
          <FormControlLabel value='C' control={<Radio />} label={options[2]} />
          <FormControlLabel value='D' control={<Radio />} label={options[3]} />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MultipleChoice;

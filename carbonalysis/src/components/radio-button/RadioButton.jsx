import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButton({ option, name }) {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup name={name} value={value} onChange={handleChange}>
        <FormControlLabel value={option} control={<Radio />} label={option} />
      </RadioGroup>
    </FormControl>
  );
}

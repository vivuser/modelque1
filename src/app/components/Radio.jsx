import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { genderOptions } from '../utils/dummyData/radioData';

export default function Radios({field, defaultValue, options}) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{field}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
      >
        {options.map((option, index) => (
          <FormControlLabel 
          key={index}
          value={option.value}
          control={<Radio/>}
          label={option.label}/>  
        ))}
      </RadioGroup>
    </FormControl>
  );
}
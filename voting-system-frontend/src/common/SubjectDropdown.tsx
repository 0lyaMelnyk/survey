import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const names = [
  'Функціональне програмування',
  'Цифрова обробка сигналів',
  'Системи автоматизації підприємств',
  'Периферійні пристрої',
];
export default function SubjectSelect() {
 
  const [subject, setId] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setId(event.target.value as string);
  };

  return (
  <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
         {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

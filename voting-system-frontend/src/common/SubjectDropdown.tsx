import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SubjectSelect() {
  const [subject, setId] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setId(event.target.value as string);
  };

  return (
    <Box sx={{ width: 440 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value={10}>Цифрова обробка сигналів</MenuItem>
          <MenuItem value={20}>Програмування вбудованих систем</MenuItem>
          <MenuItem value={30}>Захист інформації</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

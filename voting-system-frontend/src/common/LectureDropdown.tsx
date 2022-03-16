import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox } from '@mui/material';

export default function LectureSelect() {
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
          <MenuItem value={10}>
          <Checkbox defaultChecked />
Слюсар Євген Андрійович</MenuItem>
          <MenuItem value={20}>
          <Checkbox />
Самощенко Олександр Вікторович</MenuItem>
          <MenuItem value={30}>
          <Checkbox defaultChecked/>
Борецький Олександр Францович</MenuItem>
          <MenuItem value={40}>
          <Checkbox />
Загороднюк Сергій Петрович</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

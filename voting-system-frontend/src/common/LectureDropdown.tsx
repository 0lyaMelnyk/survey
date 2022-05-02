import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Teacher } from '../models/Teacher';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface ITeacherSelectProps{
  selectedTeacherIds: Number[],
  teacherOptions: Teacher[],
  onSelect: Function
}
export default function LectureDropdown(props: ITeacherSelectProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    let index = props.teacherOptions.findIndex(x=>x.teacherName==value);
    props.onSelect({index, value});
    console.log(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value:any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.teacherOptions.map((item) => (
            <MenuItem
              key={item.teacherId}
              value={item.teacherName}
              style={getStyles(item.teacherName, personName, theme)}
            >
              {item.teacherName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
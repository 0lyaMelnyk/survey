import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel/FormLabel';
import RadioGroup from '@mui/material/RadioGroup/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
function createData(
  noMarks: number,
  totalyDisagree: number,
  partialyDisagree: number,
  partialyAgreePartialyDisagree: number,
  partialyAgree: number,
  totallyAgree: number
) {
  return { noMarks, totalyDisagree, partialyDisagree, partialyAgreePartialyDisagree, partialyAgree, totallyAgree };
}

const rows = [
  createData(0, 1, 2, 3, 4, 5)
];

export default function MarksTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="right">
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="" control={<Radio />} label="" />
                  </RadioGroup>
                </FormControl>
              </TableCell>
              <TableCell align="right"><FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="" />
                </RadioGroup>
              </FormControl></TableCell>
              <TableCell align="right"><FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="" />
                </RadioGroup>
              </FormControl></TableCell>
              <TableCell align="right"><FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="" />
                </RadioGroup>
              </FormControl></TableCell>
              <TableCell align="right"><FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="" />
                </RadioGroup>
              </FormControl></TableCell>
              <TableCell align="right"><FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="" />
                </RadioGroup>
              </FormControl></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

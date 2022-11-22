import * as React from "react";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Subject } from "../models/Subject";

interface ISubjectSelectProps {
  selectedSubjectId: Number;
  subjectOptions: Subject[];
  onSelect: Function;
}
export function SubjectSelect(props: ISubjectSelectProps): JSX.Element {
  const [subjectId, setSubjectId] = React.useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);

    let newId = Number.parseInt(event.target.value);
    setSubjectId(newId);
    props.onSelect(newId);
    console.log(newId);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Назва</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={subjectId?.toString()}
          label="Subject"
          onChange={handleChange}
        >
          {props.subjectOptions.map((subject) => (
            <MenuItem key={subject.subjectId} value={subject.subjectId}>
              {subject.subjectName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

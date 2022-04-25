import { Button, ListItemText } from '@mui/material';
import * as React from 'react';
import LectureDropdown from '../common/LectureDropdown';
import SubjectSelect from '../common/SubjectDropdown';


export default function CommonContainer(onSubmit: any) {
    return (
        <><div>
            <ListItemText primary="Назва освітньої програми: Комп'ютерна інженерія " />
            <ListItemText primary="Освітній рівень (бакалавр, магістр, доктор філософії): бакалавр" />
            <ListItemText primary="Рік навчання: 4" />
            <ListItemText primary="Навчальна дисципліна: " />
            <SubjectSelect />
            <ListItemText primary="ПІБ лектора" />
            <LectureDropdown />
            <ListItemText primary="ПІБ семінариста" />
            <LectureDropdown />
        </div>
        <div>
            <Button onClick={onSubmit}>Apply</Button>
            </div>
            </>
    )
}

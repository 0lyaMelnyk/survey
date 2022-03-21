import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SubjectSelect from './SubjectDropdown';
import LectureSelect from './LectureDropdown';

export default function BasicList() {
  return (
    <Box sx={{ width: '50%', bgcolor: 'background.paper' }}>
        <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Назва освітньої програми: Комп'ютерна інженерія " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Освітній рівень (бакалавр, магістр, доктор філософії): бакалавр" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Рік навчання: 4" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Навчальна дисципліна: " />
              <SubjectSelect/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ПІБ лектора" />
              <LectureSelect/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ПІБ семінариста" />
              <LectureSelect/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

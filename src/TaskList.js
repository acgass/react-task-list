import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';

function AddButton(props){
  return (
    <Button
      variant='contained'
      onClick={props.onClick}
    >
      Add New Task
    </Button>
  );
}

class TaskList extends React.Component {
  render() {
    return (
        <Stack
            spacing={2}
        >
          <Item> 
            Some task here
          </Item>
          <Item> 
            Some  other task here
          </Item>
          <Item>
              <TextField id="outlined-basic" label="New Task" variant="outlined" 
              />
              <AddButton 
                onClick={() => console.log('this was hit')} 
              />
          </Item>
        </Stack>
    );
  }
}

export default TaskList;

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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

function TaskList (){
  const [tasklist, setTaskList] = useState([]);
  const [value, setValue] = useState("");

  const addChild = ((taskName) => {
    console.log('we are trying to add a new task');
    const  copy = tasklist.slice();
    const  newindex = copy.length;
    copy[newindex] = {
      name: taskName,
      id: newindex
    }
    setTaskList(copy)
    setValue('')
  });

  const onChange=((e) => {
    setValue(e.target.value);
  });

  return (
      <Stack
          spacing={2}
      >
        {
         tasklist.map((task) => (
              <Item id={task.id}>{task.name}</Item>
          ))
        }
        <Item>
          <TextField 
            id="new-task" 
            label="New Task" 
            variant="outlined"
            value={value}
            onChange={onChange}
          />
          <AddButton 
          onClick={() => addChild(value)} 
          />
        </Item>
      </Stack>
  );
}

export default TaskList;

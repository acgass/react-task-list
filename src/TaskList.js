import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));


function AddButton(props){
  return (
    <Button
      variant='contained'
      onClick={props.onClick}
    >
      <AddIcon fontSize="small" />
    </Button>
  );
}

function TaskRow(props){
  return (
    <React.Fragment>
      <Grid item xs={2} alignSelf='right'>
        <Checkbox label='is-done' />
      </Grid>
      <Grid item xs={9}>
        <Item id={props.data.id}>{props.data.name}</Item>
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
    </React.Fragment>
  );
}

function TaskList (){
  const [tasklist, setTaskList] = useState([]);
  const [value, setValue] = useState("");

  const addChild = ((taskName) => {
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
      <Grid container
          spacing={2}
          direction="column"
          alignItems="center"
      >
        {
         tasklist.map((task) => (
          <Grid container 
            item 
            spacing={3}
            alignItems='center'
          >
            <TaskRow data={task} />
          </Grid>
          ))
        }
        <Grid container 
          item 
          spacing={3}
          alignItems='center'
        >
          <Grid item xs={10}>
            <TextField 
              id="new-task" 
              label="New Task" 
              variant="outlined"
              value={value}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={2}>
            <AddButton 
              onClick={() => addChild(value)} 
            />
          </Grid>
        </Grid>
      </Grid>
  );
}

export default TaskList;

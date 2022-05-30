import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Item from '@mui/material/ListItem';
import { Box, Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import './index.css';


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

class Task extends React.Component {
  render() {
    return (
      console.log('hi')
    );
  }
}

class TaskList extends React.Component {

  renderAddTaskRow(i) {
    return(
      <div className='row'>
          <TextField id="outlined-basic" label="New Task" variant="outlined" 
          />
          <AddButton 
            onClick={() => console.log('this was hit')} 
          />
      </div>
    );
  }
  render() {
    return (
      <Container
        alignItems="center"
      >
        <Stack spacing={3}
            sx={{
            backgroundColor: 'white',
            color: 'black',
          }} 
        >
          <Item> 
            Some task here
          </Item>
          <Item>
            {this.renderAddTaskRow()}
          </Item>
        </Stack>
      </Container>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

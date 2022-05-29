import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


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

  renderAddButton(i) {
    return( 
      <AddButton 
        onClick={() => console.log('this was hit')} 
      />
    );
  }
  render() {
    return (
    <div>
      <div>
        <TextField id="outlined-basic" label="New Task" variant="outlined" />
      </div>
      <div>
        {this.renderAddButton()}
      </div>
    </div>
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

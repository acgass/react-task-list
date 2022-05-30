import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import TaskList from './TaskList'
import './index.css';
import Grid from '@mui/material/Grid';


function Notepad(){  
  return(
    <Grid container  
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
          <h3>
            Anna's Task List
          </h3>
      </Grid>
      <Grid item>
        <TaskList />
      </Grid>
    </Grid>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Notepad/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

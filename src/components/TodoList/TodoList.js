import { Checkbox, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import './TodoList.css'
import { green } from '@mui/material/colors';

const style = {
    title: {
        color: 'white',
    },
    datetime: {
        color: 'grey',
    },
    menustyle: {
        color: '#fff',
        fontSize: 40
    },
    vertstyle: {
        color: '#bfc3cb',
        fontSize: 35
    },
    checklisticon:{
        paddingRight: 10,
        color: "white",
        fontSize: 24
    }
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoList = () => {
  return (
      <div className='todo'>
          <div className='todo-header'>
              <div className='card-title'>
                    <Typography variant="h5" component="h2" style={style.title}>
                        Today To Do List
                    </Typography>
                    <div className='datetime' style={style.datetime}>
                        Saturday, 12 October 2019
                    </div>
              </div>
              <div className='icon-bg'>
                <AddRoundedIcon style={style.menustyle}/>
              </div>
              <MoreVertRoundedIcon style={style.vertstyle}/>
          </div>
          <div className='todo-body'>
            <div className='checklist checked'>
                <Checkbox {...label} defaultChecked sx={{color: green[800],'&.Mui-checked': {color: green[600],},}}/>
                <div className='checklist-description'>
                    <strike>Way sentiment two indulgence uncommonly own</strike>
                </div>
                <InfoIcon style={style.checklisticon}/>
                <MoreVertRoundedIcon style={style.checklisticon}/>
            </div>
            <div className='checklist checked'>
                <Checkbox {...label} defaultChecked sx={{color: green[800],'&.Mui-checked': {color: green[600],},}}/>
                <div className='checklist-description'>
                    <strike>Ut cupidatat consequat anim sunt fugiat est laborum anim</strike>
                </div>
                <InfoIcon style={style.checklisticon}/>
                <MoreVertRoundedIcon style={style.checklisticon}/>
            </div>
            <div className='checklist checked'>
                <Checkbox {...label} sx={{color: green[800],'&.Mui-checked': {color: green[600],},}}/>
                <div className='checklist-description completed'>
                    Et excepteur velit incididunt consectetur enim excepteur
                </div>
                <InfoIcon style={style.checklisticon}/>
                <MoreVertRoundedIcon style={style.checklisticon}/>
            </div>
            <div className='checklist checked'>
                <Checkbox {...label} defaultChecked sx={{color: green[800],'&.Mui-checked': {color: green[600],},}}/>
                <div className='checklist-description'>
                    <strike>Pariatur proident enim sunt non cillum aliquip occaecat est ad pariatur ut nulla</strike>
                </div>
                <InfoIcon style={style.checklisticon}/>
                <MoreVertRoundedIcon style={style.checklisticon}/>
            </div>
          </div>
      </div>
  );
};

export default TodoList;

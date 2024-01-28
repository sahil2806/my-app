import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const Field = ({name , email , index}) => {
  return (
    <div className="field">
        <div className='data_val'>
            <div className='val'> <h1>{name}</h1> </div>
            <div className='val'> <h1>{email}</h1> </div>
            <div><Button   variant="contained" color='success'> <DeleteIcon/>  </Button></div>
        </div>
    </div>
  )
}

export default Field
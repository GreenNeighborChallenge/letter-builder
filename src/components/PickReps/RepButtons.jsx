import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';

let CustomButton = withStyles({
  root: {
    height: '6em',
    width: '20em', 
    backgroundColor: '#f8f8f830',
    borderColor: '#1D201D',
    borderRadius: '.75em',
    '&:hover': {
    
      backgroundColor: '#1D201D30',
    },
  },
  label: {
    margin: '1.5em',
  },
})((props) => <Button {...props} ></Button>);

let RepButton = withStyles({
    root: {
      backgroundColor: '#f8f8f830',
      border: 1,
      borderRadius: '1em',
      width: '23em', 
      height: '6em',
      outline: 0,
      '&:hover': {
        backgroundColor: '#1D201D10',
      },
    },
    label: {
      display: 'flex',
      padding: '1em',
      margin: '-.6em -1em -.6em -1em',
      color: '#000000',
      fontSize: '13px',
      width: '25em',  
      height: '4em',
      border: '1px solid #000000',
      borderRadius: '.75em'
    },
  })((props) => <ToggleButton {...props} ></ToggleButton>);


export { CustomButton, RepButton }
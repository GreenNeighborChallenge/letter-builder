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
    '&:focus': {
      backgroundColor: '#1D201D10',
    }
  },
  label: {
    margin: '1.5em',
  },
})((props) => <Button {...props} ></Button>);

let RepButton = withStyles({
    root: {
      backgroundColor: '#f8f8f830',
      border: .5,
      borderRadius: '.85em',
      width: '23em', 
      height: '5.8em',
      outline: 0,
      '&:hover': {
        backgroundColor: '#1D201D10',
      },
      '&:focus': {
        backgroundColor: '#1D201D10',
      }
    },
    label: {
      display: 'flex',
      padding: '1em',
      margin: '-1.6em -.9em -1.5em -1em',
      color: '#000000',
      fontSize: '13px',
      width: '25em',  
      height: '3.8em',
      border: '1px solid #000000',
      borderRadius: '1em',
    },
  })((props) => <ToggleButton {...props} ></ToggleButton>);


export { CustomButton, RepButton }
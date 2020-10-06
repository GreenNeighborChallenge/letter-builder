import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

let CustomButton = withStyles({
  root: {
    height: '6em',
    width: '20em', 
    backgroundColor: '#f8f8f830',
    borderColor: '#1D201D',
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
      borderColor: '#1D201D',
      width: '20em', 
      height: '6em',
      '&:hover': {
        backgroundColor: '#1D201D10',
      },
    },
    label: {
      margin: '1em',
    },
  })((props) => <Button {...props} ></Button>);


export { CustomButton, RepButton }
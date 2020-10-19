import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">How did we grade your state?</DialogTitle>
      <div style={{padding: 10}}>
     <Typography variant='body1'>We are currently using grades from the scorecard created by <a href='http://www.solarpowerrocks.com' target="_blank" rel="noopener noreferrer">solarpowerrocks.com </a>, which rates states on their Renwable Portfolio Standards, solar carve-outs, net metering policies, interconnection, community solar programs, and solar tax incentives. Future versions of this tool will be updated to reflect scores for climate action plans, PACE, vehicle standards, CCAs, and green pricing mandates. </Typography>
     </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function GradeExplainer() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Learn More
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}


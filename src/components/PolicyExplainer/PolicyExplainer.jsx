import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Tooltip from '@material-ui/core/Tooltip';
import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";


//override button styling?
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
                color: "black",
                backgroundColor: "white",
                boxShadow: "0 2px 2px 2px rgba(0, 0, 0, .4)",
                fontWeight: 'normal',
            }
        }
    }
});

function PolicyExplainer(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display: 'inline'}}>
      <MuiThemeProvider theme={theme}>
      <Tooltip  title={props.toolTitle}>
      <Button color="primary" onClick={handleClickOpen} style={{color: 'black'}} id={props.id}>
        {props.policy_name}
        <HelpOutlineIcon />
      </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </MuiThemeProvider>
    </div>
  );
}

export default connect(mapStoreToProps)(PolicyExplainer)
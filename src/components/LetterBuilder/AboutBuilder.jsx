import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton'
import '../../components/ZipCode/ZipCode.css'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
    minWidth: '10em',
  },
  paper: {
    padding: theme.spacing(1),
  },
  about: {
    float: 'right',
    paddingLeft: '-10em'
}
}));

export default function MouseOverPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.about}>
      <IconButton
        
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <InfoIcon />
      </IconButton>
      <Popover fontSize='small'
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography  variant="body2" > Click on the policies to learn more about them, and what impact they
        <br/> would have on your state’s emissions, energy use, and citizen empowerment. <br/>
        Add policies to your letter and customize your introduction and conclusion </Typography>
      </Popover>
    </div>
  );
}
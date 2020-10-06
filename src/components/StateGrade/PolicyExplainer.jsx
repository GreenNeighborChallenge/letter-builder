import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));




export default function PolicyExplainer(props) {

    let popoverText = '';
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handlePopoverOpen = (event) => {

        console.log(props)
        if (props.type === "CAP") {
            popoverText = 'I am CAP'
            console.log(popoverText)
        }
        if (props.type === 'RPS') {
            popoverText = 'I am RPS'
        }
        if (props.type === 'GPM') {
            popoverText = 'I am GPM'
        }
        if (props.type === 'PACE') {
            popoverText = 'I am PACE'
        }
        if (props.type === 'EES') {
            popoverText = 'I am EES'
        }
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };


    const open = Boolean(anchorEl);

    return (

        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <HelpOutlineIcon fontSize='small' />
            </Typography>
            {props.type &&
                <Popover
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
                    {popoverText}
                </Popover>}
        </div>
    );
}
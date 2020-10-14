import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import './PreviewLetter.css';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function PreviewLetter({letter, address, selections}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const policies = letter.body.map((policy) => {
        return policy
    })
    const emailBody = letter.intro + policies + letter.conclusion

    return (

        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Preview Letter!
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Preview
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom className="header">
                        Preview your letter below to make sure everything looks right. Click the "x" in the top right corner
                        to make any edits. When you are happy with your letter, either hit “send” to email it
                        to your selected local officials, or “print” to create a printable PDF with a form for signatures.
                    </Typography>
                    <br />
                    <Typography gutterBottom className="info">
                        Sender: {address.email}
                        <br />
                        <> 
                        Recipient(s): {selections}
                        </>
                        <br />
                        Subject: {letter.subject}
                        <br />
                        Message:
                    </Typography>
                    <Typography gutterBottom className="body">
                        {letter.intro}
                        <br />
                        {letter.body.map((policy, i) => {
                            return (
                                <p key={i}>{policy}</p>
                            )
                        })}
                        <br />
                        {letter.conclusion}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <button>Print PDF <PictureAsPdfIcon /></button>
                    <Button autoFocus onClick={handleClose}>
                    <a href={`mailto:${selections}?subject=${letter.subject}&body=${emailBody}`} >Send Mail</a>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const mapStoreToProps = (reduxState) => {
    return {
        letter: reduxState.letter,
        address: reduxState.address,
    };
};
export default connect(mapStoreToProps)(PreviewLetter);

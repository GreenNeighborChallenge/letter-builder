import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Stepper from '../Stepper/Stepper'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '48em',
        background: 'rgb(255,255,255, .85)',
        padding: '1em',
    },
    emailHeader: {
        minWidth: '30em',
        border: '1px solid black',
        padding: '1em',
        margin: '1em',
    },
    emailBody: {
        minHeight: '10em',
        border: '1px solid black',
        padding: '1em',
        background: 'rgb(255,255,255, .4)',
    },
    noAddress: {
        marginTop: '5em'
    },
    left: {
        float: 'left'
    },
    right: {
        float: 'right'
    },
    cardActions: {
        all: 'unset',
        width: '48em'
    },
    stepper: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '-3em'
    },
});

function PreviewLetter({ letter, address, selections, history, emails }) {
    const { root, card, emailHeader, left, emailBody, right, stepper } = useStyles();

    const policies = letter.body.map((policy) => {
        return policy
    })
    const letterBody = letter.intro + policies + letter.conclusion;
    
    const directToConfirmation = () => {
        history.push('/confirmation')

    }
    const directToReps = () => {
        history.push('/selectContacts')
    }
    return (
        <div className={root}>
            <Card className={card}>
                <Typography variant="h5" component="h2" gutterBottom align="center" >
                    Preview your Email
                    </Typography>
                <Typography gutterBottom >
                    Preview your letter below to make sure everything looks right. Click the "x" in the top right corner
                    to make any edits. When you are happy with your letter, either hit “send” to email it
                    to your selected local officials, or “print” to create a printable PDF with a form for signatures.
                </Typography>
                <CardContent className={emailHeader}>
                    <Typography gutterBottom align="left">
                        Sender: {address.email}
                        <br />
                        <>
                            Recipient(s): {emails}
                        </>
                        <br />
                        Subject: {letter.subject}
                        <br />
                        Message:
                    </Typography>
                    <Typography gutterBottom className={emailBody}>
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
                </CardContent> 
                <div className={stepper} > 
                        <Stepper step={3}/>
                    </div>
                <CardActions >
                
                    <IconButton onClick={directToReps} style={{color:'black' }}><ArrowBackIcon /></IconButton>
                    <div className={right}>
                        <Button >Print PDF <PictureAsPdfIcon /></Button>
                        <Button href={`mailto:${emails}?subject=${letter.subject}&body=${letterBody}`} target="_blank" onClick={directToConfirmation} >
                            Send Mail
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        letter: reduxState.letter,
        address: reduxState.address,
        emails: reduxState.emails
    };
};
export default connect(mapStoreToProps)(PreviewLetter);

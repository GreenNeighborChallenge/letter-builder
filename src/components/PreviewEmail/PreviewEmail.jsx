import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Stepper from '../Stepper/Stepper'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
    email: {
        minWidth: '30em',
        border: '1px solid black',
        padding: '1em',
        margin: '1em',
        borderRadius: '.3em',
    },
    emailBodyStyle: {
        minHeight: '10em',
        border: '1px solid black',
        borderRadius: '.3em',
        padding: '1em',
        background: 'rgb(255,255,255, .4)', 
        marginTop: '.5em'
    },
    noAddress: {
        marginTop: '5em'
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
    title: {
        fontSize: 48,
        fontFamily: 'leafy',
        color: 'black',
        margin: "0 0 -.1em .25em"
    },
    bodyText: {
        whiteSpace: 'pre-line',
    },
    subHeader: {
        width: '50em',
        margin: 'auto',
        paddingBottom: '.5em'
    },
    black: {
        color: 'black'
    },
    recipients: {
        width: '38em'
    }
});

function PreviewLetter({ letter, address, history, emails, dispatch }) {
    const { root, card, email, emailBodyStyle, right, stepper, title, bodyText, subHeader, black } = useStyles();

    const directToConfirmation = () => {
        history.push('/confirmation')
    }

    const directToReps = () => {
        history.push('/selectContacts')
        dispatch({ type: 'DELETE_BODY' })
    }

    const directToPdf = () => {
        history.push('/pdf')
    }

    const fullEmail = encodeURIComponent(letter.intro +
        '\n' +
        '\n' + letter.body + letter.conclusion)

    return (
        <div className={root}>
            <Card className={card}>
                <Typography variant="h5" component="h2" gutterBottom align="center" className={title}>
                    Preview your Email
                    </Typography>
              
                    <Typography variant="body2" gutterBottom align="center" color="textSecondary" className={subHeader}>
                        Preview your letter below to make sure everything looks right. When you are happy with your letter, either hit “send” to email it
                        to your selected local officials, or “print” to create a printable PDF.
                </Typography>
           
                <CardContent className={email}>
                    <Typography >
                        Sender: {address.email}
                        </Typography>
                        <Typography> Recipient(s): {emails.join(', ')}
                        </Typography>
                        <Typography >  Subject: {letter.subject} </Typography >
                        <Typography > Message: </Typography >
                    <div className={emailBodyStyle}>
                        <Typography gutterBottom >
                            {letter.intro}
                        </Typography>
                        <Typography gutterBottom className={bodyText}>
                            <br />
                            {letter.body}
                        </Typography>
                        <Typography gutterBottom >
                            {letter.conclusion}
                        </Typography>
                    </div>
                </CardContent>
                <div className={stepper} >
                    <Stepper step={3} />
                </div>
                <section >
                    <IconButton onClick={directToReps} className={black}><ArrowBackIcon /></IconButton>
                    <div className={right}>
                        <Button onClick={directToPdf}>Create pdf<PictureAsPdfIcon /></Button>
                        <Button
                            href={`mailto:${emails}?cc=${address.email}&subject=${letter.subject}&body=${fullEmail}`} target="_blank" onClick={directToConfirmation}
                        > SEND
                        
                        
                         </Button>
                    </div>
                </section>
            </Card>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        letter: reduxState.letter,
        address: reduxState.address,
        emails: reduxState.emails,
        zip: reduxState.zip
    };
};
export default connect(mapStoreToProps)(PreviewLetter);

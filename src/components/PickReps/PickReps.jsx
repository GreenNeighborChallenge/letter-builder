import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardActions, Typography, CardContent,
    IconButton, makeStyles, FormHelperText
} from '@material-ui/core';
import { RepButton } from './RepButtons'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Stepper from '../Stepper/Stepper'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '48em',
        backgroundColor: 'rgb(255,255,255, .85)',
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em',
    },
    cardContent: {
        minHeight: '24em',
        // minWidth: '24em',
        marginBottom: '-1em'
    },
    left: {
        float: 'left'
    },
    repButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '1em',
        margin: '1em',
    },
    noAddress: {
        margin: '5em 0 1em 0'
    },
    right: {
        float: 'right'
    },
    cardActions: {
        all: 'unset',
        width: '48em'
    },
    stepper: {
        paddingTop: '-3em'
    },
    title: {
        fontSize: 48,
        fontFamily: 'leafy',
        color: 'black'
    },
    addMarginTop: {
        marginTop: '1em'
    },
    helpText:  {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        margin: '-1em 0 0 0'
    }
});


const PickReps = ({ dispatch, reps, history, offices }) => {
    const { root, card, cardContent, left, repButtons, noAddress, right,
        cardActions, stepper, title, addMarginTop, helpText
    } = useStyles();

    const [selections, setSelections] = useState(() => []);
    const [helperText, setHelperText] = useState('');
    const [errorState, setErrorState] = useState(false);

    const handleSelections = (event, newSelection) => {
        setSelections(newSelection)
    }

    const directToAddressForm = () => {
        history.push('/address')
    }

    useEffect(() => {
    }, [reps]);

    const directToPreview = () => {
        if ((selections === '')) {
            setErrorState(true);
            setHelperText('You must pick an email recipient to preview Your letter');
        } else {
            setErrorState(false);
            dispatch({ type: 'PUT_EMAIL', payload: selections })
            history.push('/previewEmail')
        }
    }

    return (
        <div className={root}>
            <Card className={card} >
                <CardContent className={cardContent} >
                    <Typography variant="h5" component="h2" gutterBottom align="center" className={title}>
                        Select Your Representatives
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" >
                        To send an email, select recipients and add your contact information to the the letter. To Create a paper petition, you can skip to the bottom to generate a printable PDF.
                    </Typography>
                    {(reps.kind === "civicinfo#representativeInfoResponse" && offices.id) ?
                        <div >
                            <ToggleButtonGroup value={selections} className={repButtons} onChange={handleSelections}>
                                <RepButton value={offices.gov_email}> {reps.offices[0].name} <br /> {reps.officials[0].name} <br /> {offices.gov_email} </RepButton>
                                <RepButton value={reps.officials[1].emails[0]} > {reps.offices[1].name} <br /> {reps.officials[1].name} <br />{reps.officials[1].emails[0]} </RepButton>
                                <RepButton value={reps.officials[2].emails[0]} className={addMarginTop}> {reps.offices[2].name} <br /> {reps.officials[2].name} <br /> {reps.officials[2].emails[0]} </RepButton>
                                <RepButton value={offices.doc} className={addMarginTop}> Department of Commerce  <br /> {offices.doc}  </RepButton>
                                <RepButton value={offices.SSEO_email} className={addMarginTop}> {offices.SSEO_name}  {offices.SSEO_email} </RepButton>
                                <RepButton value={offices.puc} className={addMarginTop}> Public Utilities Commission  {offices.puc} </RepButton>
                            </ToggleButtonGroup>
                        </div>
                        :
                        <>
                            <Typography variant="h6" component="h6" align="center" className={noAddress} error={errorState}  >
                                No Address Has been entered! <br /> Please go back and and enter your address <br /> to see your representatives
                                </Typography>
                        </>}
                        <FormHelperText error={errorState} className={helpText}> {helperText} </FormHelperText>
                </CardContent>
                <Stepper step={2} className={stepper} />
                <CardActions className={cardActions}>
                    <div className={right}>
                        <IconButton onClick={directToPreview} style={{ display: 'inline', float: 'right', color: 'black' }}><ArrowForwardIcon /></IconButton>
                    </div>
                    <div className={left}>
                        <IconButton onClick={directToAddressForm} style={{ display: 'inline', float: 'left', color: 'black' }}><ArrowBackIcon /></IconButton>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        reps: reduxState.reps,
        offices: reduxState.offices
    };
};

export default connect(mapStoreToProps)(PickReps)
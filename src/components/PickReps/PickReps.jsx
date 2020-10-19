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
        minHeight: '35em',
        maxHeight: '42em',
    },
    cardContent: {
        minHeight: '24em',
        marginBottom: '-1em'
    },
    repButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '0 0 2em 0',
        maxHeight: '25em'
    },
    hidden: {
        visibility: 'hidden',
    },
    right: {
        float: 'right',
        color: 'black'
    },
    left: {
        float: 'left',
        color: 'black'
    },
    cardActions: {
        width: '48em'
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '-1.05em'
    },
    title: {
        fontSize: 48,
        fontFamily: 'leafy',
        color: 'black',
        marginBottom: '-.1em'
    },
    addMarginTop: {
        marginTop: '1em'
    },
    helpText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        marginTop: '-1em'
    },
    subheader: {
        width: '46em',
        margin: 'auto'
    },
    noReps: {
        height: '10em'
    },
    repSection: {
        margin: '1em 0 -.6em 0',
        minHeight: '21em'
    }
});


const PickReps = ({ dispatch, reps, history, offices }) => {
    const { root, card, cardContent, left, repButtons, right, noReps,
        cardActions, stepper, title, addMarginTop, helpText, subheader, repSection
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
        if ((selections.length === 0)) {
            setErrorState(true);
            setHelperText('You must pick an email recipient to preview your letter');
        } else {
            setErrorState(false);
            dispatch({ type: 'PUT_EMAIL', payload: selections })
            history.push('/previewEmail')
        }
    }

    return (
        <div className={root}>
            <Card className={card} >
                <div className={cardContent} >
                    <Typography variant="h5" component="h2" gutterBottom align="center" className={title}>
                        Select Your Representatives
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" className={subheader}>
                        To send an email, select recipients and add your contact information to the the letter. To create a paper petition, you can skip to the bottom to generate a printable PDF.
                    </Typography>
                    <div className={repSection}>
                        {(reps.kind === "civicinfo#representativeInfoResponse" && (reps.offices.length > 0)) ?
                            <ToggleButtonGroup value={selections} className={repButtons} onChange={handleSelections} >

                                {reps.officials &&
                                    <RepButton value={offices.gov_email} className={addMarginTop}> {reps.offices[0].name} <br /> {reps.officials[0].name} <br /> {offices.gov_email} </RepButton>}

                                {(reps.officials.length > 1) &&
                                    <RepButton value={reps.officials[1].emails[0]} className={addMarginTop} > {reps.offices[1].name} <br /> {reps.officials[1].name} <br />{reps.officials[1].emails[0]} </RepButton>
                                }
                                {(reps.officials.length > 2) &&
                                    <RepButton value={reps.officials[2].emails[0]} className={addMarginTop}> {reps.offices[2].name} <br /> {reps.officials[2].name} <br /> {reps.officials[2].emails[0]} </RepButton>

                                }
                                {offices.doc &&
                                    <RepButton value={offices.doc} className={addMarginTop}> Department of Commerce  <br /> {offices.doc}  </RepButton>
                                }
                                {offices.SSEO_email &&
                                    <RepButton value={offices.SSEO_email} className={addMarginTop}> {offices.SSEO_name}  {offices.SSEO_email} </RepButton>}

                                {offices.puc &&
                                    <RepButton value={offices.puc} className={addMarginTop}> Public Utilities Commission  {offices.puc} </RepButton>}

                            </ToggleButtonGroup>
                            :
                            <div className={noReps}>
                            </div>
                        }
                        <FormHelperText error={errorState} className={helpText}> {helperText} </FormHelperText>
                    </div>
                </div>
                <section className={cardActions}>
                    <div className={stepper} > 
                    <Stepper step={2} />
                    </div>
               
                    <IconButton onClick={directToPreview} className={right}><ArrowForwardIcon /></IconButton>


                    <IconButton onClick={directToAddressForm} className={left}><ArrowBackIcon /></IconButton>
                </section>
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
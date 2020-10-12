import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { RepButton } from './RepButtons'
import PreviewLetter from '../PreviewLetter/PreviewLetter';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Stepper from '../Stepper/Stepper'

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
        paddingTop: '-3em'
    },
});


const PickReps = ({ dispatch, reps, history, offices }) => {
    const {root, card,cardContent, left, repButtons, noAddress, right, cardActions, stepper}  = useStyles();
    const [selections, setSelections] = useState(() => []);

    const handleSelections = (event, newSelection) => {
        setSelections(newSelection)
    }

    const directToAddressForm = () => {
        history.push('/address')
    }

    useEffect(() => {
        console.log(reps);
    }, [reps]);

    const directToPreview = () => {
        dispatch({type: 'PUT_EMAIL', payload: selections})
        history.push('/previewEmail')
    }

    return (
        <div className={root}>
            <Card className={card} >
                <CardContent className={cardContent} >
                    <Typography variant="h5" component="h2" gutterBottom align="center" >
                        Select Your Representatives
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" >
                        To send an email, select recipients and add your contact information to the the letter. To Create a paper petition, you can skip to the bottom to generate a printable PDF.
                    </Typography>
                    { (reps.kind === "civicinfo#representativeInfoResponse" && offices.id) ?
                            <div >
                                <ToggleButtonGroup value={selections} className={repButtons} onChange={handleSelections}>
                                    <RepButton value={offices.gov_email}> {reps.offices[0].name} <br /> {reps.officials[0].name} <br /> {offices.gov_email} </RepButton>
                                    <RepButton value={reps.officials[1].emails[0]} > {reps.offices[1].name} <br /> {reps.officials[1].name} <br />{reps.officials[1].emails[0]} </RepButton>
                                    <RepButton value={reps.officials[2].emails[0]} style={{ marginTop: '1em' }}> {reps.offices[2].name} <br /> {reps.officials[2].name} <br /> {reps.officials[2].emails[0]} </RepButton>
                                    <RepButton value={offices.DoC} style={{ marginTop: '1em' }}> Department of Commerce  <br /> {offices.DoC}  </RepButton>
                                    <RepButton value={'nothing yet'} style={{ marginTop: '1em' }}> State Sustainability Office   </RepButton>
                                    <RepButton value={offices.puc} style={{ marginTop: '1em' }}> Public Utilities Commission  {offices.puc} </RepButton>
                                </ToggleButtonGroup>
                            </div>
                            :
                            <>
                                <Typography variant="h6" component="h6" align="center" className={noAddress} >
                                    No Address Has been entered! <br /> Please go back and and enter your address <br /> to see your representatives
                    </Typography>
                            </>}
                </CardContent>
                <Stepper step={2} className={stepper}/> 
                <CardActions className={cardActions}>
                    
                <div className={right}>
                <Button variant="outlined" onClick={directToPreview}>
                    Preview Letter!
                </Button>
                    {/* <PreviewLetter selections={selections} /> */}
                </div>
                <div className={left}>
                <Button variant="outlined" onClick={directToAddressForm}> Back </Button>
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
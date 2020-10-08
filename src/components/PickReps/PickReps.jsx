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

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '48em',
        height: '35em',
        backgroundColor: 'rgb(255,255,255, .85)',
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1em'
    },
    cardContent: {
        minHeight: '25em',
        minWidth: '25em',
    },
    preview: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
    }
});


const PickReps = ({ dispatch, reps, history, offices }) => {
    const classes  = useStyles();
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

    console.log(selections);

    return (
        <div className={classes.root}>
            <Card className={classes.card} >
                <CardContent className={classes.cardContent} >
                    <Typography variant="h5" component="h2" gutterBottom align="center" >
                        Your Representatives
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" >
                        To send an email, select recipients and add your contact information to the the letter. To Create a paper petition, you can skip to the bottom to generate a printable PDF.
                    </Typography>
                    {/* <Typography variant="body2" component="p" color="textSecondary" align="center" >
                    (Hover for more information, click to add recipient. Yellow highlighted buttons are recommended for the policies you selected)
                    </Typography> */}
                    {
                        (reps.kind === "civicinfo#representativeInfoResponse" && offices.id) ?
                            <div >
                                <ToggleButtonGroup value={selections} className={classes.repButtons} onChange={handleSelections}>
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
                                <Typography variant="h6" component="h6" align="center" className={classes.noAddress} >
                                    No Address Has been entered! <br /> Please go back and and enter your address <br /> to see your representatives
                    </Typography>
                            </>}
                </CardContent>
                <CardActions className={classes.preview}>
                    <PreviewLetter selections={selections} />
                    <Button onClick={directToAddressForm}> Back </Button>
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
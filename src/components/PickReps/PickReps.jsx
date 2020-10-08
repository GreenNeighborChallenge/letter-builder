import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import {Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CustomButton, RepButton } from './RepButtons'

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        maxWidth: "45em",
        minWidth: '35em',
        minHeight: '35em',
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
    },
    noAddress: {
        marginTop: '5em'
    }
});

const PickReps = ({ dispatch, reps, history, offices }) => {
    const { root, card, preview, cardContent, repButtons, noAddress } = useStyles();

    const previewLetter = () => {

    }
    
    const directToAddressForm = () => {
        history.push('/address')
    }

    return (
        <div className={root}>
            <Card className={card} >
                <CardContent className={cardContent} >
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
                    (reps.kind === "civicinfo#representativeInfoResponse" && offices.id )?
                            <div className={repButtons}>
                                <RepButton variant="outlined" value={reps.officials[0].urls[0]}> {reps.offices[0].name} <br /> {reps.officials[0].name} <br/> {offices.gov_email} </RepButton>
                                <RepButton variant="outlined" value={reps.officials[1].emails[0]} > {reps.offices[1].name} <br /> {reps.officials[1].name} </RepButton>
                                <RepButton variant="outlined" value={reps.officials[2].emails[0]} style={{ marginTop: '1em' }}> {reps.offices[2].name} <br /> {reps.officials[2].name}  </RepButton>
                                <RepButton variant="outlined" style={{ marginTop: '1em' }}> Department of Commerce  <br/> {offices.DoC}  </RepButton>
                                <RepButton variant="outlined" style={{ marginTop: '1em' }}> State Sustainability Office   </RepButton>
                                <RepButton variant="outlined" style={{ marginTop: '1em' }}> Public Utilities Commission  {offices.puc} </RepButton>
                            </div>
                        :
                        <> 
                      <Typography variant="h6" component="h6" align="center" className={noAddress} >
                                No Address Has been entered! <br/> Please go back and and enter your address <br/> to see your representatives
                    </Typography>
                        </>}
                </CardContent>
                <CardActions className={preview}>
                    <CustomButton onClick={previewLetter} variant="outlined"> Preview Letter </CustomButton>
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
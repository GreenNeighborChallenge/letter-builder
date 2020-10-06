import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CustomButton , RepButton} from './RepButtons'

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
    }
});

const testAddress = '901 22nd Avenue NE Minneapolis, MN 55418';
const testAddressTwo = '10110 Westview Dr, Houston, TX 77043';

const PickReps = ({ dispatch, reps }) => {
    const { root, card, preview, cardContent, repButtons } = useStyles();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_REPS', payload: testAddressTwo })
    }, []);

    const previewLetter = () => {
        
    }
    console.log(reps);

    return (
        <div className={root}>
            <Card className={card} >
                <CardContent className={cardContent} >
                    <Typography variant="h5" component="h2" gutterBottom align="center" >
                        Your Representatives
                    </Typography> 
                    <Typography variant="body2" color="textSecondary"  align="center" >
                    If you are sending an email, select recipients and add your contact information to the the letter. If you are creating a paper petition, you can skip to the bottom to generate a printable PDF.
                    </Typography>
                    { reps.kind === "civicinfo#representativeInfoResponse" && 
                    <> 
                    {/* <Typography variant="body2" component="p" color="textSecondary" align="center" >
                    (Hover for more information, click to add recipient. Yellow highlighted buttons are recommended for the policies you selected)
                    </Typography> */}
                    <div className={repButtons}> 
                
                    <RepButton variant="outlined" value={reps.officials[0].urls[0]}> {reps.offices[0].name} <br/> {reps.officials[0].name} </RepButton>
                    <RepButton variant="outlined" value={reps.officials[1].emails[0]} > {reps.offices[1].name} <br/> {reps.officials[1].name} </RepButton>
                    <RepButton variant="outlined" value={reps.officials[2].emails[0]} style={{marginTop: '1em'}}> {reps.offices[2].name} <br/> {reps.officials[2].name}  </RepButton>
                    <RepButton variant="outlined" style={{marginTop: '1em'}}> Department of Commerce   </RepButton>
                    <RepButton variant="outlined" style={{marginTop: '1em'}}> State Sustainability Office   </RepButton>
                    <RepButton variant="outlined" style={{marginTop: '1em'}}> Public Utilities Commission   </RepButton>
                    
                    </div>
                    </>
                    }
                </CardContent>
                <CardActions className={preview}>
                    <CustomButton onClick={previewLetter} variant="outlined" style={{marginBottom: '1em'}}> Preview Letter </CustomButton>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        reps: reduxState.reps,
        // address: reduxState.address,
    };
};

export default connect(mapStoreToProps)(PickReps)
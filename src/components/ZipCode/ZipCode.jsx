import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { FormHelperText, CardContent, Button, Typography, TextField } from '@material-ui/core'
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ZipCode.css'
import InfoPopover from './InfoPopover'
import StateGrade from '../StateGrade/StateGrade.jsx'
import ZipError from "./ZipError"

const useStyles = makeStyles({
    root: {
        maxWidth: "55%",
        maxHeight: "100%",
    },
    title: {
        fontSize: 48,
        fontFamily: 'leafy',
        color: 'black',
        marginBottom: 0
    },
    subtitle: {
        marginTop: '.25em',
    },
    pos: {
        marginBottom: 12,
        display: 'inline',
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
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    helpText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});



const ZipCode = ({ dispatch, store, history, location }) => {

    const classes = useStyles();
    const [zip, changeZip] = useState('');
    const [zipClicked, changeZipClick] = useState(false)
    const queryString = require('query-string');
    const parsedZipCode = queryString.parse(location.search);
    const [helperText, setHelperText] = useState('');
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        //if no zip provided in the url, does nothing
        //if zip provided in the url, uses that to dispatch to saga/geocoding api
        if (parsedZipCode.zipCode) {
            dispatch({ type: 'SEND_ZIP', payload: parsedZipCode.zipCode })
        }
    }, [zip]);

    /* if a zip is provided in the URL. renders a filled, disabled zip code input
    otherwise renders a blank one w/on change functionality*/
    const zipField = (props) => {
        if (parsedZipCode.zipCode) {
            return <div className='zipField'><TextField label="zip code" variant="outlined" disabled value={parsedZipCode.zipCode} /></div> 
        } else {
            return <div className='zipField'><TextField label="zip code" variant="outlined" onChange={(event) => changeZip(event.target.value)} />
                <br />
                <Button style={{marginTop: '1em'}} variant='contained' onClick={() => sendZip()}>Go</Button>  </div>
        }
    }

    function sendZip() {
        changeZipClick(true)
        if (zip.length !== 5) {
            changeZipClick(false)
            setErrorState(true);
            setHelperText('You must enter a valid zip code');
        } else  {
            setErrorState(false);
            dispatch({ type: 'SEND_ZIP', payload: zip })
            dispatch({type: 'DELETE_BODY'})
            setHelperText('')
            // console.log(zip)
        } 
    }

    const directToLetterBuilder = () => {
        history.push('/letterBuilder')
    }

    // http://localhost:3001/#/home?zipCode=55406
    return (
        <>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <Typography color="textSecondary" id='zipTitle' className={classes.title} gutterBottom>
                                BE THE CHANGE: State Policy Petition Maker
                        </Typography>
                        </div>

                        <Typography className={classes.pos} color="textSecondary" variant='body1'>
                            The petition maker will walk you through your state's existing energy policies, what they mean, who has influence over them,
                            and help you send a letter to them advocating for green policies.
                        </Typography> <span style={{ display: 'inline', float: 'right' }}><InfoPopover /></span>

                        <div className='zipBox' >
                            <Typography variant='h4'>Enter Your Zip Code</Typography>
                            <Typography variant="h5" component="h2" className={classes.subtitle}>Find your state's policies and write to your elected officials</Typography>
                            {zipField()}
                            <FormHelperText error={errorState} className={classes.helpText}> {helperText} </FormHelperText>    
                            {zipClicked === true && Object.keys(store.zip).length === 0 && <ZipError />}

                        </div>
                        {store.zip.long_name &&
                            <StateGrade directToLetterBuilder={directToLetterBuilder} />}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default connect(mapStoreToProps)(ZipCode)
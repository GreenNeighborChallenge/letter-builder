import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ZipCode.css'
import InfoPopover from './InfoPopover'
import StateGrade from '../StateGrade/StateGrade.jsx'


const useStyles = makeStyles({
    root: {
        maxWidth: "55%",
        maxHeight: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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
    }
});



const ZipCode = ({ dispatch, store, history, location }) => {

    const classes = useStyles();

    let [zip, changeZip] = useState('');
    let [zipToggle, toggleZip] = useState(false)

    const queryString = require('query-string');
    const parsedZipCode = queryString.parse(location.search);

    useEffect(() => {
        //if no zip provided in the url, does nothing
        if (parsedZipCode.zipCode === undefined) {
            return false
        //if zip code provided via query, dispatches to reducer/geocoding api    
        } else {
            console.log('hello from with zip params')
            dispatch({ type: 'SEND_ZIP', payload: parsedZipCode.zipCode })
        }
    }, []);

  

    /* if a zip is provided in the URL. renders a filled, disabled zip code input
    otherwise renders a blank one w/on change functionality*/
    const zipField = (props) => {
        if (parsedZipCode.zipCode) {
            return <TextField label="zip code" variant="outlined" disabled value={parsedZipCode.zipCode} />
        } else if (parsedZipCode.zipCode === undefined && zipToggle === true) {
            return <TextField label="zip code" variant="outlined" disabled value={zip} />
        } else if (parsedZipCode.zipCode === undefined) {
            return <div><TextField label="zip code" variant="outlined" onChange={(event) => changeZip(event.target.value)} />
            <Button variant='contained' onClick={() => sendZip()}>Go</Button>  </div>
        }
    }

    function sendZip() {
        dispatch({ type: 'SEND_ZIP', payload: zip })
        console.log(zip)
        toggleZip(true)
        console.log(zipToggle)
        
    }

    const directToLetterBuilder = () => {
        console.log('clicked');
        history.push('/letterBuilder')
    }
   

    // http://localhost:3001/#/home?zipCode=55406
    return (
        <>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <div style={{ textAlign: 'center' }}>
                            <Typography color="textSecondary" id='zipTitle' style={{ fontSize: 48, fontFamily: 'leafy', color: 'black' }} gutterBottom>
                                BE THE CHANGE: State Policy Petition Maker
                        </Typography></div>
                        <Typography className={classes.pos} color="textSecondary" variant='body1' style={{ display: 'inline' }}>
                            The petition maker will walk you through your state's existing energy policies, what they mean, who has influence over them,
                        and help you send a letter to them advocating for green policies. 
                        </Typography> <span style={{ display: 'inline', float: 'right' }}><InfoPopover /></span>
                        <div className='zipBox' >
                            <Typography variant='h4'>Enter Your Zip Code</Typography>
                            <Typography variant="h5" component="h2">to find your state's policies and write to your elected officials</Typography>

                            {zipField()}

                            <br />
                            
                        </div>
                        {store.zip.long_name &&
                            <StateGrade stateInfo={store.zip} directToLetterBuilder={directToLetterBuilder} />}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default connect(mapStoreToProps)(ZipCode)
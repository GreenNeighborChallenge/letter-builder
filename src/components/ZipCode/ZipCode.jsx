import React, { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import mapStoreToProps from '../../redux/mapStoreToProps';
// import "./Card.css"
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



const ZipCode = ({ dispatch, store }) => {
    // const dispatch = useDispatch();
    const classes = useStyles();

    let [zip, changeZip] = useState('');

    function sendZip() {
        dispatch({ type: 'SEND_ZIP', payload: zip })
        console.log(zip)
    }


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
                        and help you send a letter to them advocating for green policies. <span style={{ display: 'inline', float: 'right' }}><InfoPopover /></span>
                        </Typography>
                        <div className='zipBox' >
                            <Typography variant='h4'>Enter Your Zip Code</Typography>
                            <Typography variant="h5" component="h2">to find your state's policies and write to your elected officials</Typography>
                            <TextField label="zip code" variant="outlined" onChange={(event) => changeZip(event.target.value)} />
                            <br />
                            <Button variant='contained' onClick={sendZip}>Go</Button>
                        </div>
                        {store.zip.long_name &&
                            <StateGrade stateInfo={store.zip} />}
                    </CardContent>
                </Card>
            </div>

        </>
    );
}




export default connect(mapStoreToProps)(ZipCode)
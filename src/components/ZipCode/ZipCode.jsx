import React, { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
// import "./Card.css"
import './ZipCode.css'
import InfoPopover from './InfoPopover'

const useStyles = makeStyles({
    root: {
        maxWidth: "50%",
        maxHeight: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    }
});



const ZipCode = ({dispatch}) => {
    // const dispatch = useDispatch();
    const classes = useStyles();

    let [zip, changeZip] = useState('');

    function sendZip(){
        dispatch({type: 'POST_ZIP', payload: zip})
        console.log(zip)
    }

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography color="textSecondary" style={{fontSize: 48, fontFamily:'leafy', color:'black'}} gutterBottom>
                        BE THE CHANGE: State Policy Petition Maker
        </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        The petition maker will walk you through your state's existing energy policies, what they mean, who has influence over them, 
                        and help you send a letter to them advocating for green policies. <InfoPopover />
        </Typography> 
                    <div className='zipBox' >
                        <Typography variant='h4'>Enter Your Zip Code</Typography>
                        <Typography variant="h5" component="h2">to find your state's policies and write to your elected officials</Typography>
                        <TextField label="zip code" variant="outlined" onChange={(event) => changeZip(event.target.value)}/>
                        <br />
                        <Button variant='contained' onClick={sendZip}>Go</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default connect()(ZipCode)
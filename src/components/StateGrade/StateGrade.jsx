import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import "./Card.css"
import { connect } from 'react-redux'
import './StateGrade.css'

const useStyles = makeStyles({
    root: {
        maxWidth: "50%",
        maxHeight: "100%",
    },
    title: {
        fontSize: 16,
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

const StateGrade = (props) => {
    const classes = useStyles();


    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant='h4' gutterBottom>Your State: Add Dropdown</Typography>
                   <div className='outline'>
                    <Typography className={classes.title}>
                      Your state's energy and climate policy, graded:
        </Typography></div>
            <div className='outline' id='grade'>
                <Typography variant='h1'>B</Typography>
            </div>
            <Typography className={classes.title}>
                      Your state's existing energy and climate policies:
        </Typography>
            <ul>
                <li>Climate Action Plan: <span>Get from DB</span></li>
                <li>Renewable Portfolio Standard (RPS): <span>Get from DB</span></li>
                <li>Green Pricing Mandate: <span>Get from DB</span></li>
                <li>Property Assessed Clean Energy (PACE): <span>Get from DB</span></li>
            </ul>
            <Typography className={classes.title}>
                      Energy Efficiency Standard: <span>Get from DB</span>
        </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography className={classes.pos} color="textSecondary"></Typography>
                    <Typography variant="body2" component="p"></Typography>
                </CardContent>
          
                    <Button style={{display: 'inline', float: 'left', margin: 5}}>Previous</Button>
                    <Button style={{display: 'inline',float: 'right', margin: 5}}>Create Your Letter!</Button>
         
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(StateGrade)

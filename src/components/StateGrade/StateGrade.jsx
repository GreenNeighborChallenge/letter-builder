import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import './StateGrade.css'


class StateGrade extends Component{

  

    componentDidMount() {
        this.props.dispatch({type: 'GET_STATE_POLICIES', payload: this.props.stateInfo})
    }


    render() {
    return (
        <div>
            <div id='stateTitle'><Typography variant='h4' gutterBottom>Your State: Add Dropdown</Typography></div>
                   <div className='outline'>
                    <Typography>
                      Your state's energy and climate policy, graded:
        </Typography></div>
            <div className='outline' id='grade'>
                <Typography variant='h1'>B</Typography>
            </div>
            <Typography>
                      Your state's existing energy and climate policies:
        </Typography>
            <ul>
                <li>Climate Action Plan: <span>Get from DB</span></li>
                <li>Renewable Portfolio Standard (RPS): <span>Get from DB</span></li>
                <li>Green Pricing Mandate: <span>Get from DB</span></li>
                <li>Property Assessed Clean Energy (PACE): <span>Get from DB</span></li>
            </ul>
            <Typography>
                      Energy Efficiency Standard: <span>Get from DB</span>
        </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography color="textSecondary"></Typography>
                    <Typography variant="body2" component="p"></Typography>

          
                    <Button style={{display: 'inline', float: 'left', margin: 5}}>Previous</Button>
                    <Button style={{display: 'inline',float: 'right', margin: 5}}>Create Your Letter!</Button>
         
 
        </div>
    );
    }
}

export default connect(mapStoreToProps)(StateGrade)

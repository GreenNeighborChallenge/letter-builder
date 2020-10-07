import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import GradeExplainer from './GradeExplainer.jsx'
import './StateGrade.css'
import PolicyExplainer from './PolicyExplainer.jsx';


class StateGrade extends Component{

  

    componentDidMount() {
        this.props.dispatch({type: 'GET_STATE_POLICIES', payload: this.props.stateInfo})
    }


    render() {
    return (
        <div style={{backgroundColor: 'white'}}>
            {this.props.store.statePolicies &&
            <>
            <div id='stateTitle'><Typography variant='h4' gutterBottom>Your State: Add Dropdown</Typography></div>
                   <div className='outline'>
                    <Typography>
                      Your state's energy and climate policy, graded:
        </Typography>
        </div>
            <div className='outline' id='grade'>
            <Typography variant='h1'>{this.props.store.statePolicies.policy_grade}</Typography>
            <GradeExplainer />
            </div>
            <Typography>
                      Your state's existing energy and climate policies:
        </Typography>
            <ul>
            <li>Climate Action Plan <PolicyExplainer type={'CAP'}/>: {this.props.store.statePolicies.climate_plan}</li>
            <li>Renewable Portfolio Standard (RPS) <PolicyExplainer type={'RPS'}/>: <span>{this.props.store.statePolicies.portfolio_standard}</span></li>
            <li>Green Pricing Mandate<PolicyExplainer type={'GPM'}>: </PolicyExplainer><span>{this.props.store.statePolicies.green_pricing}</span></li>
            <li>Property Assessed Clean Energy (PACE) <PolicyExplainer type={'PACE'}></PolicyExplainer>: <span>{this.props.store.statePolicies.pace}</span></li>
            </ul>
            <Typography>
            Energy Efficiency Standard <PolicyExplainer type={'EES'}></PolicyExplainer>: <span>{this.props.store.statePolicies.energy_standard}</span>
        </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography color="textSecondary"></Typography>
                    <Typography variant="body2" component="p"></Typography>

          
                    <Button style={{display: 'inline', float: 'left', margin: 5}}>Previous</Button>
                    <Button style={{display: 'inline',float: 'right', margin: 5}}>Create Your Letter!</Button>
                </>
            }
        </div>
    );
    }
}

export default connect(mapStoreToProps)(StateGrade)

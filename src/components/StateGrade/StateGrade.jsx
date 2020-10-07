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
        this.props.dispatch({type: 'FETCH_POLICIES'})
    }

    //searches by policy ID for policy name
    getById = (arr, value) => {
        for (let i=0; i < arr.length; i++) {
          if (arr[i].id === value) {
                return arr[i].policy
              }
          }
        }


    render() {
    return (
        <div style={{backgroundColor: 'white'}}>
            
            {this.props.store.statePolicies && this.props.store.policyLanguage &&
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
            <li>{this.getById(this.props.store.policyLanguage, 1)}
            <PolicyExplainer type={'CAP'}/>: {this.props.store.statePolicies.climate_plan}</li>
            <li>{this.getById(this.props.store.policyLanguage, 2)} 
            <PolicyExplainer type={'RPS'}/>: <span>{this.props.store.statePolicies.portfolio_standard}</span></li>
            <li>{this.getById(this.props.store.policyLanguage, 5)}
            <PolicyExplainer type={'GPM'} />:<span>{this.props.store.statePolicies.green_pricing}</span></li>
            <li>{this.getById(this.props.store.policyLanguage, 3)}
            <PolicyExplainer type={'PACE'} />: <span>{this.props.store.statePolicies.pace}</span></li>
        
            <li>{this.getById(this.props.store.policyLanguage, 9)} 
            <PolicyExplainer type={'EES'} />: <span>{this.props.store.statePolicies.energy_standard}</span></li>
        
            <li>{this.getById(this.props.store.policyLanguage, 4)}:</li>
            <li>{this.getById(this.props.store.policyLanguage, 6)}:</li>
            <li>{this.getById(this.props.store.policyLanguage, 7)}:</li>
            <li>{this.getById(this.props.store.policyLanguage, 8)}:</li>
            <li>{this.getById(this.props.store.policyLanguage, 10)}:</li>
        </ul>
          
                    <Button style={{display: 'inline', float: 'left', margin: 5}}>Previous</Button>
                    <Button style={{display: 'inline',float: 'right', margin: 5}}>Create Your Letter!</Button>
                </>
            }
        </div>
    );
    }
}

export default connect(mapStoreToProps)(StateGrade)

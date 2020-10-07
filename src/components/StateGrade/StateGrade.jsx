import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import GradeExplainer from './GradeExplainer.jsx'
import './StateGrade.css'
import PolicyExplainer from './PolicyExplainer.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class StateGrade extends Component {



    componentDidMount() {
        this.props.dispatch({ type: 'GET_STATE_POLICIES', payload: this.props.stateInfo })
        this.props.dispatch({ type: 'FETCH_POLICIES' })
    }

    //searches by policy ID for policy name
    getById = (arr, value) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === value) {
                return arr[i].policy
            }
        }
    }


    render() {
        return (
            <div style={{ backgroundColor: 'white' }}>

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
                        <List>
                            <ListItem>{this.getById(this.props.store.policyLanguage, 1)}:<ListItemIcon><PolicyExplainer type={'CAP'} /></ListItemIcon>{this.props.store.statePolicies.climate_plan ? this.props.store.statePolicies.climate_plan : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 2)}:<ListItemIcon><PolicyExplainer type={'RPS'} /></ListItemIcon> {this.props.store.statePolicies.portfolio_standard ? this.props.store.statePolicies.portfolio_standard : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 5)}:<ListItemIcon><PolicyExplainer type={'GPM'} /></ListItemIcon>{this.props.store.statePolicies.green_pricing ? this.props.store.statePolicies.green_pricing : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 3)}:<ListItemIcon><PolicyExplainer type={'PACE'} /></ListItemIcon>{this.props.store.statePolicies.pace ? this.props.store.statePolicies.pace : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 9)}:<ListItemIcon><PolicyExplainer type={'EES'} /></ListItemIcon>{this.props.store.statePolicies.energy_standard ? this.props.store.statePolicies.energy_standard : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 4)}:<ListItemIcon><PolicyExplainer type={'CVP'} /></ListItemIcon>{this.props.store.statePolicies.clean_vehicle ? this.props.store.statePolicies.clean_vehicle : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 7)}:<ListItemIcon><PolicyExplainer type={'CS'} /></ListItemIcon>{this.props.store.statePolicies.community_solar ? this.props.store.statePolicies.community_solar : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 6)}:<ListItemIcon><PolicyExplainer type={'HSR'} /></ListItemIcon>{this.props.store.statePolicies.home_solar ? this.props.store.statePolicies.home_solar : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 8)}:<ListItemIcon><PolicyExplainer type={'CCA'} /></ListItemIcon>{this.props.store.statePolicies.community_choice ? this.props.store.statePolicies.community_choice : <p>none</p>}</ListItem>

                            <ListItem>{this.getById(this.props.store.policyLanguage, 10)}:<ListItemIcon><PolicyExplainer type={'CUB'} /></ListItemIcon>{this.props.store.statePolicies.utility_board ? this.props.store.statePolicies.utility_board : <p>none</p>}</ListItem>

                        </List>

                        <Button style={{ display: 'inline', float: 'left', margin: 5 }}>Previous</Button>
                        <Button style={{ display: 'inline', float: 'right', margin: 5 }}>Create Your Letter!</Button>
                    </>
                }
            </div>
        );
    }
}

export default connect(mapStoreToProps)(StateGrade)

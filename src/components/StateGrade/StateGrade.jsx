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
import StateSelect from './StateSelect';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


class StateGrade extends Component {

    state = {
        showMore: false
    }

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
            <div style={{backgroundColor: 'white'}}>
                {this.props.store.statePolicies &&
                    <>
                        <div id='stateTitle' >
                            <Typography variant='h4' gutterBottom>Your State: <StateSelect default={this.props.store.zip.short_name}  /> </Typography></div>
                        <div className='outline'>
                            <Typography>
                                Your state's energy and climate policy, graded:
                    </Typography>
                        </div>
                        <div className='outline' id='grade'>
                            <Typography variant='h1'>{this.props.store.statePolicies.policy_grade}</Typography>
                            <GradeExplainer />
                        </div>
                        <Typography variant='h5'>
                            Your state's existing energy and climate policies:
                        </Typography>
                        <List>
                            <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 1)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                {/* <PolicyExplainer type={'CAP'} /> */}
                                <Tooltip title={<><p>Climate Action Plans are state- city- or region-wide plans to reduce greenhouse gas emissions and increase resilience. They usually include emissions reduction targets and steps to reach those goals through energy efficiency, land use, green energy, and transportation.</p><a href="https://www.w3schools.com">Visit W3Schools.com!</a></>}>
                                    <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.climate_plan ? this.props.store.statePolicies.climate_plan : <p>none</p>}</ListItem>


                            <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 2)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                <PolicyExplainer type={'RPS'} /></ListItemIcon> {this.props.store.statePolicies.portfolio_standard ? this.props.store.statePolicies.portfolio_standard : <p>none</p>}</ListItem>
                            <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 5)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                <PolicyExplainer type={'GPM'} /></ListItemIcon>{this.props.store.statePolicies.green_pricing ? this.props.store.statePolicies.green_pricing : <p>none</p>}</ListItem>
                            <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 3)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                <PolicyExplainer type={'PACE'} /></ListItemIcon>{this.props.store.statePolicies.pace ? this.props.store.statePolicies.pace : <p>none</p>}</ListItem>
                            <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 9)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                <PolicyExplainer type={'EES'} /></ListItemIcon>{this.props.store.statePolicies.energy_standard ? this.props.store.statePolicies.energy_standard : <p>none</p>}</ListItem>

                            {/* these items hidden until see more button is clicked */}
                            {this.state.showMore &&
                                <>
                                    <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 4)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                        <PolicyExplainer type={'CVP'} /></ListItemIcon>{this.props.store.statePolicies.clean_vehicle ? this.props.store.statePolicies.clean_vehicle : <p>none</p>}</ListItem>
                                    <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 7)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                        <PolicyExplainer type={'CS'} /></ListItemIcon>{this.props.store.statePolicies.community_solar ? this.props.store.statePolicies.community_solar : <p>none</p>}</ListItem>
                                    <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 6)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                        <PolicyExplainer type={'HSR'} /></ListItemIcon>{this.props.store.statePolicies.home_solar ? this.props.store.statePolicies.home_solar : <p>none</p>}</ListItem>
                                    <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 8)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                        <PolicyExplainer type={'CCA'} /></ListItemIcon>{this.props.store.statePolicies.community_choice ? this.props.store.statePolicies.community_choice : <p>none</p>}</ListItem>
                                    <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 10)}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                        <PolicyExplainer type={'CUB'} /></ListItemIcon>{this.props.store.statePolicies.utility_board ? this.props.store.statePolicies.utility_board : <p>none</p>}</ListItem>
                                </>}
                            <div>
                                {this.state.showMore ?  <Button style={{ float: 'left', display: 'inline' }} onClick={() => this.setState({ showMore: false })}>See Less</Button>
                                : <Button style={{ float: 'left', display: 'inline' }} onClick={() => this.setState({ showMore: true })}>See More</Button> }
                                
                                </div>
                            <br />
                        </List>


                        <Button style={{ display: 'inline', float: 'left', margin: 5 }}>Previous</Button>
                        <Button onClick={this.props.directToLetterBuilder} style={{ display: 'inline', float: 'right', margin: 5 }}>Create Your Letter!</Button>
                    </>
                }
            </div>
        );

    }
}

export default connect(mapStoreToProps)(StateGrade)

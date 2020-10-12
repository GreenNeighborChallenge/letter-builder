import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import GradeExplainer from './GradeExplainer.jsx'
import './StateGrade.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StateSelect from './StateSelect';
import PolicyExplainer from '../PolicyExplainer/PolicyExplainer.jsx';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class StateGrade extends Component {

    state = {
        showMore: false,
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_STATE_POLICIES', payload: this.props.stateInfo })
        this.props.dispatch({ type: 'FETCH_POLICIES' })
    }

    //searches by policy ID and key, returns policy info
    getById = (arr, value, key) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].policy_id === value && key === 'short') {
                return arr[i].short_info
            }
            else if (arr[i].policy_id === value && key === 'long') {
                return arr[i].long_info
            }
            else if (arr[i].policy_id === value && key === 'name') {
                return arr[i].name
            }
        }
    }

    render() {
        return (
            <div >
                {this.props.store.statePolicies && this.props.store.policyLanguage && this.props.store.zip.short_name &&
                    <>
                        <div id='stateTitle'>
                            <Typography variant='h4' gutterBottom>Your State: <StateSelect default={this.props.store.zip.short_name} /> </Typography></div>
                        <div className='outline'>
                            <Typography>Your state's energy and climate policy, graded:</Typography>
                        </div>
                        <div className='outline' id='grade'>
                            <Typography variant='h1'>{this.props.store.statePolicies[0] ? this.props.store.statePolicies[0].state_grade : <></>}</Typography>
                            <GradeExplainer />
                        </div>
                        <Typography variant='h5'>Your state's existing energy and climate policies: </Typography>

                        <List>
                            {this.props.store.statePolicies.map((policy) => {
                                if (policy.policy_id >= 1 && policy.policy_id <= 5)
                                    return <ListItem key={policy.policy_id} style={{ paddingTop: 0, paddingBottom: 0 }}>
                                        <div>
                                            <PolicyExplainer policy_name={policy.name} text={this.getById(this.props.store.policyLanguage, policy.policy_id, 'long')} title={this.getById(this.props.store.policyLanguage, policy.policy_id, 'name')}
                                                toolTitle={this.getById(this.props.store.policyLanguage, policy.policy_id, 'short')} />

                                            {policy.policy_data ?
                                                <p style={{ display: 'inline' }}>{policy.policy_data}</p>
                                                : <p style={{ display: 'inline' }}> none </p>}
                                        </div>
                                    </ListItem>
                            })}


                            {/* these items hidden until see more button is clicked */}
                            {this.state.showMore &&
                                <div id='overflowDiv'>

                                    {this.props.store.statePolicies.map((policy) => {
                                        if (policy.policy_id >= 6)
                                            return <ListItem key={policy.policy_id} style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                <div>
                                                    <PolicyExplainer policy_name={policy.name} text={this.getById(this.props.store.policyLanguage, policy.policy_id, 'long')} title={this.getById(this.props.store.policyLanguage, policy.policy_id, 'name')}
                                                        toolTitle={this.getById(this.props.store.policyLanguage, policy.policy_id, 'short')} />

                                                    {policy.policy_data ?
                                                        <p style={{ display: 'inline' }}>{policy.policy_data}</p>
                                                        : <p style={{ display: 'inline' }}> none </p>}
                                                </div>
                                            </ListItem>
                                    })}

                                </div>}

                            <div>
                                {this.state.showMore ? <Button style={{ float: 'left', display: 'inline' }} onClick={() => this.setState({ showMore: false })}>See Fewer</Button>
                                    : <Button style={{ float: 'left', display: 'inline' }} onClick={() => this.setState({ showMore: true })}>See More</Button>}

                            </div>
                            <br />
                        </List>
                                    <IconButton onClick={this.props.directToLetterBuilder} style={{ display: 'inline', float: 'right', margin: 5, color:'black' }}><ArrowForwardIcon /></IconButton>
                     
                    </>
                }
            </div>
        );

    }
}

export default connect(mapStoreToProps)(StateGrade)

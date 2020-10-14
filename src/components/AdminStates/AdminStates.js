import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminStateInfo from './AdminStateInfo';
import AdminPolicyInfo from './AdminPolicyInfo';
import AdminSseo from './AdminSseo';

class AdminStates extends Component {
    state = {
        heading: 'states Component',
        selectedState: ''
    };

    //gets states on mount to display in dropdown box
    componentDidMount() {
        this.getStates();
    }

    //actually gets the states, runs on mount
    getStates = () => {
        this.props.dispatch({ type: 'GET_STATES' })
    }

    getStatesInfo = (selectedStateId) => {
        this.props.dispatch({
            type: 'FETCH_STATE_INFO',
            payload: selectedStateId
        });
    };

    getSSEO = (selectedState) => {
        this.props.dispatch({
            type: 'FETCH_SSEO_INFO',
            payload: selectedState
        });
    };

    resetDropdown = () => {
        this.setState({ ...this.state, selectedState: "" });
    }

    render() {
        return (
            <>

                <select value={this.state.selectedState} onChange={(event) => {
                    this.setState({ ...this.state, selectedState: event.target.value });
                    this.getStatesInfo(event.target.value);
                    this.getSSEO(event.target.value);
                }}>
                    <option value="">State</option>
                    {this.props.store.states &&
                        this.props.store.states.map((state) => {
                            return (<option key={state.id} value={state.id}>{state.state_abv}</option>)
                        })}
                </select>

                {this.props.store.stateInfo[0] &&
                    <>
                        <AdminPolicyInfo stateInfo={this.props.store.stateInfo[0]}/>
                        <AdminStateInfo
                            stateInfo={this.props.store.stateInfo[0]}
                            resetDropdown={this.resetDropdown}
                        />
                        <AdminSseo stateInfo={this.props.store.stateInfo[0]}/>
                    </>}

            </>
        );
    }
}

export default connect(mapStoreToProps)(AdminStates);

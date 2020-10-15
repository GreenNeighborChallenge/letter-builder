import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//delete alert
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
//bring in other components
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

    //brings up a message before deleting
    deleteConfirm = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this state? Once it is deleted it cannot be recovered.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('State Deleted.');
                        this.deleteState();
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Nothing Deleted.')
                }
            ]
        });
    };

    deleteState = () => {
        this.props.dispatch({
            type: 'DELETE_STATE',
            payload: this.state.selectedState
        });

        this.resetDropdown();
    }

    render() {
        return (
            <div>

                <select className="inputs" value={this.state.selectedState} onChange={(event) => {
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
                        <AdminPolicyInfo stateInfo={this.props.store.stateInfo[0]} />
                        <AdminStateInfo
                            stateInfo={this.props.store.stateInfo[0]}
                            resetDropdown={this.resetDropdown}
                        />
                        <AdminSseo stateInfo={this.props.store.stateInfo[0]} />
                        <button className="prettyBtn" onClick={() => this.deleteConfirm(this.state.selectedState)}>Delete State</button>
                    </>}
                </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStates);

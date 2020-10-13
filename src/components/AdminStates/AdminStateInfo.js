import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import './AdminState.css';

class AdminStateInfo extends Component {
    state = {
        SSEOinput: false,
        editPolicies: false,
        editContact: false,
        newSSEOName: '',
        newSSEOEmail: '',
    };

    addSSEO = () => {
        this.setState({ ...this.state, SSEOinput: true })
    }

    saveSSEO = (selectedId) => {
        this.setState({ ...this.state, SSEOinput: false })

        this.props.dispatch({ type: 'NEW_SSEO', payload: { state_info: this.state, stateId: selectedId } })
    }

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
            payload: this.props.stateInfo.id
        });

        this.props.resetDropdown();
    }

    render() {
        // console.log(this.props.store.stateInfo.climate_plan)
        const stateInfo = this.props.stateInfo
        return (
            <div className="stateBody">
                    
                <div className="statePolicies">
                    <h1>{stateInfo.state} State Information</h1>
                    <button>Edit</button>

                    <p>State Grade: {stateInfo.state_grade}</p>

                    <p>Resident Count: {stateInfo.resident_count}</p>

                    <p>Resident MWH: {stateInfo.resident_mwh}</p>

                    <p>PUC: {stateInfo.puc}</p>

                    <p>DoC Email: {stateInfo.doc}</p>

                    <p>Governor Email: {stateInfo.gov_email}</p>

                </div>
                
                <button onClick={() => this.deleteConfirm(stateInfo.state_id)}>Delete State Info</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStateInfo);
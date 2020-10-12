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
                    <h1>{stateInfo.state} Policy Information</h1>
                    <button>Edit</button>

                    {stateInfo.AdminStateInfo.map((stateData) => {
                        return (
                            <div>
                                <p>{stateData.policy_name}: {stateData.policy_data}</p>
                            </div>
                        )
                    })}

                </div>
                <div className="statePolicies">
                    <h1>{stateInfo.state} Contact Information</h1>
                    <button>Edit</button>

                    <p>PUC: {stateInfo.puc}</p>

                    <p>DoC Email: {stateInfo.doc}</p>

                </div>
                <div className="statePolicies">
                    <h1>{stateInfo.state} SSEO's</h1>
                    {this.state.SSEOinput ?
                        <p>Enter new info below:</p> :
                        <button onClick={() => this.addSSEO()}>Add Another SSEO</button>
                    }
                    {this.props.store.sseoInfo[0] &&
                        this.props.store.sseoInfo.map((sseo) => {
                            return (
                                <div className="stateSSEOitem">
                                    <button>Edit</button>
                                    <p>SSEO Name: {sseo.SSEO_name}</p>

                                    <p>SSEO Email: {sseo.SSEO_email}</p>
                                </div>
                            )
                        })}
                    {this.state.SSEOinput &&
                        <div>
                            <input placeholder="SSEO Name"
                                onChange={(event) => this.setState({ ...this.state, newSSEOName: event.target.value })}></input>
                            <input placeholder="SSEO Email"
                                onChange={(event) => this.setState({ ...this.state, newSSEOEmail: event.target.value })}></input>
                            <div>
                                <button onClick={() => this.saveSSEO(stateInfo.id)}>Save</button>
                                <button onClick={() => this.setState({ ...this.state, SSEOinput: false })}>Cancel</button>
                            </div>
                        </div>
                    }
                </div>
                <button onClick={() => this.deleteConfirm(stateInfo.state_id)}>Delete State Info</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStateInfo);
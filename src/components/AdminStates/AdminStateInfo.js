import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import './AdminState.css';

class AdminStateInfo extends Component {
    state = {
        heading: 'state infoooo Component',
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
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                  alert('Click Yes');
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
        console.log(this.props.stateInfo.state_id);
      }

    render() {
        // console.log(this.props.store.stateInfo.climate_plan)
        const stateInfo = this.props.stateInfo
        return (
            <div className="stateBody">
                <div className="statePolicies">
                    <h1>{stateInfo.state} Policy Information</h1>
                    <button>Edit</button>

                    <p>Policy Grade: {stateInfo.policy_grade}</p>

                    <p>Climate Action Plan: {stateInfo.climate_plan}</p>

                    <p>Renewable Portfolio Standard: {stateInfo.portfolio_standard}</p>

                    <p>PACE: {stateInfo.pace}</p>

                    <p>Clean Vehicle Policy: {stateInfo.clean_vehicle}</p>

                    <p>Green Pricing Mandate: {stateInfo.green_pricing}</p>

                    <p>Home Solar Rights: {stateInfo.home_solar}</p>

                    <p>Community Solar: {stateInfo.community_solar}</p>

                    <p>Citizens Utility Board: {stateInfo.utility_board}</p>

                    <p>Community Choice Aggregation: {stateInfo.community_choice}</p>

                    <p>Energy Efficiency Standard: {stateInfo.energy_standard}</p>

                </div>
                <div className="statePolicies">
                    <h1>{stateInfo.state} Contact Information</h1>
                    <button>Edit</button>

                    <p>PUC: {stateInfo.puc}</p>

                    <p>DoC Email: {stateInfo.DoC}</p>

                </div>
                <div className="statePolicies">
                    <h1>{stateInfo.state} SSEO's</h1>
                    {this.state.SSEOinput ?
                        <div>
                            <button onClick={() => this.saveSSEO(stateInfo.state_id)}>Save</button>
                            <button onClick={() => this.setState({...this.state, SSEOinput: false})}>Cancel</button>
                        </div> :
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
                        </div>
                    }
                </div>
                <button onClick={() => this.deleteConfirm(stateInfo.state_id)}>Delete State Info</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStateInfo);
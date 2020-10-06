import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './AdminState.css';

class AdminStateInfo extends Component {
    state = {
        heading: 'state infoooo Component',
    };



    render() {
        // console.log(this.props.store.stateInfo.climate_plan)
        const stateInfo = this.props.stateInfo
        return (
            <div>
                <div className="statePolicies">
                    <h1>State Policy Information</h1>
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
                <div className="stateContacts">
                    <h1>State Contact Information</h1>
                    <p>PUC: {stateInfo.puc}</p>

                    <p>DoC Email: {stateInfo.DoC}</p>

                </div>
                <div className="stateSSEO">
                    <h1>State SSEO's</h1>
                    <button>Add Another SSEO</button>
                    {this.props.store.sseoInfo[0] &&
                        this.props.store.sseoInfo.map((sseo) => {
                            return (
                                <div className="stateSSEOitem">
                                    <p>SSEO Name: {sseo.SSEO_name}</p>

                                    <p>SSEO Email: {sseo.SSEO_email}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStateInfo);
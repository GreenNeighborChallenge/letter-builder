import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminStateInfo extends Component {
    state = {
        heading: 'state infoooo Component',
    };

    stateInfo = this.props.stateInfo

    render() {
        // console.log(this.props.store.stateInfo.climate_plan)
        return (
            <div>
                <div className="statePolicies">
                    <h1>State Policy Information</h1>
                    <p>Renewable Portfolio Standard: {this.stateInfo.portfolio_standard}</p>

                    <p>PACE: {this.stateInfo.pace}</p>

                    <p>Clean Vehicle Policy: {this.stateInfo.clean_vehicle}</p>

                    <p>Green Pricing Mandate: {this.stateInfo.green_pricing}</p>

                    <p>Home Solar Rights: {this.stateInfo.home_solar}</p>

                    <p>Community Solar: {this.stateInfo.community_solar}</p>

                    <p>Citizens Utility Board: {this.stateInfo.utility_board}</p>

                    <p>Community Choice Aggregation: {this.stateInfo.community_choice}</p>

                    <p>Energy Efficiency Standard: {this.stateInfo.energy_standard}</p>

                </div>
                <div className="stateContacts">
                    <h1>State Contact Information</h1>
                    <p>PUC: {this.stateInfo.puc}</p>

                    <p>DoC Email: {this.stateInfo.DoC}</p>

                    <p>SSEO Name: </p>

                    <p>SSEO Email: </p>

                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStateInfo);
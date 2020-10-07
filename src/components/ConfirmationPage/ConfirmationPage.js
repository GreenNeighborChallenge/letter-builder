import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

class ConfirmationPage extends Component {
    state = {
        heading: 'confirmation Component',
    };

    render() {
        return (
            <div className="confirmationBody">
                <div className="confirmation">
                    <h2>{this.state.heading}</h2>
                    <h1>Success!</h1>
                    <h4>
                        Thank you for taking the time to contact your state officials.
                        You will recieve an email copy of your letter for your records.
                    </h4>
                    <Link className="confirmationBtn">Share</Link>
                    <Link className="confirmationBtn leafy">Go Back</Link>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ConfirmationPage);
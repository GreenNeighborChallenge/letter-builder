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
                    <h1 style={{ fontSize: 48, fontFamily: 'leafy', color: 'black' }}>Success!</h1>
                    <h4>
                        Thank you for taking the time to contact your state officials.
                        You will recieve an email copy of your letter for your records.
                    </h4>
                    <div className="confirmBtns">
                        <div className="confirmationBtnShare">
                            <h3 style={{ fontSize: 25, fontFamily: 'leafy', color: 'black' }}>Share</h3>
                            <h5>Challenge your friends!</h5>
                        </div>
                        <a className="unstyled" href="https://www.greenneighborchallenge.com/">
                            <div className="confirmationBtnHome">
                                <h3 style={{ fontSize: 25, fontFamily: 'leafy', color: 'black' }}>Green Neighbor Home</h3>
                                <h5>Find more ways to get involved!</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ConfirmationPage);
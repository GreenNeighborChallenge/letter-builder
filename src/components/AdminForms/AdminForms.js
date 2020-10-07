import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStoreToProps';

import PolicyInfoForm from './PolicyInfoForm.js';
import StateContactForm from './StateContactForm.js';

class AdminForms extends Component {

    state = {
        selectedState: ''
    };

    stateNameChange = (event) => {
        this.setState({
            selectedState: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('clicked submit')
    }

    render() {
        return (
            <div>
                State:
                <input onChange={this.stateNameChange}></input>
                <PolicyInfoForm />
                <StateContactForm selectedState={this.state.selectedState} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminForms);
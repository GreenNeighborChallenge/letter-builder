import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStoreToProps';

import PolicyInfoForm from './PolicyInfoForm.js';
import StateContactForm from './StateContactForm.js';

class AdminForms extends Component {

    state = {
        state_name: '',
    };

    //this will get passed down so that both
    //components can use the selected state
    stateNameChange = (event) => {
        this.setState({
            state_name: event.target.value
        })
    }

    render() {
        
        return (
            <div>
                <StateContactForm stateNameChange={(event) => this.stateNameChange(event)} state_name ={this.state.state_name}/>
                <PolicyInfoForm state_name={this.state.state_name}/>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminForms);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStoreToProps';

import PolicyInfoForm from './PolicyInfoForm.js';
import StateContactForm from './StateContactForm.js';

class AdminForms extends Component {

    state = {
        selectedState: '',
    };

    //this will get passed down so that both
    //components can use the selected state
    stateNameChange = (event) => {
        this.setState({
            selectedState: event.target.value
        })
    }

    render() {
        
        return (
            <div>
                <StateContactForm stateNameChange={(event) => this.stateNameChange(event)} selectedState ={this.state.selectedState}/>
                <PolicyInfoForm selectedState={this.state.selectedState}/>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminForms);
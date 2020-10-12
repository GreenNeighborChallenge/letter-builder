import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapStoreToProps from '../../redux/mapStoreToProps';

import PolicyInfoForm from './PolicyInfoForm.js';
import StateContactForm from './StateContactForm.js';

class AdminForms extends Component {

    state = {
        state_name: '',
        state_abv: '',
        stateCreated: false
    };

    //this will get passed down so that both
    //components can use the selected state
    stateNameChange = (event) => {
        this.setState({
            state_name: event.target.value
        })
    }

    handleStateChange = (event) => {
        this.setState({
            state_name: event.target.value
        })

    }

    handleStateAbvChange = (event) => {
        this.setState({
            state_abv: event.target.value
        })
    }

    handleSave = () => {
        this.setState({
            createdState: !this.state.createdState
        })
        this.props.dispatch({ type: 'SET_NEW_STATE', payload: this.state })
    }

    render() {

        return (
            <div>
                <h1>New State</h1>
                State:
                <input onChange={this.handleStateChange}></input>
                <br />
                State Abbreviation:
                <input onChange={this.handleStateAbvChange} placeholder="i.e. AK"></input>
                <br />
                <button onClick={this.handleSave}>save</button>
                {this.state.createdState &&
                    <>
                        <StateContactForm state_name={this.state.state_name} />
                        <PolicyInfoForm state_name={this.state.state_name} />
                    </>
                }
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminForms);
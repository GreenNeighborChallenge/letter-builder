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
        //will allow the rest of the form to be rendered
        this.setState({
            createdState: !this.state.createdState
        })
        //goes to Admin Form Saga
        this.props.dispatch({ type: 'SET_NEW_STATE', payload: this.state })
    }

    render() {

        return (
            <div className="fullAdminForm">
                <h1>New State</h1>
                State:
                <input className="inputs" onChange={this.handleStateChange}></input>
                <br />
                State Abbreviation:
                <input className="inputs" onChange={this.handleStateAbvChange} placeholder="i.e. AK"></input>
                <br />
                <button className="prettyBtn" onClick={this.handleSave}>SAVE</button>
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
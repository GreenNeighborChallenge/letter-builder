import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class StateContactForm extends Component {

    state = {
        stateId: 0,
        state_grade: '',
        gov_email: '',
        resident_count: 0,
        resident_mwh: 0,
        puc: '',
        doc: '',
        sseo: [{
            id: 0,
            name: '',
            email: ''
        }]
    }

    
    //this will add a blank object to state, which will
    //allow another input to be rendered
    addSseo = () => {
        console.log(this.state.sseo)
        this.setState({
            ...this.state,
            sseo: [
                ...this.state.sseo,
                //the id is needed to be able to identify
                //which object we'll need to change
                //when info is input
                {id: this.state.sseo.length,
                name: '',
                email: ''}
            ]
        })
        console.log(this.state.sseo)
    }

    handleGradeChange =(event) => {
        this.setState({
            state_grade: event.target.value,
            stateId: this.props.store.adminState.id
        })
    }

    handleGovChange =(event) => {
        this.setState({
            gov_email: event.target.value
        })
    }

    handlePuc = (event) => {
        this.setState({
            puc: event.target.value
        })
        console.log(this.state.puc)
    }

    handleDoc = (event) => {
        this.setState({
            doc: event.target.value
        })
        console.log(this.state.doc)
    }

    handleNameChange = (event, id) => {
        //will go through state.sseo to find the one we need to change 
        const nameIndex = this.state.sseo.findIndex(name => name.id === id)
        console.log(nameIndex)
        let nameToChange = [...this.state.sseo]
        //replacing the empty string in state with the input
        nameToChange[nameIndex] = {...nameToChange[nameIndex], name: event.target.value}
        this.setState({
            sseo: nameToChange
        })
        console.log(this.state.sseo)
    }

    handleEmailChange = (event, id) => {
        //will go through state.sseo to find the one we need to change
        const emailIndex = this.state.sseo.findIndex(email => email.id === id)
        console.log(emailIndex)
        let emailToChange = [...this.state.sseo]
        //replacing the empty string in state with the input
        emailToChange[emailIndex] = {...emailToChange[emailIndex], email: event.target.value}
        this.setState({
            sseo: emailToChange
        })
        console.log(this.state)
    }  

    handleCountChange = (event) => {
        this.setState({
            resident_count: event.target.value
        })
    }

    handleMwhChange = (event) => {
        this.setState({
            resident_mwh: event.target.value
        })
    }

    handleSave = (event) => {
        console.log(this.state)
        //goes to Admin Form saga
        this.props.dispatch ({ type: "SET_CONTACT_INFO", payload: this.state })
    }

    render() {
        return (
            <div>
                
                <h1>State Information</h1>
                <br />
                State Grade: 
                <input onChange={this.handleGradeChange}></input>
                <br />
                State Governer Email:
                <input onChange={this.handleGovChange}></input>
                <br />
                PUC:
                <input onChange={this.handlePuc}></input>
                <br />
                Department of Commerce Email:
                <input onChange={this.handleDoc}></input>
                {this.state.sseo.map((office) => {
                    return (
                        <>
                            <p>SSEO Name</p>
                            < input onChange={(event) => this.handleNameChange(event, office.id)}></input>
                            <p>SSEO Email</p>
                            < input onChange={(event) => this.handleEmailChange(event, office.id)}></input >
                        </>
                    )
                })
                }
                <br />
                <button onClick={this.addSseo}>Add Another SSEO</button>
                <br />
                Resident Count:
                <input onChange={this.handleCountChange}></input>
                <br />
                Resident MWH:
                <input onChange={this.handleMwhChange}></input>
                <br />
                <button onClick={this.handleSave}>Save</button>
            </div >
        );
    }
}

export default connect(mapStoreToProps)(StateContactForm);

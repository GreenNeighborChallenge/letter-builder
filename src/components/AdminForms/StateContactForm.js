import React, { Component } from 'react';
import { connect } from 'react-redux'

class StateContactForm extends Component {

    state = {
        selectedState: '',
        puc: '',
        doc: '',
        sseo: [{
            id: 0,
            name: '',
            email: ''
        }]
    }

    handleStateChange = (event) => {
        this.setState({
            selectedState: event.target.value
        })
        this.props.stateNameChange(event);
    }

    addSseo = () => {
        console.log(this.state.sseo)
        this.setState({
            ...this.state,
            sseo: [
                ...this.state.sseo,
                {id: this.state.sseo.length,
                name: '',
                email: ''}
            ]
        })
        console.log(this.state.sseo)
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
        const nameIndex = this.state.sseo.findIndex(name => name.id === id)
        console.log(nameIndex)
        let nameToChange = [...this.state.sseo]
        nameToChange[nameIndex] = {...nameToChange[nameIndex], name: event.target.value}
        this.setState({
            sseo: nameToChange
        })
        console.log(this.state.sseo)
    }

    handleEmailChange = (event, id) => {
        const emailIndex = this.state.sseo.findIndex(email => email.id === id)
        console.log(emailIndex)
        let emailToChange = [...this.state.sseo]
        emailToChange[emailIndex] = {...emailToChange[emailIndex], email: event.target.value}
        this.setState({
            sseo: emailToChange
        })
        console.log(this.state)
    }  

    handleSave = (event) => {
        console.log(this.props.selectedState)
        console.log(this.state)
        this.props.dispatch ({ type: "PUT_CONTACT_INFO", payload: this.state })
    }

    render() {
        return (
            <div>
                State:
                <input onChange={this.handleStateChange} placeholder="Use abbreviation (i.e. AL)"></input>
                <h1>State Contact Information</h1>
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
                <button onClick={this.addSseo}>Add Another SSEO</button>
                <br />
                <button onClick={this.handleSave}>Save</button>
            </div >
        );
    }
}

export default connect()(StateContactForm);

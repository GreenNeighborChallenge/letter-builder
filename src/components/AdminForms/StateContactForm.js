import React, { Component } from 'react';

class StateContactForm extends Component {

    state = {
        puc: '',
        doc: '',
        sseo: [{
            id: 1,
            name: '',
            email: ''
        }]
    }

    addSseo = () => {
        console.log(this.state.sseo)
        let id=this.state.sseo.id
        this.setState({
            ...this.state,
            sseo: [
                ...this.state.sseo,
                {id: id + 1,
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

    handleNameChange = (event) => {
        const nameIndex = this.state.sseo.findIndex(name => name.name === "")
        let nameToChange = [...this.state.sseo]
        nameToChange[nameIndex] = {...nameToChange[nameIndex], name: event.target.value}
        this.setState({
            sseo: nameToChange
        })
        console.log(this.state.sseo)
    }

    handleEmailChange = (event) => {
        this.setState({
            ...this.state,
            sseo: [
                {...this.state.sseo.name,
                email: event.target.value}
            ]
        })
        console.log(this.state)
    }    

    render() {
        return (
            <div>
                <h1>State Contact Information</h1>
                PUC:
                <input onChange={this.handlePuc}></input>
                Department of Commerce Email:
                <input onChange={this.handleDoc}></input>
                {this.state.sseo.map((office) => {
                    return (
                        <>
                            <p>SSEO Name</p>
                            < input onChange={this.handleNameChange}></input>
                            <p>SSEO Email</p>
                            < input onChange={this.handleEmailChange}></input >
                        </>
                    )
                })
                }
                <button onClick={this.addSseo}>Add Another SSEO</button>
            </div >
        );
    }
}

export default StateContactForm;

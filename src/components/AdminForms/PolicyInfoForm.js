import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './AdminForms.css';

class PolicyInfoForm extends Component {

    state = {
        selectedState: '',
        grade: '',
        cap: '',
        rps: '',
        pace: '',
        cvp: '',
        gpm: '',
        hsr: '',
        cs: '',
        cca: '',
        ees: '',
        cub: '',
        resCount: 0,
        resMwh: 0
    }

    handleGradeChange = (event) => {
        switch (event.target.value) {
            case 'A':
                this.setState({
                    grade: 'A'
                })
                break;
            case 'B':
                this.setState({
                    grade: 'B'
                })
                break;
            case 'C':
                this.setState({
                    grade: 'C'
                })
                break;
            case 'D':
                this.setState({
                    grade: 'D'
                })
                break;
            case 'F':
                this.setState({
                    grade: 'F'
                })
                break;
            default:
        }
        this.setState({
            selectedState: this.props.store.admin[0].id
        })
    }

    handleCapChange = (event) => {
        this.setState({
            cap: event.target.value
        })
        console.log(this.state)
    }

    handleRpsChange = (event) => {
        this.setState({
            rps: event.target.value
        })
    }

    handlePaceChange = (event) => {
        this.setState({
            pace: event.target.value
        })
    }

    handleCvpChange = (event) => {
        this.setState({
            cvp: event.target.value
        })
    }

    handleGpmChange = (event) => {
        this.setState({
            gpm: event.target.value
        })
    }

    handleHsrChange = (event) => {
        switch (event.target.value) {
            case 'A':
                this.setState({
                    hsr: 'A'
                })
                break;
            case 'B':
                this.setState({
                    hsr: 'B'
                })
                break;
            case 'C':
                this.setState({
                    hsr: 'C'
                })
                break;
            case 'D':
                this.setState({
                    hsr: 'D'
                })
                break;
            case 'F':
                this.setState({
                    hsr: 'F'
                })
                break;
            default:
        }
    }

    handleCsChange = (event) => {
        switch (event.target.value) {
            case 'A':
                this.setState({
                    cs: 'A'
                })
                break;
            case 'B':
                this.setState({
                    cs: 'B'
                })
                break;
            case 'C':
                this.setState({
                    cs: 'C'
                })
                break;
            case 'D':
                this.setState({
                    cs: 'D'
                })
                break;
            case 'F':
                this.setState({
                    cs: 'F'
                })
                break;
            default:
        }
    }

    handleCcaChange = (event) => {
        switch (event.target.value) {
            case 'Yes':
                this.setState({
                    cca: 'Yes'
                })
                break;
            case 'No':
                this.setState({
                    cca: 'No'
                })
                break;
            default:
        }
    }

    handleEesChange = (event) => {
        this.setState({
            ees: event.target.value
        })
    }

    handleCubChange = (event) => {
        switch (event.target.value) {
            case 'Yes':
                this.setState({
                    cub: 'Yes'
                })
                break;
            case 'No':
                this.setState({
                    cub: 'No'
                })
                break;
            default:
        }
    }

    handleResCount = (event) => {
        this.setState({
            resCount: event.target.value
        })
    }

    handleResMwh = (event) => {
        this.setState({
            resMwh: event.target.value
        })
    }

    handleSave = () => {
        console.log(this.state)
        this.props.dispatch ({ type: 'PUT_POLICY_INFO', payload: this.state})
    }

    render() {
        return (
            <div className="parent">
                <div className="statePolicies">
                    
                    <h1>State Policy Information</h1>

                    Policy Grade:
                    <select onChange={(event) => this.handleGradeChange(event)}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                    <br />
                    Climate Action Plan:
                    <input onChange={this.handleCapChange}></input>
                    <br />
                    Renewable Portfolio Standard:
                    <input onChange={this.handleRpsChange}></input>
                    <br />
                    PACE:
                    <input onChange={this.handlePaceChange}></input>
                    <br />
                    Clean Vehicle Policy:
                    <input onChange={this.handleCvpChange}></input>
                    <br />
                    Green Pricing Mandate:
                    <input onChange={this.handleGpmChange}></input>
                    <br />
                    Home Solar Rights:
                    <select onChange={(event) => this.handleHsrChange(event)}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                    <br />
                    Community Solar:
                    <select onChange={(event) => this.handleCsChange(event)}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                    <br />
                    Community Choice Aggregation:
                    <select onChange={(event) => this.handleCcaChange(event)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    Energy Efficiency Standard:
                    <input onChange={this.handleEesChange}></input>
                    <br />
                    Citizens Utility Board:
                    <select onChange={(event) => this.handleCubChange(event)}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    Resident Count (optional):
                    <input onChange={(event) => this.handleResCount(event)}></input>
                    <br />
                    Resident MWH (optional):
                    <input onChange={(event) => this.handleResMwh(event)}></input>
                    <br />
                    <button onClick={this.handleSave}>Save</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PolicyInfoForm);

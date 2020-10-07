import React, { Component } from 'react';
import './AdminForms.css'

class PolicyInfoForm extends Component {
    render() {
        return (
            <div className="parent">
                <div className="statePolicies">
                    <h1>State Policy Information</h1>

                    Policy Grade:
                    <select onChange={(event) => {

                    }}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                    <br />
                    Climate Action Plan:
                    <input></input>
                    <br />
                    Renewable Portfolio Standard:
                    <input></input>
                    <br />
                    PACE:
                    <input></input>
                    <br />
                    Clean Vehicle Policy:
                    <input></input>
                    <br />
                    Green Pricing Mandate:
                    <input></input>
                    <br />
                    Home Solar Rights:
                    <select onChange={(event) => {

                    }}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                    <br />
                    Community Solar: 
                    <select onChange={(event) => {

                    }}>
                        <option value=""></option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                    <br />
                    Community Choice Aggregation:
                    <select onChange={(event) => {

                    }}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    Energy Efficiency Standard:
                    <input></input>
                    <br />
                    Citizens Utility Board:
                    <select onChange={(event) => {

                    }}>
                        <option value=""></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                </div>  
            </div>
        );
    }
}

export default PolicyInfoForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminPolicyInfo from './AdminPolicyInfo.js'

import './AdminPolicies.css'

class AdminPolicies extends Component {
  state = {
    addPolicy: false,
    name: '',
    petition: '',
    short: '',
    long: ''
  };

  componentDidMount(){
    //goes to policy language saga
    this.props.dispatch({ type: 'FETCH_POLICIES'})
  }

  //will allow the inputs for a new policy to render
  addPolicy = () => {
    this.setState({
      addPolicy: true
    })
  }

  //handles the inputs
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePetitionChange = (event) => {
    this.setState({
      petition: event.target.value
    })
  }

  handleShortChange = (event) => {
    this.setState({
      short: event.target.value
    })
  }

  handleLongChange = (event) => {
    this.setState({
      long: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      addPolicy: false
    })
    console.log(this.state)
    //goes to Admin Form saga
    this.props.dispatch({ type: 'NEW_POLICY_LANGUAGE', payload: this.state })
  }

  render() {
    return (
      <div>
        <h1>Policy Language</h1>
        <button onClick={this.addPolicy} className="policyButton">Add New Policy</button>
        {this.state.addPolicy === true &&
          <div className="form">
            <input placeholder="Policy Name" onChange={this.handleNameChange}></input>
            <h5>Note: If you want to use a states name in the text, replace the states name with [STATE]. Example: [STATE] should adopt the Green Vehicle Policy...</h5>
            <br />
            <textarea placeholder="Petition Info" onChange={this.handlePetitionChange}></textarea>
            <br />
            <textarea placeholder="Short Info" onChange={this.handleShortChange}></textarea>
            <br />
            <textarea placeholder="Long Info" onChange={this.handleLongChange}></textarea>
            <br />
            <button onClick={this.handleSubmit} className="submitButton">Submit</button>
          </div>}
        <div>
          <table>
            <thead>
              <tr>
                <th>Policy</th>
                <th>Short Info</th>
                <th>Long Info</th>
                <th>Petition Info</th>
                <th>Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.props.store.policyLanguage.map((policy) => {
                return (
                  <tr key={policy.id}>
                  <AdminPolicyInfo policy={policy}/>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPolicies);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/button'
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

  componentDidMount() {
    //goes to policy language saga
    this.props.dispatch({ type: 'FETCH_POLICIES' })
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
    //goes to Admin Form sagas
    this.props.dispatch({ type: 'NEW_POLICY_LANGUAGE', payload: this.state })
  }

  handleFormFill = () => {
    this.setState({
      ...this.state,
      name: 'Citizens Utility Board',
      petition: `Energy policy affects us all, but consumers don't have enough of a voice when it comes to deciding policy and setting rates in our state. [STATE] should create a Citizens Utility Board that does that stuff. This is the petition text. Citizens Utility Boards are independent state-level organizations that advocate for fair energy policy from a consumer perspective.`,
      short: 'Citizens Utility Boards are independent state-level organizations that advocate for fair energy policy from a consumer perspective.',
      long: `Citizens Utility Boards Longer Text

      Citizens Utility Boards are independent state-level organizations that advocate for fair energy policy from a consumer perspective.Citizens Utility Boards are independent state-level organizations that advocate for fair energy policy from a consumer perspective.Citizens Utility Boards are independent state-level organizations that advocate for fair energy policy from a consumer perspective.
      
      Citizens Utility Boards are independent state-level organizations that advocate for fair energy policy from a consumer perspective.`
    })
  }

  render() {
    return (
      <div>
        <h1>Policy Language</h1>
        <Button onClick={this.addPolicy} className="prettyBtn" variant="outlined">Add New Policy</Button>
        <br />
        <br />
        {this.state.addPolicy === true &&
          <div className="form">
            <input placeholder="Policy Name" value={this.state.name} onChange={this.handleNameChange} className="inputs"></input>
            <h5 onClick={this.handleFormFill}>Note: If you want to use a states name in the text, replace the states name with [STATE].</h5>
            <h5>Example: [STATE] should adopt the Green Vehicle Policy...</h5>
            <br />
            <textarea placeholder="Petition Info" value={this.state.petition} onChange={this.handlePetitionChange} className="inputs"></textarea>
            <br />
            <textarea placeholder="Short Info" value={this.state.short} onChange={this.handleShortChange} className="inputs"></textarea>
            <br />
            <textarea placeholder="Long Info" value={this.state.long} onChange={this.handleLongChange} className="inputs"></textarea>
            <br />
            <Button onClick={this.handleSubmit} className="submitButton" variant="outlined">Submit</Button>
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
                    <AdminPolicyInfo policy={policy} />
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

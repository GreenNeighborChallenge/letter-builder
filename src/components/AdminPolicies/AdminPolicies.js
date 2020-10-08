import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
    this.props.dispatch({ type: 'FETCH_POLICIES'})
  }

  addPolicy = () => {
    this.setState({
      addPolicy: true
    })
  }

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
    this.props.dispatch({ type: 'NEW_POLICY', payload: this.state })
  }

  render() {
    return (
      <div>
        <h1>Policy Language</h1>
        <button onClick={this.addPolicy} className="policyButton">Add New Policy</button>
        {this.state.addPolicy === true &&
          <div className="form">
            <input placeholder="Policy Name" onChange={this.handleNameChange}></input>
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
                    <td>{policy.policy}</td>
                    <td>{policy.short_info}</td>
                    <td>{policy.long_info}</td>
                    <td>{policy.petition_info}</td>
                    <td><button>edit</button></td>

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

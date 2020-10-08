import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminPolicies extends Component {
  state = {
    addPolicy: false,
    name: '',
    petition: '',
    short: '',
    long: ''
  };

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
    this.props.dispatch({ type: 'NEW_POLICY', payload: this.state})
  }

  render() {
    return (
      <div>
        <button onClick={this.addPolicy}>Add New Policy</button>
        {this.state.addPolicy === true &&
          <div>
            <input placeholder="Policy Name" onChange={this.handleNameChange}></input>
            <br />
            <textarea placeholder="Petition Info" onChange={this.handlePetitionChange}></textarea>
            <br />
            <textarea placeholder="Short Info" onChange={this.handleShortChange}></textarea>
            <br />
            <textarea placeholder="Long Info" onChange={this.handleLongChange}></textarea>
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>  }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPolicies);

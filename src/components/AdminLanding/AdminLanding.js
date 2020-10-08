import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import AdminPolicies from '../AdminPolicies/AdminPolicies';
import AdminStates from '../AdminStates/AdminStates';

class AdminLanding extends Component {
  state = {
    heading: 'Admin Component',
    displayPolicies: false,
  };

  showStates = () => {
      this.setState({
          ...this.state,
          displayPolicies: false
      });
  };

  showPolicies = () => {
      this.setState({
          ...this.state,
          displayPolicies: true
      });
  };

  render() {
    return (
      <div>
        {this.state.displayPolicies}
        <button onClick={this.showStates}>State List</button>
        <button onClick={this.showPolicies}>Policy Language</button>

        {this.state.displayPolicies ?
        <AdminPolicies /> :
        <AdminStates />}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminLanding);
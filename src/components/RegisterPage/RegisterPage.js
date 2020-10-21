import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div style={{margin: '10em 0 12em 0'}}> 
        <RegisterForm />

        <center>

        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

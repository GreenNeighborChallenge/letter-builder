import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField, Typography } from '@material-ui/core'
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminPolicyInfo from './AdminPolicyInfo.js'
import { withStyles } from '@material-ui/core/styles';
import './AdminPolicies.css'

const styles = theme => ({
  resize: {
      fontSize: 14,
      minHeight: '9em',
      background: 'rgb(247, 247, 246)',
      padding: '1em',
  },
  input: {
      margin: '1em',
      background: 'rgb(247, 247, 246)'
  },
  textField: {
    alignSelf: 'right',
    background: 'rgba(204, 204, 204, 0)',
    padding: '5px',
    marginTop: '20px',
    width: '90%'
  },
  submitBtn: {
    margin: '1em'
  }
})

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
    
    //goes to Admin Form sagas
    this.props.dispatch({ type: 'NEW_POLICY_LANGUAGE', payload: this.state })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h4" align="center">Policy Language</Typography>
        <Button onClick={this.addPolicy} variant="outlined" style={{float: 'right'}}>Add New Policy</Button>
        <br />
        <br />
        {this.state.addPolicy === true &&
          <div className="form">
            <TextField variant="outlined" size="small"  placeholder="Policy Name" value={this.state.name} onChange={this.handleNameChange} className={classes.input}/>
            <Typography>Note: If you want to use a states name in the text, replace the states name with [STATE].</Typography>
            <Typography>Example: [STATE] should adopt the Green Vehicle Policy...</Typography>
         
            <TextField placeholder="Petition Info" value={this.state.petition} onChange={this.handlePetitionChange} InputProps={{ classes: { input: classes.resize} }} className={classes.textField} multiline/>
      
            <TextField placeholder="Short Info" value={this.state.short} onChange={this.handleShortChange} InputProps={{ classes: { input: classes.resize} }} className={classes.textField} multiline/>
        
            <TextField placeholder="Long Info" value={this.state.long} onChange={this.handleLongChange} InputProps={{ classes: { input: classes.resize} }} className={classes.textField} multiline/>
            <br />
            <Button onClick={this.handleSubmit} className={classes.submitBtn} variant="outlined">Submit</Button>
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

const styledAdminPolicies = withStyles(styles)(AdminPolicies)

export default connect(mapStoreToProps)(styledAdminPolicies);

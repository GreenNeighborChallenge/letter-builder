import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/button'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import './AdminPolicies.css'

class AdminPolicyInfo extends Component {

    state = {
        isEdit: false,
        policyId: this.props.policy.id,
        policyName: this.props.policy.name,
        short_info: this.props.policy.short_info,
        long_info: this.props.policy.long_info,
        petition_info: this.props.policy.petition_info
    }

    //allows the inputs to render so they can be edited
    handleEdit = () => {
        this.setState({
            isEdit: true,
        })
    }

    //functions to handle input changes
    handleNameChange = (event) => {
        this.setState({
            policyName: event.target.value
        })
    }

    handleShortChange = (event) => {
        this.setState({
            short_info: event.target.value
        })
    }

    handleLongChange = (event) => {
        this.setState({
            long_info: event.target.value
        })
    }

    handlePetitionChange = (event) => {
        this.setState({
            petition_info: event.target.value
        })
    }

    handleSave = () => {
        this.setState({
            isEdit: false
        })
        console.log(this.state)
        //goes to admin form saga
        this.props.dispatch ({ type: 'UPDATE_POLICY_LANGUAGE', payload: this.state})
    }

    handleConfirm = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this policy? Once it is deleted it cannot be recovered.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('Policy Deleted.');
                        this.handleDelete();
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Nothing Deleted.')
                }
            ]
        });
    };


    handleDelete = () => {
        this.setState({
            isEdit: false
        })
        //goes to admin form saga
        this.props.dispatch ({ type: 'DELETE_POLICY', payload: this.state.policyId})

    }

    render() {
        return (
            <>
                {this.state.isEdit ?
                    <>
                        <td><input defaultValue={this.state.policyName} onChange={this.handleNameChange} className="inputs"></input></td>
                        <td><textarea defaultValue={this.state.short_info} onChange={this.handleShortChange} className="inputs"></textarea></td>
                        <td><textarea defaultValue={this.state.long_info} onChange={this.handleLongChange} className="inputs"></textarea></td>
                        <td><textarea defaultValue={this.state.petition_info} onChange={this.handlePetitionChange} className="inputs"></textarea></td>
                        <td>
                            <Button onClick={this.handleSave} variant="outlined" className="prettyBtn">save</Button>
                            <Button onClick={this.handleConfirm} variant="outlined" className="prettyBtn">delete</Button>
                        </td>
                        
                    </>
                    :
                    <>
                        <td>{this.props.policy.name}</td>
                        <td>{this.props.policy.short_info}</td>
                        <td>{this.props.policy.long_info}</td>
                        <td>{this.props.policy.petition_info}</td>
                        <td><Button onClick={this.handleEdit} variant="outlined" className="prettyBtn">edit</Button></td>
                    </>
                }
            </>
        );
    }
}

export default connect()(AdminPolicyInfo);

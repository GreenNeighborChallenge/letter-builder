import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PreviewLetter from '../PreviewLetter/PreviewLetter.js'
//import css
import './AddressForm.css';

class AddressForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        st: '',
        zip: '',
    };

    //gets states on mount to display in dropdown box
    componentDidMount() {
        this.getStates();
    } 

    //actually gets the states, runs on mount
    getStates = () => {
        this.props.dispatch({type: 'GET_STATES'})
    }

    //sends address form info to address saga, takes entire state
    //data does NOT currently go to the DB, refreshing the page will
    //lose this data
    sendInfo = () => {
        console.log('got here')
        this.props.dispatch({ type: 'ADDRESS_INFO', payload: this.state })
    }

    render() {
        return (
            <div className="addressForm">
                <div className="addressFormContainer">
                    <p>To send emails to your local representatives,
                    fill in your address and contact information
                    here and click “find my reps” to make sure your
                        letter gets to the right people. </p>

                    {/* all inputs change state on-change */}
                    <input onChange={(event) => { this.setState({ ...this.state, firstName: event.target.value }) }} placeholder="First Name" />
                    <input onChange={(event) => { this.setState({ ...this.state, lastName: event.target.value }) }} placeholder="Last Name" />
                    <br />
                    <p>Email: </p>

                    <div className="emailAndAddress">
                        <input className="emailInput"
                            onChange={(event) => {
                                this.setState({
                                    ...this.state,
                                    email: event.target.value
                                })
                            }}
                            placeholder="Email Address" />
                    </div>

                    <br />
                    <p>Address: </p>

                    <div className="emailAndAddress">
                        <input className="addressInput"
                            onChange={(event) => {
                                this.setState({
                                    ...this.state,
                                    street: event.target.value
                                })
                            }}
                            placeholder="Street Address" />
                    </div>

                    <br />
                    <input onChange={(event) => { this.setState({ ...this.state, city: event.target.value }) }} placeholder="City" />
                    
                    {/* options come from states reducer once it's "there" */}
                    <select onChange={(event) => { this.setState({ ...this.state, st: event.target.value }) }}>
                        <option>State</option>
                        {this.props.store.states && 
                        this.props.store.states.map((state) => {
                        return(<option key={state.id} value={state.state}>{state.state}</option>)
                        })}
                    </select>
                    <input onChange={(event) => { this.setState({ ...this.state, zip: event.target.value }) }} placeholder="Zip Code" />
                    <br />

                    {/* --find reps button runs the sendInfo function 
                        --back button doesn't do anything yet */}
                    <button>Back</button>
                    <button onClick={this.sendInfo}>Find my Representatives!</button>

                    {this.props.store.address &&
                        <p>{this.props.store.address.firstName}{this.props.store.address.st}</p>
                    }
                </div>
                <PreviewLetter />
            </div>
            
        );
    }
}

export default connect(mapStoreToProps)(AddressForm);
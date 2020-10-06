import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminStateInfo from './AdminStateInfo';

class AdminStates extends Component {
    state = {
        heading: 'states Component',
        selectedState: ''
    };

    //gets states on mount to display in dropdown box
    componentDidMount() {
        this.getStates();
    }

    //actually gets the states, runs on mount
    getStates = () => {
        this.props.dispatch({ type: 'GET_STATES' })
    }

    getStatesInfo = (selectedStateId) => {
        this.props.dispatch({
            type: 'FETCH_STATE_INFO',
            payload: selectedStateId
        });
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <h2>{this.state.selectedState.id}</h2>
                {JSON.stringify(this.state.selectedState)}

                <select onChange={(event) => {
                    this.setState({...this.state, selectedState: event.target.value});
                    this.getStatesInfo(event.target.value);
                }}>
                    <option value="">State</option>
                    {this.props.store.states &&
                        this.props.store.states.map((state) => {
                            return (<option key={state.id} value={state.id}>{state.state}</option>)
                        })}
                </select>

                {this.props.store.stateInfo[0] &&
                <AdminStateInfo 
                stateInfo={this.props.store.stateInfo[0]}
                />}

            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminStates);

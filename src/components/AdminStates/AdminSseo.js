import React, { Component } from 'react';

class AdminSseo extends Component {


    render() {

        
        return (
            <div><div className="statePolicies">
            {/* <h1>{stateInfo.state} State Offices</h1> */}
            {this.state.SSEOinput ?
                <p>Enter new info below:</p> :
                <button onClick={() => this.addSSEO()}>Add Another SSEO</button>
            }
            {this.props.store.sseoInfo[0] &&
                this.props.store.sseoInfo.map((sseo) => {
                    return (
                        <div className="stateSSEOitem">
                            <button>Edit</button>
                            <p>SSEO Name: {sseo.SSEO_name}</p>

                            <p>SSEO Email: {sseo.SSEO_email}</p>
                        </div>
                    )
                })}
            {this.state.SSEOinput &&
                <div>
                    <input placeholder="SSEO Name"
                        onChange={(event) => this.setState({ ...this.state, newSSEOName: event.target.value })}></input>
                    <input placeholder="SSEO Email"
                        onChange={(event) => this.setState({ ...this.state, newSSEOEmail: event.target.value })}></input>
                    <div>
                        {/* <button onClick={() => this.saveSSEO(stateInfo.id)}>Save</button> */}
                        <button onClick={() => this.setState({ ...this.state, SSEOinput: false })}>Cancel</button>
                    </div>
                </div>
            }
        </div>
            </div>
        );
    }
}

export default AdminSseo;

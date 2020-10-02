import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './LetterItem.css';

class LetterItems extends Component {
    render() {
        return (
            <>
                <div>
                    {this.props.store.policies.map((policy) => {
                        return (
                            <div className="cardItem" key={policy.id}>
                                <Button variant="contained" >{policy.policy}</Button>
                                <button className="addButton">Add</button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h1>Your Letter</h1>
            Subject:<input className="subjectLine" defaultValue="Energy Policy in YOUR STATE HERE"></input>
                    < br />
                    <textarea className="textArea" height="500px" width="100" defaultValue="To Whom it May Concern:

                            As a resident of [STATE], I think our state could be doing more to make our air cleaner and healthier, mitigate climate change, and increase citizen control over our energy system. Energy use impacts all of us, but as consumers we don't have a lot of power to make the changes that are urgently needed. I am writing to recommend policy changes that are important to me and to our state."></textarea>
                    <br />
                    <textarea className="textArea"></textarea>
                    <br />
                    <textarea className="textArea" defaultValue="Thank you for taking the time to read my letter. Energy policy is important to [STATE] residents, and we need to act quickly to ensure a safe, healthy, democratic future. I look forward to hearing back from you, and learning how you plan to act on these recommendations."></textarea>
                </div>
            </>
        );
    }
}

export default connect(mapStoreToProps)(LetterItems);

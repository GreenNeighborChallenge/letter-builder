import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './LetterItem.css';

class LetterItems extends Component {

    state ={
        subject: this.subject,
        intro: this.intro,
        conclusion: this.conclusion
    }

    //this will update page every time a new policy is added to the letter
    componentDidUpdate(prevProps) {
        if (prevProps.store.letter.body !== this.props.store.letter.body) {
        }
    }

    handleSubject = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    handleIntro = (event) => {
        this.setState({
            intro: event.target.value
        })
    }

    handleAdd = (id) => {
        this.props.dispatch({ type: 'ADD_POLICY', payload: id })
    }

    handleConclusion = (event) => {
        this.setState({
            conclusion: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.dispatch ({ type: 'SET_LETTER', payload: this.state})
    }


    render() {

        const intro = `"To whom it may concern, 
        As a resident of [STATE], I think our state could be doing more to make our air cleaner and healthier, mitigate climate change, and increase citizen control over our energy system. Energy use impacts all of us, but as consumers we don't have a lot of power to make the changes that are urgently needed. I am writing to recommend policy changes that are important to me and to our state."`
        const conclusion = "Thank you for taking the time to read my letter. Energy policy is important to [STATE] residents, and we need to act quickly to ensure a safe, healthy, democratic future. I look forward to hearing back from you, and learning how you plan to act on these recommendations."
        const subject = "Energy Policy in YOUR STATE HERE."

        return (
            <>
                <div>
                    {this.props.store.policies.map((policy) => {
                        return (
                            <div className="cardItem" key={policy.id}>
                                <Button variant="contained" >{policy.policy}</Button>
                                <button className="addButton" onClick={() => this.handleAdd(policy.id)}>Add</button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h1>Your Letter</h1>
            Subject:<input className="subjectLine" defaultValue={subject} onChange={this.handleSubject}></input>
                    < br />
                    <textarea className="textArea" height="500px" width="100" defaultValue={intro} onChange={this.handleIntro}></textarea>
                    <br />
                    <textarea className="textArea" value={this.props.store.letter.body.map(policy => policy + '\n')}>
                    </textarea>
                    <br />
                    <textarea className="textArea" defaultValue={conclusion} onChange={this.handleConclusion}></textarea>
                    < br />
                    {/* <a>Print a PDF instead!</a> */}
                    <button onClick={this.handleSubmit}>Enter Address</button>
                </div>
            </>
        );
    }
}

export default connect(mapStoreToProps)(LetterItems);

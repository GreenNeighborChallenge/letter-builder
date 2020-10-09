import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import './LetterItem.css';
import PolicyButton from './PolicyButton.js';
import Stepper from '../Stepper/Stepper';

class LetterItems extends Component {

    state = {
        subject:  `Energy Policy in ${this.props.store.zip.long_name}.`,
        intro: `To whom it may concern, 
        As a resident of ${this.props.store.zip.long_name}, I think our state could be doing more to make our air cleaner and healthier, mitigate climate change, and increase citizen control over our energy system. Energy use impacts all of us, but as consumers we don't have a lot of power to make the changes that are urgently needed. I am writing to recommend policy changes that are important to me and to our state.`,
        conclusion: `       Thank you for taking the time to read my letter. Energy policy is important to ${this.props.store.zip.long_name} residents, and we need to act quickly to ensure a safe, healthy, democratic future. I look forward to hearing back from you, and learning how you plan to act on these recommendations.`
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
        //this.props.dispatch ({ type: 'SET_LETTER', payload: this.state});
        //this.props.directToAddress()
        this.props.dispatch({ type: 'SET_LETTER', payload: this.state })
        this.props.history.push('/address')
    }


    render() {
        return (
            <>
                <div>
                    <h1 className="policies">Policies</h1>
                    <h6 className="policies">Hover over each policy to learn more</h6>
                    {this.props.store.policyLanguage.map((policy) => {
                        return (
                            <div className="cardItem" key={policy.id}>
                                <PolicyButton policy={policy} handleAdd={() => this.handleAdd(policy.id)} />
                                
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h1>Your Letter</h1>
            Subject:<input className="subjectLine" defaultValue={this.state.subject} onChange={this.handleSubject}></input>
                    < br />
                    <textarea className="textArea" height="500px" width="100" defaultValue={this.state.intro} onChange={this.handleIntro}></textarea>
                    <br />
                    {this.props.store.letter.body &&
                        <textarea className="textArea" value={this.props.store.letter.body.map(policy => policy + '\n')}>
                        </textarea>
                    }
                    <br />
                    <textarea className="textArea" defaultValue={this.state.conclusion} onChange={this.handleConclusion}></textarea>
                    < br />
                    {/* <a>Print a PDF instead!</a> */}
                    <div style={{margin: '2em 0 -12em -19em'}}> 
                    <Stepper step={1} />
                    </div>
                    <div style={{margin:'9em 0 -9em -25em', padding: '2em 0 0 0'}}> 
                    
                    <Button variant="outlined" onClick={this.props.directBack}>Back</Button>
                    <Button style={{float: 'right', marginBottom: '-3em'}} variant="outlined" onClick={this.handleSubmit}>Enter Address</Button>
                    </div>
                </div>
                
            </>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(LetterItems));

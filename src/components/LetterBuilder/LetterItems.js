import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './LetterItem.css';
import AddPolicy from './AddPolicy.js';
import Stepper from '../Stepper/Stepper';
import PolicyExplainer from '../PolicyExplainer/PolicyExplainer.jsx';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class LetterItems extends Component {

    state = {
        subject: `Energy Policy in ${this.props.store.zip.long_name}.`,
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
        this.props.dispatch({ type: 'SET_LETTER', payload: this.state })
        this.props.history.push('/address')
    }

    render() {

        const fullLetter = this.props.store.letter.body.map(policy => policy + '\n');
        console.log(fullLetter);

        return (
            <>
                <div className="policy">
                    <div className="header">
                        <h1 >Policies</h1>
                        <h6 className="policies">Hover over each policy to learn more</h6>
                    </div>
                    <div>
                    {this.props.store.policyLanguage.map((policy, i) => {
                        return (
                            <div className="cardItem" key={i}>
                                <PolicyExplainer policy_name={policy.name} title={policy.name} text={policy.long_info} toolTitle={policy.short_info}/>
                                <AddPolicy policy={policy} handleAdd={() => this.handleAdd(policy.policy_id)}  />
                                
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="letter">
                    <h1>Your Letter</h1>
                    Subject:<input className="subjectLine" defaultValue={this.state.subject} onChange={this.handleSubject}></input>
                    < br />
                    <textarea className="textArea" height="500px" width="100" defaultValue={this.state.intro} onChange={this.handleIntro}></textarea>
                    <br />
                    {this.props.store.letter.body &&
                        <textarea className="textArea" value={fullLetter[0] && fullLetter.map(language => {
                            return(
                                language ? language.replaceAll("[STATE]", this.props.store.zip.long_name) : ''
                            )
                        })}>
                        </textarea>
                    }
                    {/* fullLetter[0] ? fullLetter[0].replace("[STATE]", this.props.store.zip.long_name) : '' */}
                    <br />
                    <textarea className="textArea" defaultValue={this.state.conclusion} onChange={this.handleConclusion}></textarea>
                    < br />
                    {/* <a>Print a PDF instead!</a> */}
                    <div >
                        <Stepper step={0} />
                    </div>
                    <div>
                    <IconButton onClick={this.props.directBack} style={{ display: 'inline', float: 'left', color:'black' }}><ArrowBackIcon /></IconButton>
                    <IconButton onClick={this.handleSubmit} style={{ display: 'inline', float: 'right', color:'black' }}><ArrowForwardIcon /></IconButton>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(LetterItems));

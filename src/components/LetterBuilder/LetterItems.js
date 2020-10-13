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
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    resize: {
        fontSize: 14,
        minHeight: '9em',
        margin: '1em'
    },
    textField: {
        width: 450,
        height: '12em',
        overflowX: 'auto',
        margin: '.5em'
    },
    body: {
        width: 450,
        overflowX: 'auto',
        maxHeight: '17em',
        margin: '.5em'
    },
    email: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '.5em',
    },
    policy: {
        display: 'flex',
        flexDirection: 'column',
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardActions: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    }
})

class LetterItems extends Component {
    state = {
        subject: `Energy Policy in ${this.props.store.zip.long_name}.`,
        intro: `To whom it may concern, 
        As a resident of ${this.props.store.zip.long_name}, I think our state could be doing more to make our air cleaner and healthier, mitigate climate change, and increase citizen control over our energy system. Energy use impacts all of us, but as consumers we don't have a lot of power to make the changes that are urgently needed. I am writing to recommend policy changes that are important to me and to our state.`,
        conclusion: `Thank you for taking the time to read my letter. Energy policy is important to ${this.props.store.zip.long_name} residents, and we need to act quickly to ensure a safe, healthy, democratic future. I look forward to hearing back from you, and learning how you plan to act on these recommendations.`
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
        const { classes } = this.props
        const { resize, textField, body, email, policy, stepper } = classes
        const fullLetter = this.props.store.letter.body.map(policy => policy + '\n');
        return (
            <Grid container spacing={3}>
                <Grid xs={12}>
                    <h1>Create Your Letter</h1>
                </Grid>
                <Grid item xs={6} >
                    <div className={policy}>
                        <h1>Policies</h1>
                        <h5>Hover over each policy to learn more</h5>
                        {this.props.store.policyLanguage.map((policy, i) => {
                            return (
                                <div key={i}>
                                    <PolicyExplainer policy_name={policy.name} title={policy.name} text={policy.long_info} toolTitle={policy.short_info} />
                                    <AddPolicy policy={policy} handleAdd={() => this.handleAdd(policy.policy_id)} />
                                </div>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div className={email}>

                        <div>
                            Subject:
                    <TextField size="small" className="subjectLine" defaultValue={this.state.subject} onChange={this.handleSubject}></TextField>
                        </div>
                        <TextField variant="outlined" InputProps={{ classes: { input: resize } }} multiline size="small" className={textField} defaultValue={this.state.intro} onChange={this.handleIntro}></TextField>
                        {this.props.store.letter.body &&
                            <TextField variant="outlined" InputProps={{ classes: { input: resize } }} size="small" value={fullLetter[0] ? fullLetter.map(language => {
                                return (
                                    language ? language.replaceAll("[STATE]", this.props.store.zip.long_name) : ''
                                )
                            }) : ''} multiline className={body}>
                            </TextField>
                        }
                        <TextField variant="outlined" InputProps={{ classes: { input: resize } }} multiline defaultValue={this.state.conclusion} onChange={this.handleConclusion} className={textField}></TextField>
                        {/* <a>Print a PDF instead!</a> */}
                    </div>
                </Grid>
                <Grid xs={12}>
                    <section>
                        <div className={stepper}>
                            <Stepper step={0} />
                        </div>
                        <div>
                            <IconButton onClick={this.props.directBack} style={{ display: 'inline', float: 'left', color: 'black' }}><ArrowBackIcon /></IconButton>
                            <IconButton onClick={this.handleSubmit} style={{ display: 'inline', float: 'right', color: 'black' }}><ArrowForwardIcon /></IconButton>
                        </div>
                    </section>
                </Grid>

            </Grid>
        );
    }
}
const styledLetterItems = withStyles(styles)(LetterItems)

export default withRouter(connect(mapStoreToProps)(styledLetterItems));

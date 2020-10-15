import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddPolicy from './AddPolicy.js';
import Stepper from '../Stepper/Stepper';
import useStyles from './LetterItemsStyle.jsx'
import PolicyExplainer from '../PolicyExplainer/PolicyExplainer.jsx';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    Grid, Typography, TextField, IconButton,
    FormHelperText, FormControl
} from '@material-ui/core';
import { useForm } from "react-hook-form";

const LetterItems = ({ directBack, history, dispatch, zip, letter, policyLanguage }) => {
    const { resize, textField, body, policy, stepper, cardActions,
        title, subject, back, next, label, resizeSubject, policyHeader, policyLabel, error
    } = useStyles();

    const [helperText, setHelperText] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [email, setEmail] = useState({
        subject: `Energy Policy in ${zip.long_name}.`,
        intro: `To whom it may concern, 
        As a resident of ${zip.long_name}, I think our state could be doing more to make our air cleaner and healthier, mitigate climate change, and increase citizen control over our energy system. Energy use impacts all of us, but as consumers we don't have a lot of power to make the changes that are urgently needed. I am writing to recommend policy changes that are important to me and to our state.`,
        conclusion: `Thank you for taking the time to read my letter. Energy policy is important to ${zip.long_name} residents, and we need to act quickly to ensure a safe, healthy, democratic future. I look forward to hearing back from you, and learning how you plan to act on these recommendations.`
    });

    const { handleSubmit, register, } = useForm();

    // useEffect(() => {

    // }, []);
    
    // const fullLetter = letter.body.map(policy => policy + '\n');


    const handleSubject = (event) => {
        setEmail({
            subject: event.target.value
        })
    }

    const handleIntro = (event) => {
        setEmail({
            intro: event.target.value
        })
    }

    const handleConclusion = (event) => {
        setEmail({
            conclusion: event.target.value
        })
    }

    const onSubmit = (data) => {
        const newData = {...data, ...email}
        if (data.body === '') {
            setErrorState(true);
            setHelperText('You must pick one policy');
        } else {
            setErrorState(false);
            dispatch({ type: 'SET_FULL_LETTER', payload: newData })
            history.push('/address')
        }
    }

    return (
        <FormControl>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid xs={12} >
                        <Typography className={title} align="center" >Create Your Letter</Typography>
                        <Typography variant="subtitle2" align="center"> Add policies to your letter and customize your introduction and conclusion </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <div className={policy}>
                            <div >
                                <Typography gutterBottom className={policyHeader}>Policies</Typography>
                                <Typography variant="body1" className={policyLabel}>Hover over each policy to learn more</Typography>
                            </div>
                            {policyLanguage.map((policy, i) => {
                                return (
                                    <div key={i}>
                                        <PolicyExplainer policy_name={policy.name} title={policy.name} text={policy.long_info} toolTitle={policy.short_info}/>
                                        <AddPolicy policy={policy} zip={zip}/>
                                    </div>
                                )
                            })}
                        </div>
                    </Grid>

                    <Grid item xs={6} >
                        <Typography className={label}>Subject: </Typography>
                        <TextField size="small" defaultValue={email.subject} onChange={handleSubject} className={subject} InputProps={{ classes: { input: resizeSubject }, disableUnderline: true }}/>
                        <TextField variant="outlined" InputProps={{ classes: { input: resize } }} 
                           multiline size="small" className={textField} defaultValue={email.intro} onChange={handleIntro}/>

                        {letter.body &&
                            <TextField variant="outlined" InputProps={{ classes: { input: resize } }} size="small" error={errorState} 
                                value={letter.body} multiline className={body} inputRef={register} name="body"/>
                        }
                        <FormHelperText className={error} error={errorState}> {helperText} </FormHelperText>

                        <TextField variant="outlined" InputProps={{ classes: { input: resize } }} multiline defaultValue={email.conclusion} onChange={handleConclusion} className={textField}/>
                        {/* <a>Print a PDF instead!</a> */}
                    </Grid>
                    <Grid xs={12}>
                        <div className={stepper}>
                            <Stepper step={0} />
                        </div>
                        <div className={cardActions}>
                            <IconButton onClick={directBack} className={back}><ArrowBackIcon /></IconButton>
                            <IconButton type="submit" className={next}><ArrowForwardIcon /></IconButton>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </FormControl>
    );

}

const mapStoreToProps = (reduxState) => {
    return {
        policyLanguage: reduxState.policyLanguage,
        letter: reduxState.letter,
        zip: reduxState.zip,
    };
};

export default withRouter(connect(mapStoreToProps)(LetterItems));
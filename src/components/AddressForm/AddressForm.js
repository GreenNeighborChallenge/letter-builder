import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    FormControl, FormHelperText, Checkbox, Typography, TextField, Select,
    MenuItem, InputLabel, Card, IconButton, makeStyles
} from '@material-ui/core';
import Stepper from '../Stepper/Stepper'
import { CustomButton } from '../PickReps/RepButtons'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1em',
    },
    card: {
        textAlign: 'center',
        width: '48em',
        minHeight: '35em',
        maxHeight: '42em',
        padding: '1em',
        backgroundColor: 'rgb(255,255,255, .85)',
    },
    formControl: {
        margin: '.5em',
        height: '2.5em',
        display: 'inline'
    },
    select: {
        minWidth: 120,
        height: '2.5em'
    },
    label: {
        minWidth: 120,
        margin: '-1.4em',
    },
    right: {
        float: 'right',
        color: 'black'
    },
    left: {
        float: 'left',
        color: 'black'
    },
    signup: {
        marginTop: '1em'
    },
    form: {
        margin: '1em',
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '-1em'
    },
    title: {
        fontSize: 48,
        fontFamily: 'leafy',
        color: 'black',
        marginBottom: '-.1em'
    },
    helpText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subheader: {
        margin: 'auto',
        width: '46em'
    },
    cardActions: {
        width: '48em'
    }
});


const AddressForm = ({ dispatch, history, states }) => {
    const { card, form, formControl, label, select, signup, cardActions,
        right, root, left, stepper, title, helpText, subheader
    } = useStyles();
    const { handleSubmit, register, control, reset } = useForm();
    const [helperText, setHelperText] = useState('');
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        dispatch({ type: 'GET_STATES' })

    }, [dispatch]);

    const onSubmit = (data) => {
        if ((data.email === '') || (data.street === '') || (data.city === '') || (data.st === '') || (data.zip === '')) {
            setErrorState(true);
            setHelperText('You must enter a full address and an email address');
        } else {
            setErrorState(false);
            dispatch({ type: 'ADDRESS_INFO', payload: data })
            dispatch({ type: 'FETCH_OFFICES', payload: data.st })
            reset()
            directToReps()
        }
    }

    const directToReps = () => {
        history.push('/selectContacts')
    }

    const directBack = () => {
        history.push('/letterBuilder')
        // dispatch({type: 'DELETE_BODY'})
    }

    return (
        <div className={root}>
            <Card className={card}>
                <FormControl >
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <Typography variant="h5" component="h2" gutterBottom align="center" className={title}>
                            Enter your Information
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="center" className={subheader}>
                            To send emails to your local representatives,
                            fill in your address and contact information
                            here and click next to make sure your
                            letter gets to the right people.
                        </Typography>
                        <section className={form}>
                            <TextField inputRef={register} style={{ marginRight: '1em' }} label="First Name" variant="outlined" size="small" name="firstName" placeholder="First Name" />
                            <TextField inputRef={register} label="Last Name" variant="outlined" size="small" name="lastName" placeholder="Last Name" />
                            <br/>
                                <TextField inputRef={register} label="Email" variant="outlined" size="small" style={{ marginTop: '1em' }} name="email" placeholder="Email Address" error={errorState} />
                           <br/>

                            <TextField inputRef={register} label="StreetAddress" variant="outlined" size="small" multiline style={{ marginTop: '1em', width: "20em" }} name="street" placeholder="Street Address" error={errorState} />

                        </section>
                        <section className={formControl}>
                            <TextField inputRef={register} label="City" variant="outlined" size="small" name="city" placeholder="City" error={errorState} />
                            <FormControl className={formControl}>
                                <InputLabel className={label}  >State</InputLabel>
                                <Controller as={<Select className={select} variant="outlined" >
                                    {states &&
                                        states.map((state) => {
                                            return (<MenuItem key={state.id} value={state.state_abv}>{state.state_abv}</MenuItem>)
                                        })}
                                </Select>
                                } name="st" defaultValue="" control={control} error={errorState} />
                            </FormControl>
                            <TextField inputRef={register} label="Zip Code" variant="outlined" size="small" name="zip" placeholder="Zip Code" error={errorState} />
                        </section>
                        <FormHelperText error={errorState} className={helpText}> {helperText} </FormHelperText>
                        <section className={signup}>
                            <CustomButton variant="outlined" >
                                Sign Up for our News Letter!
                                    <Checkbox size="small" inputProps={{ 'aria-label': 'email signup check box' }} />
                            </CustomButton>
                        </section>
                        <section className={cardActions}>
                            <div className={stepper}>
                                <Stepper step={1} />
                            </div>
                            <IconButton onClick={directBack} className={left} ><ArrowBackIcon /></IconButton>
                            <IconButton type="submit" className={right} ><ArrowForwardIcon /></IconButton>
                        </section>
                    </form>
                </FormControl>
            </Card>
        </div>

    );
}

const mapStoreToProps = (reduxState) => {
    return {
        states: reduxState.states,
    };
};
export default connect(mapStoreToProps)(AddressForm);
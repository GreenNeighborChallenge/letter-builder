import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core/';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { CustomButton } from '../PickReps/RepButtons'
import Checkbox from '@material-ui/core/Checkbox';
import Stepper from '../Stepper/Stepper'
import { useLocation } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";


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
        height: '37em',
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
    },
    left: {
        float: 'left',
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
    },
});


const AddressForm = ({ dispatch, history, states }) => {
    const { card, form, formControl, label, select, signup, right, root, left, stepper } = useStyles();
    const { handleSubmit, register, control } = useForm();
    const location = useLocation();

    useEffect(() => {
        dispatch({ type: 'GET_STATES' })

    }, [location]);

    const currentPath = location.pathname;
    console.log(currentPath.split("/").pop());

    const onSubmit = (data) => {
        dispatch({ type: 'ADDRESS_INFO', payload: data })
        dispatch({ type: 'FETCH_OFFICES', payload: data.st })
        directToReps()
    }

    const directToReps = () => {
        history.push('/selectContacts')
    }

    const directBack = () => {
        history.push('/letterBuilder')
    }

    return (
        <div className={root}>
            <Card className={card}>
                <FormControl >
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        <Typography variant="h5" component="h2" gutterBottom align="center" >
                            Enter your Information
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="center" >
                            To send emails to your local representatives,
                            fill in your address and contact information
                            here and click “find my reps” to make sure your
                            letter gets to the right people.
                        </Typography>
                        <section className={form}>
                            <TextField inputRef={register} style={{ marginRight: '1em' }} label="First Name" variant="outlined" size="small" name="firstName" placeholder="First Name" />
                            <TextField inputRef={register} label="Last Name" variant="outlined" size="small" name="lastName" placeholder="Last Name" />
                            <div>
                                <TextField inputRef={register} label="Email" variant="outlined" size="small" style={{ marginTop: '1em' }} name="email" placeholder="Email Address" />
                            </div>
                            <div>
                                <TextField inputRef={register} label="StreetAddress" variant="outlined" size="small" multiline style={{ marginTop: '1em', width: "20em" }} name="street" placeholder="Street Address" />
                            </div>
                        </section>
                        <section className={formControl}>
                            <TextField inputRef={register} label="City" variant="outlined" size="small" name="city" placeholder="City" />
                            <FormControl className={formControl}>
                                <InputLabel className={label}  >State</InputLabel>
                                <Controller as={<Select className={select} variant="outlined" >
                                    {states &&
                                        states.map((state) => {
                                            return (<MenuItem key={state.id} value={state.state_abv}>{state.state_abv}</MenuItem>)
                                        })}
                                </Select>
                                } name="st" defaultValue="" control={control} />
                            </FormControl>
                            <TextField inputRef={register} label="Zip Code" variant="outlined" size="small" name="zip" placeholder="Zip Code" />
                        </section>
                        <section className={signup}>
                            <CustomButton variant="outlined" >
                                Sign Up for our News Letter!
                                    <Checkbox size="small" inputProps={{ 'aria-label': 'email signup check box' }} />
                            </CustomButton>
                        </section>
                        <section className={stepper}>
                            <Stepper step={1} />
                        </section>
                        <div className={left}>
                            <Button onClick={directBack} variant="outlined">Back</Button>
                        </div>
                        <div className={right}>
                            <Button type="submit" variant="outlined" >Find my Representatives!</Button>
                        </div>

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
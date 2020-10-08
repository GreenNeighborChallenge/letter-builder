import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core/';
import FormControl from '@material-ui/core/FormControl';
<<<<<<< HEAD
import PreviewLetter from '../PreviewLetter/PreviewLetter.js'
//import css
=======
>>>>>>> policy-language
import './AddressForm.css';
import { withStyles } from '@material-ui/core/styles';
import { CustomButton } from '../PickReps/RepButtons'
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
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
    card: {
        textAlign: 'center',
        position: 'relative',
        width: '48em',
        height: '35em',
        padding: '1em',
        backgroundColor: 'rgb(255,255,255, .85)',
    },
    cardActions: {
        float: 'right',
    },
    signup: {
        float: 'left',
    },
    form: {
        margin: '2em',
    }

});


class AddressForm extends Component {
    state = {
        firstName: 'patrick',
        lastName: 'mazurek',
        email: 'jpmzurk@gmail.com',
        street: '901 22nd Ave NE',
        city: 'minneapolis',
        st: 'MN',
        zip: '55418',
    };

    //gets states on mount to display in dropdown box
    componentDidMount() {
        this.getStates();
    }

    //actually gets the states, runs on mount
    getStates = () => {
        this.props.dispatch({ type: 'GET_STATES' })
    }

    //sends address form info to address saga, takes entire state
    directToReps = () => {
        this.props.history.push('/selectContacts')
        this.props.dispatch({ type: 'ADDRESS_INFO', payload: this.state })
        this.props.dispatch({ type: 'FETCH_OFFICES', payload: this.state.st })
    }

    directBack = () => {
        this.props.history.push('/letterBuilder')
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="root">
                <Card className={classes.card}>
                    <CardContent className="addressFormContainer">
                        <Typography variant="h5" component="h2" gutterBottom align="center" >
                            Enter your Information
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="center" >
                            To send emails to your local representatives,
                        fill in your address and contact information
                        here and click “find my reps” to make sure your
                        letter gets to the right people.
                        </Typography>
                        {/* all inputs change state on-change */}
                        <section className={classes.form} >
                            <TextField style={{ marginRight: '1em' }} label="First Name" variant="outlined" size="small" onChange={(event) => { this.setState({ ...this.state, firstName: event.target.value }) }} placeholder="First Name" />
                            <TextField label="Last Name" variant="outlined" size="small" onChange={(event) => { this.setState({ ...this.state, lastName: event.target.value }) }} placeholder="Last Name" />
                            <br />
                            <div>
                                <TextField label="Email" variant="outlined" size="small" style={{ marginTop: '1em' }}
                                    onChange={(event) => {
                                        this.setState({
                                            ...this.state,
                                            email: event.target.value
                                        })
                                    }}
                                    placeholder="Email Address" />
                            </div>

                            <div >
                                <TextField label="StreetAddress" variant="outlined" size="small" multiline style={{ marginTop: '1em', width: "20em" }}
                                    onChange={(event) => {
                                        this.setState({
                                            ...this.state,
                                            street: event.target.value
                                        })
                                    }}
                                    placeholder="Street Address" />
                            </div>
                        </section>

                        <FormControl className={classes.formControl}>
                            <TextField label="City" variant="outlined" size="small" onChange={(event) => { this.setState({ ...this.state, city: event.target.value }) }} placeholder="City" />
                            {/* options come from states reducer once it's "there" */}
                            <FormControl className={classes.formControl}>
                                <InputLabel className={classes.label} >State</InputLabel>
                                <Select
                                    className={classes.select}
                                    value={this.state.st}
                                    variant="outlined"
                                    onChange={(event) => { this.setState({ ...this.state, st: event.target.value }) }}
                                >
                                    <MenuItem disabled> State </MenuItem>
                                    {this.props.store.states &&
                                        this.props.store.states.map((state) => {
                                            return (<MenuItem key={state.id} value={state.state}>{state.state}</MenuItem>)
                                        })}
                                </Select>
                            </FormControl>

                            <TextField label="Zip Code" variant="outlined" size="small" onChange={(event) => { this.setState({ ...this.state, zip: event.target.value }) }} placeholder="Zip Code" />
                        </FormControl>
                    </CardContent>
                    <div style={{ marginTop: '2em' }}>
                        <section className={classes.signup}>
                            <CustomButton variant="outlined" >
                                Sign Up for our News Letter!
                            <Checkbox
                                    size="small"
                                    inputProps={{ 'aria-label': 'checkbox with small size' }}
                                />
                            </CustomButton>

                        </section>
                        <Button onClick={this.directBack}>Back</Button>
                        <CardActions className={classes.cardActions}>
                            <section>
                                <CustomButton variant="outlined" onClick={this.directToReps} >Find my Representatives!</CustomButton>
                                {/* {this.props.store.address &&
                                <p>{this.props.store.address.firstName}{this.props.store.address.st}</p>
                            } */}
<<<<<<< HEAD
                            </section>
                        </CardActions>
                    </div>
                </Card>
                <PreviewLetter />
=======
                        </section>
                    </CardActions>
                    </div>     
                </Card>
>>>>>>> policy-language
            </div>

        );
    }
}
const styledAddressForm = withStyles(styles)(AddressForm);

export default connect(mapStoreToProps)(styledAddressForm);
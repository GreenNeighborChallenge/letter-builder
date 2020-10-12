import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';


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
    form: {
        margin: '2em',
    }

});

class StateSelect extends Component {

    state = {
        //short_name is the state abbreviation.
        //named so it matches results from geocode API
        short_name: this.props.default
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_STATES'})

    }
 
    submitState = () => {
        console.log(this.state)
    
        //updates the zip reducer with new state info
        this.props.dispatch({ type: 'SEND_STATE_ABBREV', payload: this.state })
        //gets state policies to display on DOM
        this.props.dispatch({type: 'GET_STATE_POLICIES', payload: this.state})
    }

  render() {
    const { classes } = this.props;

    return (
     <>
          {this.props.store.states &&
         <FormControl className={classes.formControl}>
           <Select value={this.state.short_name} 
           onChange={(event) => { this.setState({short_name: event.target.value},
            this.submitState
            )}}
           className={classes.select}
           variant="outlined">
           <InputLabel className={classes.label} >State</InputLabel>
            {this.props.store.states.map(state => {
                return (
                <MenuItem key={state.id} value={state.state_abv}>{state.state_abv}</MenuItem>
                )  })}
        </Select>
         </FormControl>
  }
    </>
    );
  }
}

const styledStateSelect = withStyles(styles)(StateSelect)

export default connect(mapStoreToProps)(styledStateSelect);

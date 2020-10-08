import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
    card: {
        textAlign: 'center',
        position: 'relative',
        maxWidth: "45em",
        minWidth: '35em',
        minHeight: '35em',
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

class StateSelect extends Component {

    state = {
        selectedState: this.props.default
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_STATES'})
        console.log(this.state.selectedState)
    }
 
    handleChange = event => {
        //makes new call to geocode API with new state selection
        this.setState({selectedState: event.target.value})
        console.log('running handle change', this.state)
        //updates the zip reducer with new state info
        this.props.dispatch({ type: 'SEND_STATE_ABBREV', payload: this.state })
        this.props.dispatch({type: 'GET_STATE_POLICIES', payload: this.state.selectedState})
    }

  render() {
    const { classes } = this.props;

    return (
      <div>
          {this.props.store.states &&
        //  <FormControl className={classes.formControl}>
           <Select value={this.state.selectedState} 
           onChange={this.handleChange}
           className={classes.select}
           variant="outlined">
           <InputLabel className={classes.label} >State</InputLabel>
            {this.props.store.states.map(state => {
                return (
                <MenuItem key={state.id} value={state.state}>{state.state}</MenuItem>
                )

         })}
        </Select>
        // </FormControl>
  }
      </div>
    );
  }
}

const styledStateSelect = withStyles(styles)(StateSelect)

export default connect(mapStoreToProps)(styledStateSelect);

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import GradeExplainer from './GradeExplainer.jsx'
import './StateGrade.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StateSelect from './StateSelect';
import Stepper from '../Stepper/Stepper'
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LongExplainer from './LongExplainer.jsx';
import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";


//override button styling?
const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
                color: "black",
                backgroundColor: "white",
                boxShadow: "0 2px 2px 2px rgba(0, 0, 0, .4)",
                fontWeight: 'normal',
            }
        }
    }
});

class StateGrade extends Component {

    state = {
        showMore: false,
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_STATE_POLICIES', payload: this.props.stateInfo })
        this.props.dispatch({ type: 'FETCH_POLICIES' })
    }

    //searches by policy ID and key, returns policy info
    getById = (arr, value, key) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].policy_id === value && key === 'short') {
                return arr[i].short_info
            }
            else if (arr[i].policy_id === value && key === 'long') {
                return arr[i].long_info
            }
        }
    }


    testClick = () => {
        console.log("clicked")
    }



    render() {
        return (
            <div style={{ backgroundColor: 'white' }}>
                <MuiThemeProvider theme={theme}>
                    {this.props.store.statePolicies && this.props.store.policyLanguage &&
                        <>
                            <div id='stateTitle' >
                                <Typography variant='h4' gutterBottom>Your State: <StateSelect default={this.props.store.zip.short_name} /> </Typography></div>
                            <div className='outline'>
                                <Typography>Your state's energy and climate policy, graded:</Typography>
                            </div>
                            <div className='outline' id='grade'>
                                <Typography variant='h1'>{this.props.store.statePolicies[0] ? this.props.store.statePolicies[0].state_grade : <></>}</Typography>
                                <GradeExplainer />
                            </div>
                            <Typography variant='h5'>Your state's existing energy and climate policies: </Typography>

                            <List>
                                {this.props.store.statePolicies.map((policy, i) =>
                            
                                    <ListItem key={policy.policy_id} style={{paddingTop: 0, paddingBottom: 0}}>
                                        <Tooltip title={this.getById(this.props.store.policyLanguage, policy.policy_id, 'short') + ' Click to learn more'}>
                                        <Button onClick={() => this.testClick()}>
                                        {policy.policy_data ? 
                                        <p><span style={{ fontWeight: 'bold' }}>{policy.name}:</span> {policy.policy_data}</p>
                                        : <p><span style={{ fontWeight: 'bold' }}>{policy.name}:</span> none </p> }  
                                        <ListItemIcon><HelpOutlineIcon /></ListItemIcon>
                                         </Button>
                                        </Tooltip>
                                        <LongExplainer text={this.getById(this.props.store.policyLanguage, policy.policy_id, 'long')} title={this.getById(this.props.store.policyLanguage, policy.policy_id, 'name')}
                                            />
                                    </ListItem>

                                    
                                )}


                                <LongExplainer text={this.getById(this.props.store.policyLanguage, 1, 'long')} title={this.getById(this.props.store.policyLanguage, 1, 'name')} />


                                {/* these items hidden until see more button is clicked */}
                                {this.state.showMore &&
                                    <div id='overflowDiv'>

                                    </div>}

                                <div>
                                    {this.state.showMore ? <Button style={{ float: 'left', display: 'inline' }} onClick={() => this.setState({ showMore: false })}>See Less</Button>
                                        : <Button style={{ float: 'left', display: 'inline' }} onClick={() => this.setState({ showMore: true })}>See More</Button>}

                                </div>
                                <br />
                            </List>

                            <Button onClick={this.props.directToLetterBuilder} style={{ display: 'inline', float: 'right', margin: 5 }}>Create Your Letter!</Button>
                        </>
                    }
                </MuiThemeProvider>
            </div>
        );

    }
}

export default connect(mapStoreToProps)(StateGrade)

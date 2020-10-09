import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import GradeExplainer from './GradeExplainer.jsx'
import './StateGrade.css'
import PolicyExplainer from './PolicyExplainer.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StateSelect from './StateSelect';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LongExplainer from './LongExplainer.jsx';
import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
                color: "black",
                backgroundColor: "white",
                boxShadow: "0 2px 2px 2px rgba(0, 0, 0, .4)",
            }
        }
    }
});


class StateGrade extends Component {

    state = {
        showMore: false
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_STATE_POLICIES', payload: this.props.stateInfo })
        this.props.dispatch({ type: 'FETCH_POLICIES' })
    }

    //searches by policy ID and key, returns values 
    getById = (arr, value, key) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === value && key === 'name') {
                return arr[i].policy
            }
            else if (arr[i].id === value && key === 'short') {
                return arr[i].short_info
            }
            else if (arr[i].id === value && key === 'long') {
                return arr[i].long_info
            }
        }
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
                                <Typography>
                                    Your state's energy and climate policy, graded:
                    </Typography>
                            </div>
                            <div className='outline' id='grade'>
                                <Typography variant='h1'>{this.props.store.statePolicies.policy_grade}</Typography>
                                <GradeExplainer />
                            </div>
                            <Typography variant='h5'>
                                Your state's existing energy and climate policies:
                        </Typography>
                            <List>

                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 1, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 1, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 1, 'long')} title={this.getById(this.props.store.policyLanguage, 1, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.climate_plan ? this.props.store.statePolicies.climate_plan : <p>none</p>}</ListItem>

                                <LongExplainer text={this.getById(this.props.store.policyLanguage, 1, 'long')} title={this.getById(this.props.store.policyLanguage, 1, 'name')} />

                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 2, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 2, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 2, 'long')} title={this.getById(this.props.store.policyLanguage, 2, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.portfolio_standard ? this.props.store.statePolicies.portfolio_standard : <p>none</p>}</ListItem>

                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 5, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 5, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 5, 'long')} title={this.getById(this.props.store.policyLanguage, 5, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.green_pricing ? this.props.store.statePolicies.green_pricing : <p>none</p>}</ListItem>

                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 3, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 3, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 3, 'long')} title={this.getById(this.props.store.policyLanguage, 3, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.pace ? this.props.store.statePolicies.pace : <p>none</p>}</ListItem>

                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 9, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 9, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 9, 'long')} title={this.getById(this.props.store.policyLanguage, 9, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.energy_standard ? this.props.store.statePolicies.energy_standard : <p>none</p>}</ListItem>



                                {/* these items hidden until see more button is clicked */}
                                {this.state.showMore &&
                                    <>


                                        <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 4, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                            <Tooltip interactive title={
                                                <div>
                                                    {this.getById(this.props.store.policyLanguage, 4, 'short')}
                                                    <br />
                                                    <LongExplainer text={this.getById(this.props.store.policyLanguage, 4, 'long')} title={this.getById(this.props.store.policyLanguage, 4, 'name')} />
                                                </div>
                                            }>
                                                <HelpOutlineIcon /></Tooltip>
                                        </ListItemIcon>{this.props.store.statePolicies.clean_vehicle ? this.props.store.statePolicies.clean_vehicle : <p>none</p>}</ListItem>


                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 7, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 7, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 7, 'long')} title={this.getById(this.props.store.policyLanguage, 7, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.community_solar ? this.props.store.statePolicies.community_solar : <p>none</p>}</ListItem>


                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 6, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 6, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 6, 'long')} title={this.getById(this.props.store.policyLanguage, 6, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.home_solar ? this.props.store.statePolicies.home_solar : <p>none</p>}</ListItem>


                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 8, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 8, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 8, 'long')} title={this.getById(this.props.store.policyLanguage, 8, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.community_choice ? this.props.store.statePolicies.community_choice : <p>none</p>}</ListItem>


                                <ListItem><span style={{ fontWeight: 'bold' }}>{this.getById(this.props.store.policyLanguage, 10, 'name')}:</span><ListItemIcon style={{ minWidth: 0, marginRight: 5 }}>
                                    <Tooltip interactive title={
                                        <div>
                                            {this.getById(this.props.store.policyLanguage, 10, 'short')}
                                            <br />
                                            <LongExplainer text={this.getById(this.props.store.policyLanguage, 10, 'long')} title={this.getById(this.props.store.policyLanguage, 10, 'name')} />
                                        </div>
                                    }>
                                        <HelpOutlineIcon /></Tooltip>
                                </ListItemIcon>{this.props.store.statePolicies.community_choice? this.props.store.statePolicies.community_choice : <p>none</p>}</ListItem>
                                    </>}

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

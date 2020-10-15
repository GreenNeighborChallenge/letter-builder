import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';


import './AdminState.css';

function AdminStateInfo({ dispatch, store, stateInfo }) {

    const { handleSubmit, register, reset } = useForm();

    const [isEdit, setEdit] = React.useState(false);

    const onSubmit = (data) => {
        //add the state id to data to send over to the server
        const newData = { ...data, id: stateInfo.id }
        console.log(newData)
        //goes to statePolicy saga
        dispatch({ type: 'UPDATE_STATE_CONTACTS', payload: newData })
        //clear the inputs
        reset()
        setEdit(!isEdit)
    }

    const handleEdit = () => {
        setEdit(!isEdit)
    }




    // const stateInfo = this.props.stateInfo
    return (
        <div className="stateBody">

            {isEdit ?
                <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        
                        <h1>State Information</h1>
                        <p>State Grade: </p>

                        <TextField inputRef={register} label={'State Grade'} variant="outlined" size="small" name={'stateGrade'} defaultValue={stateInfo.state_grade ? stateInfo.state_grade : 'None'} /><br />
                        <p>Resident Count: </p>

                        <TextField inputRef={register} label={'Resident Count'} variant="outlined" size="small" name={'residentCount'} defaultValue={stateInfo.resident_count} /><br />
                        <p>Resident MWH: </p>

                        <TextField inputRef={register} label={'Resident MWH'} variant="outlined" size="small" name={'residentMWH'} defaultValue={stateInfo.resident_mwh} /><br />
                        <p>PUC: {stateInfo.puc}</p>

                        <TextField inputRef={register} label={'PUC'} variant="outlined" size="small" name={'statePOC'} defaultValue={stateInfo.puc} /><br />
                        <p>DoC Email: </p>

                        <TextField inputRef={register} label={'DoC'} variant="outlined" size="small" name={'stateDOC'} defaultValue={stateInfo.doc} /><br />
                        <p>Governor Email: </p>

                        <TextField inputRef={register} label={'Governor Email'} variant="outlined" size="small" name={'govEmail'} defaultValue={stateInfo.gov_email} /><br />

                        <Button type="submit">Save</Button>
                    </form>
                </FormControl>
                :
                <>
                    <h1>State Information</h1>
                    <Button onClick={handleEdit}>Edit</Button>

                    <p>State Grade: {stateInfo.state_grade ? stateInfo.state_grade : 'None Provided'}</p>

                    <p>Resident Count: {stateInfo.resident_count ? stateInfo.resident_count : 'None Provided'}</p>

                    <p>Resident MWH: {stateInfo.resident_mwh ? stateInfo.resident_mwh : 'None Provided'}</p>

                    <p>PUC: {stateInfo.puc ? stateInfo.puc : 'None Provided'}</p>

                    <p>DoC Email: {stateInfo.doc ? stateInfo.doc : 'None Provided'}</p>

                    <p>Governor Email: {stateInfo.gov_email ? stateInfo.gov_email : 'None Provided'}</p>

                </>
            }
        </div>
    );

}

export default connect(mapStoreToProps)(AdminStateInfo);
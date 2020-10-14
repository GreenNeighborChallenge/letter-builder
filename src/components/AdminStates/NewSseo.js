import React from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';

function AdminSseo({ handleSave, dispatch, sseoInfo, stateInfo }) {

    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        console.log(sseoInfo)
        const newData = { ...data, id: stateInfo.id }
        console.log('this is the', newData)
        //goes to state saga
        dispatch({ type: 'SET_NEW_STATE_SSEO', payload: newData })
        //reset inputs
        reset()
        //stop displaying the inputs for a new sseo
        handleSave();
    }

    return(
        <FormControl>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <p>Office Name:</p>
                <TextField inputRef={register} label="SSEO_name" variant="outlined" size="small" name="office" />
                <p>Office Email:</p>
                <TextField inputRef={register} label="SSEO_email" variant="outlined" size="small" name="email" />
            <Button type="submit">Save</Button>
            </form>
        </FormControl>
    )
}



export default connect(mapStoreToProps)(AdminSseo);
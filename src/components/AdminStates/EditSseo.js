import React from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';

function AdminSseo({ dispatch, handleSave, sseoInfo, sseoId }) {

    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        //add the state id to data to send over to the server
        const newData = { ...data, id: sseoId }
        // console.log(newData)
        // //goes to states saga
        dispatch({ type: 'UPDATE_SSEO', payload: data })
        // //clear the inputs
        reset()
        handleSave()
    }

    return(
        <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        {sseoInfo.map((sseo) => {
                            return (
                                <>
                                    <p>Office Name:</p>
                                    <TextField inputRef={register} label={sseo.SSEO_name} variant="outlined" size="small" name="office" defaultValue={sseo.SSEO_name} />
                                    <p>Office Email:</p>
                                    <TextField inputRef={register} label={sseo.SSEO_email} variant="outlined" size="small" name="email" defaultValue={sseo.SSEO_email} />
                                    <Button type="submit">Save</Button>
                                </>
                            )
                        })}
                    </form>
                </FormControl>
    )
}



export default connect(mapStoreToProps)(AdminSseo);
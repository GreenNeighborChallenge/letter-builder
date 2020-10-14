import React, { useState, useEffect } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import NewSseo from './NewSseo'
import { Typography } from '@material-ui/core'

function AdminSseo({ dispatch, store, stateInfo }) {

    const { handleSubmit, register} = useForm();

    const [isEdit, setEdit] = useState(false);
    const [isNewSseo, setSseo] = useState(false);
    const [sseoId, setSseoId] = useState(null);

    const onSubmit = (data, sseo) => {
        console.log(sseoId)
        //add the state id to data to send over to the server
        const newData = { ...data, id: sseoId }
        console.log(newData)
        // //goes to states saga
        dispatch({ type: 'UPDATE_SSEO', payload: newData })
        // //clear the inputs
        // reset()
        setEdit(!isEdit)
    }

    const handleEdit = (id) => {
        setEdit(!isEdit)
        setSseoId(id)
    }

    const handleAdd = () => {
        setSseo(!isNewSseo)
    }

    const handleSave = () => {
        setSseo(!isNewSseo)
    }

    return (
        <section className="statePolicies">
            <Typography variant="h5"> State Offices </Typography>
            <Button onClick={handleAdd}>Add a new SSEO</Button>
            {(isEdit === false && store.sseoInfo[0]) &&
                <div> 
                    {store.sseoInfo.map((sseo) => {
                        return (
                            <>
                            <Button onClick={() => handleEdit(sseo.id)}>Edit</Button>
                                <Typography variant="body1">Office Name: {sseo.SSEO_name}</Typography>
                                <Typography variant="body1">Office Email: {sseo.SSEO_email}</Typography>
                            </>
                        )
                    })}

                </div>
            }
            {(isEdit === true && store.sseoInfo[0]) &&
                <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        {store.sseoInfo.map((sseo) => {
                            return (
                                <>
                                    <Typography variant="body1">Office Name:</Typography>
                                    <TextField inputRef={register} label={sseo.SSEO_name} variant="outlined" size="small" name="office" defaultValue={sseo.SSEO_name} />
                                    <Typography variant="body1">Office Email:</Typography>
                                    <TextField inputRef={register} label={sseo.SSEO_email} variant="outlined" size="small" name="email" defaultValue={sseo.SSEO_email} />
                                    <Button type="submit">Save</Button>
                                </>
                            )
                        })}
                    </form>
                </FormControl>

            }
            {
                isNewSseo &&
                <NewSseo handleSave={handleSave} />
            }


        </section >
    );
}

export default connect(mapStoreToProps)(AdminSseo);

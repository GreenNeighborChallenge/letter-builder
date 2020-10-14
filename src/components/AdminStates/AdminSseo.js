import React from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import NewSseo from './NewSseo'

function AdminSseo({ dispatch, store, stateInfo }) {

    const { handleSubmit, register, reset } = useForm();

    const [isEdit, setEdit] = React.useState(false);
    const [isNewSseo, setSseo] = React.useState(false);
    const [sseoId, setSseoId] = React.useState(null);

    const onSubmit = (data, sseo) => {
       
        console.log(data)
        console.log(sseoId)
        //add the state id to data to send over to the server
        // const newData = { ...data, id: id }
        // console.log(newData)
        // //goes to states saga
        dispatch({ type: 'UPDATE_SSEO', payload: data })
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
        <div className="statePolicies">
            <h1> State Offices</h1>
            <Button onClick={handleAdd}>Add a new SSEO</Button>
            {(isEdit === false && store.sseoInfo[0]) &&
                <div> 
                    {store.sseoInfo.map((sseo) => {
                        return (
                            <>
                            <Button onClick={() => handleEdit(sseo.id)}>Edit</Button>
                                <p>Office Name: {sseo.SSEO_name}</p>
                                <p>Office Email: {sseo.SSEO_email}</p>
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
                                    <p>Office Name:</p>
                                    <TextField inputRef={register} label={sseo.SSEO_name} variant="outlined" size="small" name="office" defaultValue={sseo.SSEO_name} />
                                    <p>Office Email:</p>
                                    <TextField inputRef={register} label={sseo.SSEO_email} variant="outlined" size="small" name="email" defaultValue={sseo.SSEO_email} />
                                    <input type="hidden" value={sseo.id}></input>
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


        </div >
    );
}

export default connect(mapStoreToProps)(AdminSseo);

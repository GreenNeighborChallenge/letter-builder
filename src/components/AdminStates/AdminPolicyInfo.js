import React from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';

function AdminPolicyInfo({ dispatch, store, stateInfo }) {

    const { handleSubmit, register, reset } = useForm();

    const [isEdit, setEdit] = React.useState(false);

    const onSubmit = (data) => {
        //add the state id to data to send over to the server
        const newData = { ...data, id: stateInfo.id }
        //goes to statePolicy saga
        dispatch({ type: 'UPDATE_POLICY_INFO', payload: newData })
        //clear the inputs
        reset()
        setEdit(!isEdit)
    }

    const handleEdit = () => {
        setEdit(!isEdit)
    }

    return (
        <div className="stateBody">
            <h1>State Policy Info</h1>
            {isEdit ?
                <FormControl>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        {stateInfo.AdminStateInfo.map((policy) => {
                            return (
                                <>
                                    <p>{policy.policy_name}:</p>
                                    <TextField inputRef={register} placeholder={policy.policy_name} variant="outlined" size="small" name={policy.policy_id} defaultValue={policy.policy_data} />
                                    <br />
                                </>
                            )
                        })}
                        <Button type="submit" variant="outlined" className="editSaveBtn">Save</Button>
                        <br />
                    </form>
                </FormControl>
                :
                <>
                <Button variant="outlined" className="editSaveBtn" onClick={handleEdit}>Edit</Button>
                <br />
                    {stateInfo.AdminStateInfo.map((stateData) => {
                        return (
                            <div>

                                {stateData.policy_data ?

                                 <p>{stateData.policy_name}: {stateData.policy_data}</p>: 
                                 <p>{stateData.policy_name}: None</p>}

                            </div>
                        )
                    })}
                    
                </>
            }
        </div>
    );
}


export default connect(mapStoreToProps)(AdminPolicyInfo);

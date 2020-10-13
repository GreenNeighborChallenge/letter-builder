import React, { useEffect } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/button'
import TextField from '@material-ui/core/TextField';
import './AdminForms.css';

function PolicyInfoForm({ dispatch, store }) {

    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data) => {
        const newData = { ...data, id: store.adminState.id }
        console.log(newData)
        dispatch({ type: 'SET_POLICY_INFO', payload: newData })
        reset()
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_POLICIES' });
    }, [dispatch])



    return (
        <div>
            <h1>State Policy Info</h1>
            <FormControl>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                    {store.policyLanguage.map((policy) => {
                        return (
                            <>
                                <p>{policy.name}:</p>
                                <TextField inputRef={register} label={policy.name} variant="outlined" size="small" name={policy.id} placeholder={policy.name} />
                                <br />
                            </>
                        )
                    })}
                    <Button type="submit">save</Button>
                </form>
            </FormControl>

        </div>
    );
}


export default connect(mapStoreToProps)(PolicyInfoForm);

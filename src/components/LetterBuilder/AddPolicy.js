import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'inline',
    }
});

function AddPolicy({ policy, zip, dispatch}) {
    const { root } = useStyles();
    //adding policy to letter
    const [addPolicy, setAddPolicy] = useState(false)
    
    const handleAdd = () => {
        const data = {state: zip.long_name, id: policy.id }
        dispatch({ type: 'POLICY_TO_LETTER', payload: data });
        setAddPolicy(true)
    }

    const handleDelete = (e) => {        
        setAddPolicy(false)
        const filteredPolicy = policy.petition_info.replaceAll("[STATE]", zip.long_name)

        dispatch({ type: 'DELETE_POLICY_FROM_LETTER', payload: {text: filteredPolicy, id: policy.id}})
    }

    return (
        <div className={root} >
            {addPolicy ?
                <Button color="primary" onClick={handleDelete}>Delete</Button> :
                <Button color="primary" onClick={handleAdd}>Add</Button>
            }
         
        </div>
    );
}

export default connect(mapStoreToProps)(AddPolicy);
import React from 'react';
import Button from '@material-ui/core/Button';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'inline',
    }
});

function AddPolicy({ policy, dispatch}) {
    const { root } = useStyles();
    //adding policy to letter
    const [added, addPolicy] = React.useState(false)
    const handleAdd = () => {
        dispatch({ type: 'POLICY_TO_LETTER', payload: policy.id });
        addPolicy(true)
    }

    const handleDelete = () => {
        addPolicy(false)
        dispatch({ type: 'DELETE_POLICY_FROM_LETTER', payload: policy.petition_info})
    }

    return (
        <div className={root} >
            {added ?
                <Button color="primary" onClick={handleDelete}>Delete</Button> :
                <Button color="primary" onClick={handleAdd}>Add</Button>
            }
         
        </div>
    );
}

export default connect(mapStoreToProps)(AddPolicy);
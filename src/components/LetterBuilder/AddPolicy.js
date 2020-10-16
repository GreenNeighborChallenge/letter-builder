import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
// import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'inline',
    }
});

function AddPolicy({ policy, zip, dispatch, letter }) {
    const { root } = useStyles();

    //adding policy to letter
    const [addPolicy, setAddPolicy] = useState(false)

    //check if ids are already in bodyIds array
    useEffect(() => {
        const result = letter.bodyIds.some(id => policy.id === id)
        if (result === true) {
            setAddPolicy(true)
        }
    }, [policy.id, letter.bodyIds]);

    const handleAdd = () => {
        const data = { state: zip.long_name, id: policy.id }
        dispatch({ type: 'POLICY_TO_LETTER', payload: data });
        setAddPolicy(true)
    }

    const handleDelete = (e) => {
        setAddPolicy(false)
        const filteredPolicy = policy.petition_info.replaceAll("[STATE]", zip.long_name)
        dispatch({ type: 'DELETE_POLICY_FROM_LETTER', payload: { text: filteredPolicy, id: policy.id } })
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
const mapStoreToProps = (reduxState) => {
    return {
        letter: reduxState.letter,
    };
};
export default connect(mapStoreToProps)(AddPolicy);
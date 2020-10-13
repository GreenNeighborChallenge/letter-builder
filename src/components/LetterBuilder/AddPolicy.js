import React from 'react';
import Button from '@material-ui/core/Button';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux'
import "./LetterItem.css"



function AddPolicy(props) {

    //adding policy to letter
    const [added, addPolicy] = React.useState(false)
    const handleAdd = () => {
        props.dispatch({ type: 'POLICY_TO_LETTER', payload: props.policy.id });
        addPolicy(true)
    }

    const handleDelete = () => {
        addPolicy(false)
        props.dispatch({ type: 'DELETE_POLICY_FROM_LETTER', payload: props.policy.petition_info})
    }

    return (
        <div style={{display: 'inline'}}>
   
            {added ?
                <Button style={{color: 'blue'}} className="addButton" onClick={handleDelete}>Delete</Button> :
                <Button style={{color: 'blue'}} className="addButton" onClick={handleAdd}>Add</Button>
            }
         
        </div>
    );
}

export default connect(mapStoreToProps)(AddPolicy);
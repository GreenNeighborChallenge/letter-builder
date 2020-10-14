import React from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import Button from '@material-ui/core/button'


function ViewSseo({handleEdit, sseo}) {

    return (
        <>
            <Button onClick={() => handleEdit(sseo.id)}>Edit</Button>
            <p>Office Name: {sseo.SSEO_name}</p>
            <p>Office Email: {sseo.SSEO_email}</p>
        </>
    )
}



export default connect(mapStoreToProps)(ViewSseo);
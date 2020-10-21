import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


function ZipError(props) {
  return (
      <p className='errorMsg'> You must enter a valid zip code</p>
  );
}

export default connect(mapStoreToProps)(ZipError);
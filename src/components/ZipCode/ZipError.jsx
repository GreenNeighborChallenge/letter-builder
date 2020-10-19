import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


function ZipError(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  return (
      <p className='errorMsg'> You must enter a valid zip code</p>
  );
}

export default connect(mapStoreToProps)(ZipError);
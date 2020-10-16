const zipReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SEND_ZIP':
        return {isLoading: true}
      case 'SET_ZIP_RESPONSE':
        let zipObj = {
          long_name: action.payload[0].long_name,
          short_name: action.payload[0].short_name,
          isLoading: false
        }
        return zipObj
        
      //if user changes state, updates the zip reducer
      case 'SET_STATE_RESPONSE':
        console.log(action.payload)
        return action.payload
      case 'UNSET_ZIP_RESPONSE':
        return {isLoading: false,
               zipFail: true};
      default:
        return state;
    }
  };
  
  export default zipReducer;
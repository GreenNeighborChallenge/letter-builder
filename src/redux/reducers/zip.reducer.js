const zipReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ZIP_RESPONSE':
        return action.payload;
      case 'UNSET_ZIP_RESPONSE':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default zipReducer;
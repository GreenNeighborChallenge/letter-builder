const adminStateReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NEW_STATE_ID':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default adminStateReducer;
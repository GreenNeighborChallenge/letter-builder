const adminReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_STATE_ID':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default adminReducer;
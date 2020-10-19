const recs = (state = {}, action) => {
    switch (action.type) {
      case 'SET_RECS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default recs;
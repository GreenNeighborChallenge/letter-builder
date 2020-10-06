const stateInfo = (state = {}, action) => {
    switch (action.type) {
    //action.payload is the state table in DB --
    //state name, and the contact info
      case 'UPDATE_STATE_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default stateInfo;
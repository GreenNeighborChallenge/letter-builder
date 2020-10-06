const address = (state = {}, action) => {
    switch (action.type) {
    //action.payload is the AddressForm state --
    //firstName, lastName, email, st (street address), city, state, and zipcode
      case 'UPDATE_ADDRESS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default address;
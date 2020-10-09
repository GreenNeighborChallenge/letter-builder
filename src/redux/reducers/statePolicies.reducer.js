const statePoliciesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STATE_POLICIES':
            return action.payload;
        default:
            return state;
    }
}

export default statePoliciesReducer
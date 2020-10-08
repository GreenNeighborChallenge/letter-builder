const emails = (state = [], action) => {
    switch (action.type) {
        case 'PUT_EMAIL':
            return stateaction.payload;
        default:
            return state;
    }
}

export default emails